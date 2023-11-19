function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "miles.html";
  }
 /*
  async function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard');
    leaderboardTable.innerHTML = ''; // Clear existing rows

    try {
        // Fetch user data from the backend service
        const response = await fetch('/api/scores');
        const userData = await response.json();
        console.log(userData);

        // Convert the user data into an array and sort it by miles in descending order
        const sortedUserData = Object.entries(userData)
            .map(([name, miles]) => ({ name, miles }))
            .sort((a, b) => b.miles - a.miles);
            console.log(sortedUserData);

        // Populate the leaderboard table with the sorted user data
        sortedUserData.forEach((entry, index) => {
            console.log(entry);
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.miles}</td>
            </tr>`;
            leaderboardTable.innerHTML += row;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
*/
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







