import React from 'react';
import './JoinLeague.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';

const JoinLeague = () => {
  const leagues = [
    { name: 'Bronze League', entryFee: '0.10 BTC', className: 'bronze' },
    { name: 'Silver League', entryFee: '0.50 BTC', className: 'silver' },
    { name: 'Gold League', entryFee: '1.00 BTC', className: 'gold' },
  ];

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Ball Out Logo" />
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
      <div className="join-league-container">
        <h1 className="mainTitle">Join a League</h1>
        <div className="leagues-list">
          {leagues.map((league, index) => (
            <div className={`league-card ${league.className}`} key={index}>
              <h2>{league.name}</h2>
              <p><strong>Entry Fee:</strong> {league.entryFee}</p>
              <button className="join-button">Join Now</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Ball Out App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JoinLeague;
