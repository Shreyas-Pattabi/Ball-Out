// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">Ball Out</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Ball Out</h1>
        <p>Join the most immersive fantasy sports experience ever. Compete with friends, track your progress, and win amazing prizes!</p>
        <button>Get Started</button>
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
