import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './EditLineup.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png'

const EditLineup = () => {
    const initialPlayers = [
        { name: 'LeBron James', team: 'Los Angeles Lakers', averagePoints: 25.5, todayGame: 'vs Warriors', playerCardLink: '/players/lebron-james', injury: 'NONE', overall: 99 },
        { name: 'Kevin Durant', team: 'Brooklyn Nets', averagePoints: 28.2, todayGame: 'vs Celtics', playerCardLink: '/players/kevin-durant', injury: 'NONE' , overall: 98},
        { name: 'Stephen Curry', team: 'Golden State Warriors', averagePoints: 30.1, todayGame: '@ Lakers', playerCardLink: '/players/stephen-curry', injury: 'NONE' , overall: 98},
        { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', averagePoints: 27.9, todayGame: 'vs Knicks', playerCardLink: '/players/giannis-antetokounmpo', injury: 'NONE', overall: 98 },
        { name: 'James Harden', team: 'Brooklyn Nets', averagePoints: 24.3, todayGame: 'None', playerCardLink: '/players/james-harden', injury: 'NONE', overall: 97 },
        { name: 'Anthony Davis', team: 'Los Angeles Lakers', averagePoints: 22.6, todayGame: '@ Warriors', playerCardLink: '/players/anthony-davis', injury: 'NONE', overall: 97 },
        { name: 'Luka Dončić', team: 'Dallas Mavericks', averagePoints: 33.9, todayGame: 'None', playerCardLink: '/players/luka-doncic', injury: 'DTD', overall: 99 },
        { name: 'Joel Embiid', team: 'Philadelphia 76ers', averagePoints: 27.7, todayGame: '@ Hawks', playerCardLink: '/players/joel-embiid', injury: 'OUT', overall: 98 },
        { name: 'Damian Lillard', team: 'Portland Trail Blazers', averagePoints: 26.8, todayGame: '@ Jazz', playerCardLink: '/players/damian-lillard', injury: 'NONE', overall: 96 },
        { name: 'Nikola Jokić', team: 'Denver Nuggets', averagePoints: 25.2, todayGame: '@ Suns', playerCardLink: '/players/nikola-jokic', injury: 'NONE', overall: 98 },
        { name: 'Kyrie Irving', team: 'Brooklyn Nets', averagePoints: 23.9, todayGame: 'None', playerCardLink: '/players/kyrie-irving', injury: 'NONE', overall: 95 },
        { name: 'Kawhi Leonard', team: 'Los Angeles Clippers', averagePoints: 25.4, todayGame: 'vs Mavericks', playerCardLink: '/players/kawhi-leonard', injury: 'OUT', overall: 96 },
        { name: 'Russell Westbrook', team: 'Washington Wizards', averagePoints: 23.1, todayGame: 'None', playerCardLink: '/players/russell-westbrook', injury: 'SUSP', overall: 92 },
        { name: 'Jimmy Butler', team: 'Miami Heat', averagePoints: 26.5, todayGame: '@ Bulls', playerCardLink: '/players/jimmy-butler', injury: 'NONE', overall: 90 }
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
        <table className="edit-lineup-table">
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Team</th>
                    <th>Average Points</th>
                    <th>Today's Game</th>
                    <th>Injury</th>
                    <th>Player Card</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td>{index > 12 ? 'IR' : index > 9 ? 'BENCH' : index > 6 ? 'FLEX' : index > 5 ? 'F' : index > 4 ? 'G' : index > 3 ? 'C' : index > 2 ? 'PF' : index > 1 ? 'SF' : index > 0 ? 'SG' : 'PG'}</td>
                        <td>{player.name}</td>
                        <td>{(player.overall - 60)/2}</td>
                        <td>{player.team}</td>
                        <td>{player.averagePoints.toFixed(1)}</td>
                        <td>{player.todayGame}</td>
                        <td>{player.injury}</td>
                        <td><a href={player.playerCardLink}>Player Card</a></td>
                        <td>
                            <button onClick={() => moveUp(index)}><FontAwesomeIcon icon={faArrowUp} /></button>
                            <span style={{ margin: '0 0.25em' }}></span> {/* Add space here */}
                            <button onClick={() => moveDown(index)}><FontAwesomeIcon icon={faArrowDown} /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default EditLineup;
