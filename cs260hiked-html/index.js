const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const {DB, scoreCollection} = require('./database.js');
console.log(DB);
const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;


  // JSON body parsing using built-in middleware
  app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

  // CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

  /* 
  apiRouter.get('/miles', (_req, res) => {
    res.send(scores);
  });

  let scores = {};
  apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
  });
  */
  try {
  apiRouter.get('/scores', async (_req, res) => {
    scores = await scoreCollection.find().toArray();
    res.send(scores);
  });
  
  apiRouter.get('/miles', async (_req, res) => {
    const leaderboardDoc = await scoreCollection.findOne({ leaderboard: 'leaderboard' });
    if (leaderboardDoc) {
      res.send(leaderboardDoc.data);
    } else {
      res.send({});
    }
  });
  

/* 
  apiRouter.post('/updateMiles', (req, res) => {
    const { userName, miles } = req.body;
    if (!userName || !miles) {
      return res.status(400).send('Bad Request');
    }
    let userMiles = scores[userName] || 0;
    userMiles += miles;
    scores[userName] = userMiles;
    res.send({ [userName]: userMiles });
    console.log({ [userName]: userMiles });
  });
*/
apiRouter.post('/updateMiles', async (req, res) => {
  const { userName, miles } = req.body;
  if (!userName || !miles) {
    return res.status(400).send('Bad Request');
  }

  // Retrieve the user's current score
  const userScore = await scoreCollection.findOne({ userName });
  let userMiles = userScore ? userScore.miles : 0;
  userMiles += miles;

  // Update the database
  await scoreCollection.updateOne(
    { userName },
    { $set: { miles: userMiles } }, // Only update the miles
    { upsert: true }
  );

  res.send({ [userName]: userMiles });
  console.log({ [userName]: userMiles });
});




/* 
  apiRouter.post('/updateLeaderboard', (req, res) => {
      const data = req.body;
      if (!data) {
          return res.status(400).send('Bad Request');
      }
      leaderboardData = data;
      res.send({ leaderboardData });
      console.log({ leaderboardData });
  });
*/


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  // setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

  // Return the application's default page if the path is unknown
  app.use((_req, res) => {  
    res.sendFile('index.html', { root: 'public' });
  });



    // database operation
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }