import React, { useState } from 'react';
import './JoinLeague.css';
import { Link } from 'react-router-dom';

const JoinLeague = () => {
  const [leagueCode, setLeagueCode] = useState('');

  const handleInputChange = (e) => {
    setLeagueCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('League Code:', leagueCode);
  };

  return (
    <div className="join-league">
      <header className="header">
        <div className="logo">
          <Link to="/join-league">
            <img src={require('../assets/logoBO.png')} alt="Ball Out Logo" />
          </Link>
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
      <main className="main-content">
        <h1>Join a League</h1>
        <form onSubmit={handleSubmit} className="join-league-form">
          <label htmlFor="leagueCode">Enter League Code:</label>
          <input
            type="text"
            id="leagueCode"
            value={leagueCode}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Join League</button>
        </form>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Ball Out App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JoinLeague;
