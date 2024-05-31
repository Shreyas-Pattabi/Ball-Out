import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';
import './NewLineup.css';
import './Home.css';

const Players = () => {
    const initialPlayers = [
        { name: 'LeBron James', team: 'Los Angeles Lakers', averagePoints: 25.5, injury: 'NONE', overall: 99, PPG: 30.2, RPG: 8.7, APG: 9.4, SPG: 1.2, BPG: 1.0, price: 0.053 },
        { name: 'Kevin Durant', team: 'Brooklyn Nets', averagePoints: 28.2, injury: 'NONE' , overall: 98, PPG: 27.8, RPG: 7.5, APG: 6.2, SPG: 1.5, BPG: 1.2, price: 0.051 },
        { name: 'Stephen Curry', team: 'Golden State Warriors', averagePoints: 30.1, injury: 'NONE' , overall: 98, PPG: 32.6, RPG: 5.3, APG: 6.9, SPG: 1.4, BPG: 0.3, price: 0.049 },
        { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', averagePoints: 27.9, injury: 'NONE', overall: 98, PPG: 29.5, RPG: 12.3, APG: 6.5, SPG: 1.8, BPG: 1.9, price: 0.055 },
        { name: 'James Harden', team: 'Brooklyn Nets', averagePoints: 24.3, injury: 'NONE', overall: 97, PPG: 27.5, RPG: 6.3, APG: 11.0, SPG: 1.7, BPG: 0.9, price: 0.049 },
        { name: 'Anthony Davis', team: 'Los Angeles Lakers', averagePoints: 22.6, injury: 'NONE', overall: 97, PPG: 24.8, RPG: 9.7, APG: 3.2, SPG: 1.5, BPG: 2.4, price: 0.048 },
        { name: 'Luka Dončić', team: 'Dallas Mavericks', averagePoints: 33.9, injury: 'DTD', overall: 99, PPG: 31.2, RPG: 8.7, APG: 9.8, SPG: 1.3, BPG: 0.8, price: 0.057 },
        { name: 'Joel Embiid', team: 'Philadelphia 76ers', averagePoints: 27.7, injury: 'OUT', overall: 98, PPG: 28.6, RPG: 11.2, APG: 3.4, SPG: 1.0, BPG: 3.1, price: 0.058 },
        { name: 'Damian Lillard', team: 'Portland Trail Blazers', averagePoints: 26.8, injury: 'NONE', overall: 96, PPG: 29.7, RPG: 4.3, APG: 7.5, SPG: 1.6, BPG: 0.4, price: 0.047 },
        { name: 'Nikola Jokić', team: 'Denver Nuggets', averagePoints: 25.2, injury: 'NONE', overall: 98, PPG: 26.9, RPG: 11.0, APG: 8.3, SPG: 1.2, BPG: 1.5, price: 0.054 },
    ];

    const [players, setPlayers] = useState(initialPlayers);

    const handleAddPlayer = (index) => {
        // Perform the action when the "+" sign is clicked
    };

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
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/lineup">Lineup</Link></li>
                        <li><Link to="/matchup">Matchup</Link></li>
                        <li><Link to="/my-league">League</Link></li>
                        <li><Link to="/draft">Draft</Link></li>
                        <li><Link to="/players">Free Agents</Link></li>
                    </ul>
                </nav>
            </header>
            <div className="cards-container">
                {players.map((player, index) => (
                    <div key={index} className="player-card">
                        <div className="card-body">
                            <div className="add-player" onClick={() => handleAddPlayer(index)}>+</div>
                            <h3>{player.name}</h3>
                            <div className="image-info">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <h1>Image Here</h1>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                            <div className="additional-info">
                                <p>Team: {player.team}</p>
                                <p>Fantasy PPG: {player.averagePoints.toFixed(1)}</p>
                                <p>Injury: {player.injury}</p>
                                <p>Price (sBTC): {player.price.toFixed(3)}</p>
                                <p>PPG: {player.PPG.toFixed(1)}</p>
                                <p>RPG: {player.RPG.toFixed(1)}</p>
                                <p>APG: {player.APG.toFixed(1)}</p>
                                <p>SPG: {player.SPG.toFixed(1)}</p>
                                <p>BPG: {player.BPG.toFixed(1)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;
