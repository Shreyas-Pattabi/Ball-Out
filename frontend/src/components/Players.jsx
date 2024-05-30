import React from 'react';
import { Link } from 'react-router-dom';

const Players = () => {
    return (
    
      <div>
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
        <p>THIS IS WHERE YOU CHOOSE PLAYERS</p>
      </div>
    );
  };

export default Players;
