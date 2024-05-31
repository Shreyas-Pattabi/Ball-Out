import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './NewLineup.css';
import './Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';
import axios from 'axios';

const Players = () => {
    const [nbaPlayers, setNbaPlayers] = useState([{}])

    useEffect(() => {
        axios.get('http://localhost:8000/api/players/')
            .then(response => {
                setNbaPlayers(JSON.parse(response.data))
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleAddPlayer = (player) => {
        // Function to handle the + button click
        console.log("Player added:", player);
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
                {nbaPlayers.map((player, index) => (
                    <div key={index} className="player-card">
                        <div className="card-header">
                            <div className="card-actions">
                                <button onClick={() => handleAddPlayer(player)}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>{player.first_name + " " + player.last_name}</h3>
                            <h4>{player.position}</h4>
                            <h4>{player.city} {player.team}</h4>
                            <div className="image-info">
                                <img src={player.image_url} alt="No Image Available" className='mt-[1.4rem]'/>
                            </div>
                            <div className="additional-info">
                                <p>Fantasy PPG: {player.fantasy_pts}</p>
                                <p>Price: {player.cost} sBTC</p>
                                <p>PPG: {player.points}</p>
                                <p>RPG: {player.rebounds}</p>
                                <p>APG: {player.assists}</p>
                                <p>SPG: {player.steals}</p>
                                <p>BPG: {player.blocks}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Players;
