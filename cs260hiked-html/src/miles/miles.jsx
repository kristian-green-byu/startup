import React, { useState, useEffect } from 'react';

function checkUsername() {
  if (localStorage.getItem("userName") !== localStorage.getItem("oldUserName")) {
    clearLeaderboard();
  }
}

export function Miles() {
  const [leaderboardData, setLeaderboardData] = useState(getLeaderboardFromLocalStorage());
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      updateLeaderboard();
      checkUsername();
    }, 1000); 

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  function getLeaderboardFromLocalStorage() {
    const leaderboardJSON = localStorage.getItem('leaderboard');
    return leaderboardJSON ? JSON.parse(leaderboardJSON) : [];
  }

  function updateLeaderboard() {
    const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score); // Sort in descending order
    setLeaderboardData(sortedData);
    saveLeaderboard(sortedData);
  }

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

  function saveLeaderboard(data) {
    localStorage.setItem('leaderboard', JSON.stringify(data));
  }

  function clearLeaderboard() {
    setLeaderboardData([]); // Clear the data array
    localStorage.removeItem('leaderboard'); // Remove the 'leaderboard' key from local storage
    updateLeaderboard();
  }

  function updateLeaderboard() {
    var username;
    if (localStorage.getItem("userName") !=null) {
      username = localStorage.getItem("userName");
      localStorage.setItem("oldUserName", username);
}



  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name && !isNaN(score)) {
      setLeaderboardData(prevData => [...prevData, { name, score }]);
      setName('');
      setScore('');
      updateMiles(parseInt(score));
    }
  }

  return (
    <div>
      <h2>Your Statistics</h2>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Trail Number</th>
              <th scope="col">Trail Name</th>
              <th scope="col">Miles</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divider"></div>
      <form className="row g-3" id="update-form" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Name of Hike</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Number of Miles</label>
          <input type="text" className="form-control" id="score" value={score} onChange={(e) => setScore(e.target.value)} />
        </div>

        <div>
          <button className="btn btn-secondary" type="submit">Submit Entry</button>
        </div>
      </form>
    </div>
  );
}
