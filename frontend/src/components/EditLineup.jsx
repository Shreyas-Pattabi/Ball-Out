import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './NewLineup.css';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';

const EditLineup = () => {
    const initialPlayers = [
        { name: 'LeBron James', team: 'Los Angeles Lakers', averagePoints: 25.5, todayGame: 'vs Warriors', injury: 'NONE', overall: 99, PPG: 30.2, RPG: 8.7, APG: 9.4, SPG: 1.2, BPG: 1.0, MPG: 36.5 },
        { name: 'Kevin Durant', team: 'Brooklyn Nets', averagePoints: 28.2, todayGame: 'vs Celtics', injury: 'NONE' , overall: 98, PPG: 27.8, RPG: 7.5, APG: 6.2, SPG: 1.5, BPG: 1.2, MPG: 35.8 },
        { name: 'Stephen Curry', team: 'Golden State Warriors', averagePoints: 30.1, todayGame: '@ Lakers', injury: 'NONE' , overall: 98, PPG: 32.6, RPG: 5.3, APG: 6.9, SPG: 1.4, BPG: 0.3, MPG: 34.7 },
        { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', averagePoints: 27.9, todayGame: 'vs Knicks', injury: 'NONE', overall: 98, PPG: 29.5, RPG: 12.3, APG: 6.5, SPG: 1.8, BPG: 1.9, MPG: 36.8 },
        { name: 'James Harden', team: 'Brooklyn Nets', averagePoints: 24.3, todayGame: 'None', injury: 'NONE', overall: 97, PPG: 27.5, RPG: 6.3, APG: 11.0, SPG: 1.7, BPG: 0.9, MPG: 35.2 },
        { name: 'Anthony Davis', team: 'Los Angeles Lakers', averagePoints: 22.6, todayGame: '@ Warriors', injury: 'NONE', overall: 97, PPG: 24.8, RPG: 9.7, APG: 3.2, SPG: 1.5, BPG: 2.4, MPG: 33.6 },
        { name: 'Luka Dončić', team: 'Dallas Mavericks', averagePoints: 33.9, todayGame: 'None', injury: 'DTD', overall: 99, PPG: 31.2, RPG: 8.7, APG: 9.8, SPG: 1.3, BPG: 0.8, MPG: 36.9 },
        { name: 'Joel Embiid', team: 'Philadelphia 76ers', averagePoints: 27.7, todayGame: '@ Hawks', injury: 'OUT', overall: 98, PPG: 28.6, RPG: 11.2, APG: 3.4, SPG: 1.0, BPG: 3.1, MPG: 34.2 },
        { name: 'Damian Lillard', team: 'Portland Trail Blazers', averagePoints: 26.8, todayGame: '@ Jazz', injury: 'NONE', overall: 96, PPG: 29.7, RPG: 4.3, APG: 7.5, SPG: 1.6, BPG: 0.4, MPG: 36.5 },
        { name: 'Nikola Jokić', team: 'Denver Nuggets', averagePoints: 25.2, todayGame: '@ Suns', injury: 'NONE', overall: 98, PPG: 26.9, RPG: 11.0, APG: 8.3, SPG: 1.2, BPG: 1.5, MPG: 35.8 },
        { name: 'Kyrie Irving', team: 'Brooklyn Nets', averagePoints: 23.9, todayGame: 'None', injury: 'NONE', overall: 95, PPG: 27.3, RPG: 4.8, APG: 6.9, SPG: 1.4, BPG: 0.6, MPG: 33.5 },
        { name: 'Kawhi Leonard', team: 'Los Angeles Clippers', averagePoints: 25.4, todayGame: 'vs Mavericks', injury: 'OUT', overall: 96, PPG: 28.0, RPG: 7.6, APG: 5.3, SPG: 1.9, BPG: 1.8, MPG: 34.6 },
        { name: 'Russell Westbrook', team: 'Washington Wizards', averagePoints: 23.1, todayGame: 'None', injury: 'SUSP', overall: 92, PPG: 25.5, RPG: 8.3, APG: 10.6, SPG: 1.6, BPG: 0.9, MPG: 36.2 },
        { name: 'Jimmy Butler', team: 'Miami Heat', averagePoints: 26.5, todayGame: '@ Bulls', injury: 'NONE', overall: 90, PPG: 27.9, RPG: 7.2, APG: 8.1, SPG: 1.3, BPG: 0.7, MPG: 35.4 }
    ];

    const [players, setPlayers] = useState(initialPlayers);

    const moveUp = (index) => {
        if (index > 0) {
            setPlayers(prevPlayers => {
                const updatedPlayers = [...prevPlayers];
                const temp = updatedPlayers[index];
                updatedPlayers[index] = updatedPlayers[index - 1];
                updatedPlayers[index - 1] = temp;
                return updatedPlayers;
            });
        }
    };

    const moveDown = (index) => {
        if (index < players.length - 1) {
            setPlayers(prevPlayers => {
                const updatedPlayers = [...prevPlayers];
                const temp = updatedPlayers[index];
                updatedPlayers[index] = updatedPlayers[index + 1];
                updatedPlayers[index + 1] = temp;
                return updatedPlayers;
            });
        }
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
                        <li><Link to="/">Login</Link></li>
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
                        <div className="card-header">
                            <span className="position">
                                {index > 12 ? 'IR' : index > 9 ? 'BENCH' : index > 6 ? 'FLEX' : index > 5 ? 'F' : index > 4 ? 'G' : index > 3 ? 'C' : index > 2 ? 'PF' : index > 1 ? 'SF' : index > 0 ? 'SG' : 'PG'}
                            </span>
                            <div className="card-actions">
                                <button onClick={() => moveUp(index)}><FontAwesomeIcon icon={faArrowUp} /></button>
                                <button onClick={() => moveDown(index)}><FontAwesomeIcon icon={faArrowDown} /></button>
                            </div>
                        </div>
                        <div className="card-body">
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
                                <p>Today's Game: {player.todayGame}</p>
                                <p>Injury: {player.injury}</p>
                                <p>Price: {(player.overall - 60) / 2}</p>
                                <p>PPG: {player.PPG.toFixed(1)}</p>
                                <p>RPG: {player.RPG.toFixed(1)}</p>
                                <p>APG: {player.APG.toFixed(1)}</p>
                                <p>SPG: {player.SPG.toFixed(1)}</p>
                                <p>BPG: {player.BPG.toFixed(1)}</p>
                                <p>MPG: {player.MPG.toFixed(1)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditLineup;
