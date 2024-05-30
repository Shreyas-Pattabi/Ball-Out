import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Draft = () => {
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
      <p>THIS IS WHERE YOU DRAFT</p>
    </div>
  );
};

export default Draft;
