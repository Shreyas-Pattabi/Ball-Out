import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png'

const Login = () => {
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
            <li><Link to="/">Login</Link></li>
            <li><Link to="/lineup">Lineup</Link></li>
            <li><Link to="/matchup">Matchup</Link></li>
            <li><Link to="/my-league">League</Link></li>
            <li><Link to="/draft">Draft</Link></li>
            <li><Link to="/players">Free Agents</Link></li>
          </ul>
        </nav>
      </header>
      </div>
    );
  };

export default Login;
