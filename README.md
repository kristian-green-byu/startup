# Startup
## Class Notes
the [notes.md](https://github.com/kristian-green-byu/startup/blob/main/notes.md) file will contain all classnotes, and it may also be used on exams.
# Hiked
## Description Deliverable
### Elevator Pitch
Have you ever wanted to keep track of the number of hikes you've completed and compete with your friends to see who can conquer more trails? With Hiked, you can do just that. Hiked is designed so that you can track the total hikes you finish along with their statistics. The application takes these statistics and imports them into an internal leaderboard system to encourage healthy competition among friends. In addition, Hiked supports leaving reviews so you can plan your trips according to what others have said about specific trails. If you don't know where to begin, Hiked displays the most popular trails on the front page so that you can take inspiration from others and have an adventure.

### Design
![hiked_mockup](https://github.com/kristian-green-byu/startup/assets/144286975/3aaaec5f-1faa-4d99-a70d-565b261fc932)

### Key Features
- Secure login using HTTPS
- Leaderboard is displayed and updated in realtime
- Displays popular trails
- Ability of admin to edit the trails list
- Users are able to append reviews to trails
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
Note: As of now, I haven't finished any deliverables, so the information stated will certainly be subject to change

## HTML Deliverable
I will implement the main functionality of my application with HTML.
- Links: I will have links to the login page, and I will also have links to allow users to access parts of the website that support statistics or reviews
- Text: Most of the text of the application will utilize HTML. It will be stylized with CSS
- Images: Images of each trail will be included with HTML functionality
- HTML Pages: Application has at least two pages to support login and the leaderboard, but it may require more
- Login: HTML will support functionality for logginng in and registration
- Database: The leaderboard and reviews will be updated with information from the database
- WebSocket: Functionality allows leaderboard to be updated in realtime

## CSS Deliverable
To make things look more appealing, I will use CSS to stylize the website.
- Header, footer, and body elements: CSS will make them more aesthetic
- Support for different device types: CSS will be used to make the website compatible with both computers and phones with different screen sizes
- Application text: Will have consistent and effective fonts
- Images: Will modify images to make them blend in to the style of the website

## JavaScript Deliverable
Javascript will support the application by adding user functionality and powering the leaderboard sorting algorythms.
- Login: Javascript will be used to tie in the login process to the rest of the program
- Logic: Javascript will allow miles to be calculated so that the leaderboard can be updated depending on user inputs
- database: Will retrieve information about the leaderboard and reviews from the database
- WebSocket: WebSocket messages will support leaderboard functionality


## Service Delivarable
I will use service to add backend endpoints to make the leaderboard function.
- Backend service endpoints: Keeps track of login information and supports endpoints for leadership information
- Frontend calls service endpoints

## DB Deliverable
Values for the leaderboard will be stored in the database.
- Endpoints: Will store endpoints for miles and other user information

## Login Deliverable
Login will process accounts and allow users to input information.
- Registration: Create accounts in the database

## Websocket Deliverable
Will be used to update the leaderboard and reviews.

## React Deliverable
The application will be designed to function on the React framework.
