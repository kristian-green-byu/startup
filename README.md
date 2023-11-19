# Startup
## Class Notes
the [notes.md](https://github.com/kristian-green-byu/startup/blob/main/notes.md) file will contain all classnotes, and it may also be used on exams.
# Hiked
## Description Deliverable
### Elevator Pitch
Have you ever wanted to compete with your friends to see who can conquer more trails? With Hiked, you can do just that. Hiked is designed so that you can track the total hikes you finish along with their statistics. The application takes these statistics and imports them into an internal leaderboard system to encourage healthy competition among friends. In addition, Hiked displays some of the most popular trails so you can plan your trips according to what others have said. If you don't know where to begin, Hiked displays the most popular trails on the front page so that you can take inspiration from others and have an adventure.

### Design
![hiked_mockup](https://github.com/kristian-green-byu/startup/assets/144286975/3aaaec5f-1faa-4d99-a70d-565b261fc932)

### Key Features
- Secure login using HTTPS
- Leaderboard is displayed and updated in realtime
- Displays popular trails
- Ability of admin to edit the trails list
- Leaderboard position is updated depending on the total miles that each user inputs

### Technologies
I will use a variety of different programming languages to accomplish my goals.
- HTML: Uses HTML as the backbone of the website and login pages. Hyperlinks are used to go to login or signup pages, and other HTML functionality is used to organize each section of the website
- CSS: Stylizes the HTML page to make it more aesthetically appealing and compatible with different devices. Uses fundamentals of design such as contrast
- Javascript: Enables login, submiting miles to the leaderboard, displaying the leaderboard, and supports functionality so that users can add reviews. Will also provide backend endpoint calls.
- Service: Provides endpoints for login, submitting miles, and retrieving scores or reviews
- DB: Stores information such as users, miles, and reviews in the database
- Login: Allows users to register or login. Credentials will be securely stored to prevent dataleaks
- Websocket: Enables other users to see the leaderboard and reviews for trails
- React: Application will be designed to function within the React web framework

# Deliverables
Note: As of now, I haven't finished any deliverables, so the information stated will certainly be subject to change.

## HTML Deliverable
I implemented the main functionality of my application with HTML.
- Links: I have links to all pages on the website including the mainpage, other trails, and links to signup, login, or submit miles.
- Text: I implemented the text I will use for my website. It will later be stylized with CSS.
- Images: Images of each trail are displayed, and a small icon is given to the top player in the leaderboard.
- HTML Pages: My application has a total of 5 HTML pages to support different functions of the website.
- Login: I have placeholders with links using HTML that will later support login.
- Database: The leaderboard will be updated with information from the database. Also, information from each user will be stored in the database. Placeholders are all implemented to highlight this functionality.
- WebSocket: I put in place holders which, using WebSocket in the future, will allow the leaderboard to be updated in realtime.

## CSS Deliverable
I implemented CSS to make my website both more appealing and also one step closer to having additional functionalities. 
- Header, footer, and body elements: I used CSS to make them more aesthetic and interactive. The buttons change when a user hovers their mouse over them, and the password input forms hide their information
- Support for different device types: I used CSS to make the website compatible with both computers and phones with different screen sizes.
- Application text: The application has consistent font throughout. I decided to use Gill Sans for my website, and I changed all the font to be of that type in the body for consistency.
- Images: I added borders around my images, and I also padded them to make them more visually appealing and compatible with mobile devices. I also added a carousel using bootstap functionality to make my website more interactive.
- Forms and Tables: I modified bootstrap templates to add functional forms and tables into my website that provide better placeholders to build upon with future deliverables.
- Other application elements - All remaining application elements that I built with HTML now have CSS tied to them both with both Bootstrap and proprietary code. I used some aspects of design such as contrast to make the website more easy to read and more appealing.
   
## JavaScript Deliverable
I used Javascript to add basic user functionality and leaderboard sorting algorythms that will tie in with later deliverables such as the service, Login, or DB deliverables. 
- Login: With Javascript, the program now stores login information locally as a placeholder for future functionality. It allows users to input miles that are unique to their accounts. The login information isn't uploaded to a database yet, however.
- Interaction Logic: I used Javascript to calculate the total miles for each user so that it can be displayed on the index page. Javascript functionality also automatically sorts leaderboards so that they are in order. The logic also automatically clears the mile input page for new users.
- Websocket: Current leaderboard functionality uses placeholders with local storage that will later be updated to use Websocket as to allow the leaderboard to updated in realtime from multiple users. The leaderboard is currently updated in realtime with local storage only, so the changes made on the website aren't apparent to other users.
- Support for Database: I wrote Javascript code to create several leaderboard objects and usernames in my localstorage that will later be uploaded to the database so that changes in my website can be seen by all users.


## Service Delivarable
I used service to add backend endpoints to make my leaderboard function across multiple devices.
- I utilized Node.js and Express to create a storage space for Javascript objects.
- My frontend about.js file calls a third party service endpoint to provide jokes on the about.html page.
- I created code so that my backend provides end points to store leaderboard information imported from miles.js.
- I added some express endpoints that will be used with my next deliverables to eventually support the creation of accounts.
- The main leaderboard listed on the index.html page imports its values from a backend service call.

## DB Deliverable
I stored values for the leaderboard in the database.
- MongoDB Atlas database: I implemented a MongoDB Atlas database to hold user information and to update the main leaderboard.
- Backened Endpoints: User miles and their names are now stored as backend endpoints. Further functionality in the login deliverable will also use MongoDB in the future as to add endpoints for specific user accounts.

## Login Deliverable
Login processes accounts and allows users to input information.
- Supports new user registration: New users can be created in the signup.html page and added to the MongoDB database.
- Supports existing user authentication: Existing users can enter their username and password to proceed to enter miles.
- Stores and retrieves credentials in MongoDB: Information from existing users is stored in an encrypted format in MongoDB.
- Restricts application functionality based upon authentication: If a wrong username or password is entered, the login functionality doesn't work.

## Websocket Deliverable
Will be used to update the leaderboard and reviews.

## React Deliverable
The application will be designed to function on the React framework.
