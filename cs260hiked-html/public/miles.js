class InputMiles {
    constructor() {
        const playerNameEl = document.querySelector('.player-name');
        playerNameEl.textContent = this.getPlayerName();
    }
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Blank Username';
    }
}

const miles = new InputMiles();


// Function to clear the leaderboard when the username changes
function clearLeaderboard() {
    leaderboard.innerHTML = ""; // Clear the leaderboard
    leaderboardData = []; // Clear the data array
    localStorage.removeItem('leaderboard'); // Remove the 'leaderboard' key from local storage
}

// Function to get leaderboard data from local storage
function getLeaderboardFromLocalStorage() {
    const leaderboardJSON = localStorage.getItem('leaderboard');
    return leaderboardJSON ? JSON.parse(leaderboardJSON) : [];
}
async function getLeaderboardFromServer() {
    const response = await fetch('/api/updateLeaderboard');
    const leaderboardData = await response.json();
    return leaderboardData;
}


// Function to save leaderboard data to local storage
function saveLeaderboard(data) {
    localStorage.setItem('leaderboard', JSON.stringify(data));

    // Send a POST request to the server with the updated leaderboard data
    fetch('/api/updateLeaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
}


// Sample initial leaderboard data or load from local storage
let leaderboardData = getLeaderboardFromLocalStorage();

// Display the initial leaderboard data
const leaderboard = document.getElementById("leaderboard");

function updateLeaderboard() {
    leaderboard.innerHTML = ""; // Clear the leaderboard

    leaderboardData.sort((a, b) => b.score - a.score); // Sort in descending order

    for (let i = 0; i < leaderboardData.length; i++) {
        const entry = leaderboardData[i];
        const row = `<tr><td>${i + 1}</td><td>${entry.name}</td><td>${entry.score}</td></tr>`;
        leaderboard.innerHTML += row;
    }

    // Save the updated leaderboard data to local storage
    saveLeaderboard(leaderboardData);
}



updateLeaderboard(); // Display the initial leaderboard

// Add a new entry to the leaderboard
const updateForm = document.getElementById("update-form");


updateForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");

    const name = nameInput.value;
    const score = parseInt(scoreInput.value);

    if (name && !isNaN(score)) {
  
        leaderboardData.push({ name, score });
        nameInput.value = "";
        scoreInput.value = "";
        updateLeaderboard();
        updateMiles(score); // Update the user's total miles in local storage
    }
});


function updateMiles(miles) {
    const userName = localStorage.getItem('userName');
    fetch('/api/updateMiles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userName, miles }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
}



// Function to save leaderboard data to local storage
function saveLeaderboardToLocalStorage() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
}
if (localStorage.getItem("oldUserName")!=null) {
    if (localStorage.getItem("userName") != (localStorage.getItem("oldUserName"))){
        username = localStorage.getItem("userName");
        localStorage.setItem("oldUserName", username);
        clearLeaderboard();
    }
}
username = localStorage.getItem("userName");
localStorage.setItem("oldUserName", username);