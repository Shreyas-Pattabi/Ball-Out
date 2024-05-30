import React from 'react';
import './Draft.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';

const Draft = () => {
  const initialBudget = 1000;
  const players = [
    { name: 'Player 1', cost: 500 },
    { name: 'Player 2', cost: 150 },
    { name: 'Player 3', cost: 200 },
    { name: 'Player 4', cost: 250 },
    { name: 'Player 5', cost: 300 },
  ];

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

      <div className="draft-container">
        <h1>Draft Simulation</h1>
        <p>THIS IS WHERE YOU DRAFT</p>
        <div className="budget">
          <h2>Budget: ${initialBudget}</h2>
        </div>
        <div className="draft-section">
          <div className="available-players">
            <h2>Available Players</h2>
            <ul>
              {players.map(player => (
                <li key={player.name}>
                  {player.name} - ${player.cost}
                  <button onClick={() => alert(`Draft ${player.name}`)}>Draft</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="drafted-players">
            <h2>Drafted Players</h2>
            <ul>
              <li>No players drafted yet.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
