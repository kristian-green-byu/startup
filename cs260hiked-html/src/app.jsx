import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {About} from './about/about'
import {Leaderboard} from './leaderboard/leaderboard'
import {Miles} from './miles/miles'
import {Other_trails} from './other_trails/other_trails'


async function update_forms() {
    var loggedOutElements = ["logged_out_username", "logged_out_password", "logged_out_login", "logged_out_signup"];
    var loggedInElements = ["logged_in_welcome", "logged_in_username", "logged_in_enter_miles", "logged_in_logout"];
  
    if(localStorage.getItem("userName")) {
        // If the 'username' key exists in local storage
        loggedOutElements.forEach(function(id) {
            document.getElementById(id).style.display = "none";
        });
        loggedInElements.forEach(function(id) {
            document.getElementById(id).style.display = "block";
        });
        document.getElementById("logged_in_username").textContent = localStorage.getItem("userName");
    } else {
        // If the 'username' key does not exist in local storage
        loggedOutElements.forEach(function(id) {
            document.getElementById(id).style.display = "block";
        });
        loggedInElements.forEach(function(id) {
            document.getElementById(id).style.display = "none";
        });
    }
}
window.onload = update_forms;


async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

    function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
    
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('userName', userName);
      update_forms();
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

  



function NotFound() {
    return <main className="big">Unknown Address.</main>
}


export default function App() {
    return (
        <BrowserRouter>
    <div className="main"> 
        <header>
        <h1>Hiked</h1>
        <header className="p-3 bg-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            </a>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="leaderboard" className="nav-link px-2 text-white">Leaderboard</NavLink></li>
                <li><NavLink to="other_trails" className="nav-link px-2 text-white">Other Trails</NavLink></li>
                <li><NavLink to="about" className="nav-link px-2 text-white">About</NavLink></li>
            </ul>
    
        
            <div>
            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" id="logged_out_username">
                <FormControl type="username" className="form-control form-control-dark text-bg-dark" id="userName" placeholder="Username..." />
            </Form>
            </div>
            <div>
            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" id="logged_out_password">
            <FormControl type="password" className="form-control form-control-dark text-bg-dark"s id="userPassword" placeholder="Password..." aria-label="Search" />
            </Form>
            </div>

            <div className="text-end">
                <button className="btn btn-outline-light me-2" id="logged_out_login" onClick={loginUser}>Login</button>
            </div>
            <div className="text-end">
                <button onClick={createUser} to="signup" className="btn btn-outline-light me-2" id="logged_out_signup">Sign Up</button>
            </div>
            
            <p className="user" id="logged_in_welcome">Welcome,</p>
            <span className="player-name" style={{marginRight: "1em"}} id="logged_in_username"></span>
            <div className="text-end" id="logged_in_enter_miles">
                <NavLink to="miles" className="btn btn-outline-light me-2">Enter Miles</NavLink>
            </div>
            <div className="text-end" id="logged_in_logout">
                <button className="btn btn-outline-light me-2" id="logged_out_login" onClick={logout}>Logout</button>
            </div>
            
            
            
            </div>
        </div>
        </header>
    </header>
    <div className="divider"></div>
    <main className="content">
    
<Routes>
<Route path='/index.html' element={<Leaderboard />} exact />
  <Route path='/leaderboard' element={<Leaderboard />} exact />
  <Route path='/miles' element={<Miles />} />
  <Route path='/other_trails' element={<Other_trails />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>

    </main>

    <footer className="footer">

        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">2023 Kristian Green</p>
    
        
            <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="https://github.com/kristian-green-byu/startup" className="nav-link px-2 text-muted">Github</a></li>
    
            </ul>
        </footer>
        </div>
    </footer>

    </div> </BrowserRouter>)}
