function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "miles.html";
  }
  function updateLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard');
    leaderboardTable.innerHTML = ''; // Clear existing rows

    // Initialize an array to store user data
    const userData = [];

    // Iterate through local storage to collect user data
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Skip the 'userName' key and entries without valid miles data
        if (key !== 'userName' && !isNaN(localStorage.getItem(key))) {
            userData.push({ name: key, miles: parseInt(localStorage.getItem(key)) });
        }
    }

    // Sort the user data by miles in descending order
    userData.sort((a, b) => b.miles - a.miles);

    // Populate the leaderboard table with the sorted user data
    userData.forEach((entry, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.miles}</td>
        </tr>`;
        leaderboardTable.innerHTML += row;
    });
}

// Call the updateLeaderboard function to populate the leaderboard initially
updateLeaderboard();





