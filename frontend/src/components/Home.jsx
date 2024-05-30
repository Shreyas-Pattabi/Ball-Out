import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';
import videoBg from '../assets/home-video-bg.mp4';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Ball Out Logo" />
          <span></span>
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
      <div className='top-bg'>
        <video src={videoBg} autoPlay loop muted />
        <div className="hero-content">
          <h1 className='mainTitle'>Welcome to BALL OUT!</h1>
          <p>Join the first ever bitcoin integrated immersive fantasy sports experience. Compete with friends, track your progress, and win amazing prizes!</p>

          <Link to="/create-account" target="_blank">
           <button >Create Account!</button>
          </Link>
        </div>
      </div>
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
            <h3>Winners Everyday</h3>
            <p>Win exclusive rewards based on your performance every game day.</p>
          </div>
        </div>
      </section>
      <section className="additional-content">
        <h2>More Information</h2>
        <p>Explore more features and join the Ball Out community to experience the best in fantasy sports!</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Ball Out App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
