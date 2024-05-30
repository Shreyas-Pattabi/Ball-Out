import React from 'react';
import './EditLineup.css';
import { Link } from 'react-router-dom';

function generateRandomData() {
  const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G', 'Team H', 'Team I', 'Team J'];
  const data = [];
  let totalWins = 0;
  let totalLosses = 0;
  let totalDraws = 0;

  for (let i = 0; i < teams.length; i++) {
    let wins, losses, draws;
    
    // Ensure total wins equal total losses
    if (totalWins === totalLosses) {
      wins = Math.floor(Math.random() * 6); // Random number of wins between 0 and 5
      losses = wins;
    } else if (totalWins > totalLosses) {
      wins = Math.floor(Math.random() * (5 - totalWins + totalLosses + 1)); // Ensure total wins equal total losses
      losses = wins;
    } else {
      losses = Math.floor(Math.random() * (5 - totalLosses + totalWins + 1)); // Ensure total wins equal total losses
      wins = losses;
    }

    // Ensure total draws are even
    if (i === teams.length - 1) {
      draws = totalDraws % 2 === 0 ? 0 : 1;
    } else {
      draws = Math.floor(Math.random() * 3); // Random number of draws between 0 and 2
    }

    totalWins += wins;
    totalLosses += losses;
    totalDraws += draws;

    const pointsFor = Math.floor(Math.random() * 10001) + 10000; // Random number between 10000 and 20000
    const pointsAgainst = Math.floor(Math.random() * 10001) + 10000; // Random number between 10000 and 20000
    const winPercentage = (wins / 10) * 100 || 0; // Calculate win percentage
    data.push({ team: teams[i], wins, losses, draws, pointsFor, pointsAgainst, winPercentage });
  }
  return data.sort((a, b) => b.winPercentage - a.winPercentage); // Sort teams based on win percentage
}

const League = () => {
  const eastTeams = generateRandomData().slice(0, 5);
  const westTeams = generateRandomData().slice(0, 5);

  return (
    <div className="home">
      <header className="header">
        <div className="logo">Ball Out</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/lineup">Lineup</Link></li>
            <li><Link to="/matchup">Team</Link></li>
            <li><Link to="/my-league">League</Link></li>
            <li><Link to="/draft">Draft</Link></li>
            <li><Link to="/players">Free Agents</Link></li>
          </ul>
        </nav>
      </header>
    <div>
      <h1 className='custom-heading'>Eastern Conference</h1>
      <table className="edit-lineup-table"> {/* Apply the CSS class */}
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points For</th>
            <th>Points Against</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          {eastTeams.map(team => (
            <tr key={team.team}>
              <td>{team.team}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.draws}</td>
              <td>{team.pointsFor}</td>
              <td>{team.pointsAgainst}</td>
              <td>{team.winPercentage.toFixed(2)}%</td> {/* Display win percentage with two decimal places */}
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <h1 className='custom-heading'>Western Conference</h1>
      <table className="edit-lineup-table"> {/* Apply the CSS class */}
        <thead>
          <tr>
            <th>Team</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points For</th>
            <th>Points Against</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          {westTeams.map(team => (
            <tr key={team.team}>
              <td>{team.team}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.draws}</td>
              <td>{team.pointsFor}</td>
              <td>{team.pointsAgainst}</td>
              <td>{team.winPercentage.toFixed(2)}%</td> {/* Display win percentage with two decimal places */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default League;
