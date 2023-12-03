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

async function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard');
    leaderboardTable.innerHTML = ''; // Clear existing rows

    try {
        // Fetch user data from the backend service
        const response = await fetch('/api/scores');
        const userData = await response.json();

        // Sort the user data by miles in descending order
        const sortedUserData = userData.sort((a, b) => b.miles - a.miles);

        // Populate the leaderboard table with the sorted user data
        sortedUserData.forEach((entry, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${entry.userName}</td>
                <td>${entry.miles}</td>
            </tr>`;
            leaderboardTable.innerHTML += row;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the updateLeaderboard function to populate the leaderboard initially
updateLeaderboard();







