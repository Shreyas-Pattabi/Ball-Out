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
          <img src={logo} alt="Ball Out Logo" />
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

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Ball Out!</h1>
          <p>Join the first ever bitcoin integrated immersive fantasy sports experience. Compete with friends, track your progress, and win amazing prizes!</p>
          <button>Create An Account</button>
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
            <h3>Exciting Rewards</h3>
            <p>Win exclusive prizes and rewards based on your performance.</p>
          </div>
        </div>
      </section>

      <section className="additional-content">
        <h2><br />
          <br />
          <br />
          <br />
          <br /></h2>
        <p> 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /><br />

        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Fantasy Sports App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
