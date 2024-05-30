// src/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png'
const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="BO Logo" />
          <span>Ball Out</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/matchup">Team</Link></li>
            <li><Link to="/draft">Draft</Link></li>
            <li><Link to="/players">Players</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ball Out!</h1>
          <p>Join the first ever bitcoin integrated immersive fantasy sports experience. Compete with friends, track your progress, and win!</p>
          <button>Login</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Bitcoin Integration</h3>
            <p>Stay updated with real-time player statistics and game scores.</p>
          </div>
          <div className="feature-item">
            <h3>Custom Leagues</h3>
            <p>Create and manage your own custom leagues with friends.</p>
          </div>
          <div className="feature-item">
            <h3>sum sum</h3>
            <p>sum sum sum sum.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Fantasy Sports App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
