import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './leaderboard.css';


export function Leaderboard() {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0)


  

  useEffect(() => {
    async function updateLeaderboard() {
      try {
        // Fetch user data from the backend service
        const response = await fetch('/api/scores');
        const userData = await response.json();
  
        // Sort the user data by miles in descending order
        const sortedUserData = userData.sort((a, b) => b.miles - a.miles);
  
        // Update the state with the sorted user data
        setUserData(sortedUserData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    // Call the updateLeaderboard function to populate the leaderboard initially
    updateLeaderboard();
  
    // Set an interval to update the leaderboard every 5 seconds
    const intervalId = setInterval(updateLeaderboard, 1000);
  
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  
  
  return (
  <div>
  <div>
    <h2>Current Leaderboard</h2>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
            <th scope="col">Miles</th>
          </tr>
        </thead>
        <tbody id="leaderboard">
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.miles}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="divider"></div>
  </div>

        <h2>Top Trails</h2>

        <div className="darker">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.visitutah.com/azure/cmsroot/visitutah/media/site-assets/three-season-photography/northern-utah/timpanogos-cave/utah-county_jay-droghns_timpanogos-cave-12.jpg?w=800&h=550&mode=crop"
          alt="Timpanogos Cave Trail"
        />
        <Carousel.Caption>
          <h5>Timpanogos Cave Trail</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://theworldtravelguy.com/wp-content/uploads/2021/11/DSCF3018.jpg"
          alt="Angel's Landing"
        />
        <Carousel.Caption>
          <h5>Angel's Landing</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://packedagain.com/wp-content/uploads/2021/02/feature_delicate-arch.jpg"
          alt="Delicate Arch"
        />
        <Carousel.Caption>
          <h5>Delicate Arch</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
        
      <div className="divider"></div>
      <div className="chat">
      <div className="name">
    
      <fieldset id="chat-controls">
        <legend>Chat</legend>
        <input id="new-msg" type="text"  />
        <button onClick={sendMessage} className="btn btn-outline-dark me-2">Send</button>
      </fieldset>
      <div className="chat_paragraph" id="chat-text"></div>
    </div>
    </div>
   
    <h2 className="top_spacing">Button Pressing Simulator</h2>
      <div className="button">
        <button className="btn btn-outline-dark me-2" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
    </div>

    
  )
}

// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = localStorage.getItem('userName');
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  if (chatText) {
    chatText.innerHTML =
      `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
      chatText.innerHTML;
  } else {
    console.log('Element with id "chat-text" not found');
  }
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
if (input) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
} else {
  console.log('Element with id "new-msg" not found');
}
