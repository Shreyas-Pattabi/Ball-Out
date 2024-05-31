import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logoBO.png';
import videoBg2 from '../assets/Loginbg.mp4';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {user: username, pass: password})
      localStorage.setItem('user_id', username)
      if (response.data['message'] == 'Login Successful'){
        navigate('/join-league')
      }
      console.log(response.data['message'])
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
            <button type="button" className="login-button" onClick={login}>Log In</button>
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
