import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logoBO.png';
import videoBg2 from '../assets/Loginbg.mp4';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {user: username, pass: password})
    }
    catch(error) {
      console.error('Error logging in', error)
    }
  }

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="BO Logo" />
          <span>Ball Out</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/lineup">Lineup</Link></li>
            <li><Link to="/matchup">Matchup</Link></li>
            <li><Link to="/my-league">League</Link></li>
            <li><Link to="/draft">Draft</Link></li>
            <li><Link to="/players">Free Agents</Link></li>
          </ul>
        </nav>
      </header>
      <div className="outer">
        <video src={videoBg2} autoPlay loop muted />
        <div className="background" />
        <form className="login-form">
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" style={{ color: '#ffffff' }} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" style={{ color: '#ffffff' }} onChange={(e) => setPassword(e.target.value)}/>
          <div className="login">
            <button type="submit" className="login-button" onClick={login}>Log In</button>
          </div>
          <div className="social">
            <div className="social-button go"><i className="fab fa-google"></i> Google</div>
            <div className="social-button fb"><i className="fab fa-facebook"></i> Facebook</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
