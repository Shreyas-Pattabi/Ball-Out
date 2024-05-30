import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">Fantasy Sports</div>
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
          <h1>Welcome to Fantasy Sports</h1>
          <p>Join the most immersive fantasy sports experience ever. Compete with friends, track your progress, and win amazing prizes!</p>
          <button>Get Started</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Real-Time Stats</h3>
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

      <footer className="footer">
        <p>&copy; 2024 Fantasy Sports App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
