const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;


// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/miles', (_req, res) => {
  res.send(scores);
});

let scores = {};
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});


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

let leaderboardData = {};

apiRouter.post('/updateLeaderboard', (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).send('Bad Request');
    }
    leaderboardData = data;
    res.send({ leaderboardData });
    console.log({ leaderboardData });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {  
  res.sendFile('index.html', { root: 'public' });
});


