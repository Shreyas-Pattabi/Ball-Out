import React from 'react';
import './Matchup.css';

const Matchup = () => {
    const currentTime = new Date();
    currentTime.setHours(20);
    currentTime.setMinutes(40);

    const formatTimeLeft = (gameTime, currentTime) => {
        const [gameHour, gameMinute] = gameTime.split(/[:\s]/);
        const gameDate = new Date();
        gameDate.setHours(parseInt(gameHour, 10) + (gameTime.includes('PM') && gameHour !== '12' ? 12 : 0));
        gameDate.setMinutes(parseInt(gameMinute, 10));

        if (gameDate > currentTime) {
            return 'Did Not Start';
        }

        const timeDifference = (currentTime - gameDate) / 1000 / 60;

        if (timeDifference < 12) return `${12 - Math.floor(timeDifference)}:00 Q1`;
        if (timeDifference < 24) return `${24 - Math.floor(timeDifference)}:00 Q2`;
        if (timeDifference < 36) return `${36 - Math.floor(timeDifference)}:00 Q3`;
        if (timeDifference < 48) return `${48 - Math.floor(timeDifference)}:00 Q4`;

        return 'Finished';
    };

    const teamA = [
        { name: 'LeBron James', team: 'Los Angeles Lakers', averagePoints: 25.5, todayGame: 'vs Warriors', gameTime: '7:00 PM', timeLeft: formatTimeLeft('7:00 PM', currentTime), pointsToday: 30, injury: 'NONE' },
        { name: 'Kevin Durant', team: 'Brooklyn Nets', averagePoints: 28.2, todayGame: 'vs Celtics', gameTime: '8:00 PM', timeLeft: formatTimeLeft('8:00 PM', currentTime), pointsToday: 28, injury: 'NONE' },
        { name: 'Stephen Curry', team: 'Golden State Warriors', averagePoints: 30.1, todayGame: '@ Lakers', gameTime: '9:00 PM', timeLeft: formatTimeLeft('9:00 PM', currentTime), pointsToday: 32, injury: 'NONE' },
        { name: 'Giannis Antetokounmpo', team: 'Milwaukee Bucks', averagePoints: 27.9, todayGame: 'vs Knicks', gameTime: '8:30 PM', timeLeft: formatTimeLeft('8:30 PM', currentTime), pointsToday: 27, injury: 'NONE' },
        { name: 'James Harden', team: 'Brooklyn Nets', averagePoints: 24.3, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' },
        { name: 'Anthony Davis', team: 'Los Angeles Lakers', averagePoints: 22.6, todayGame: '@ Warriors', gameTime: '10:00 PM', timeLeft: formatTimeLeft('10:00 PM', currentTime), pointsToday: 24, injury: 'NONE' },
        { name: 'Luka Dončić', team: 'Dallas Mavericks', averagePoints: 73.4, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'DTD' },
        { name: 'Joel Embiid', team: 'Philadelphia 76ers', averagePoints: 27.7, todayGame: '@ Hawks', gameTime: '9:00 PM', timeLeft: formatTimeLeft('9:00 PM', currentTime), pointsToday: 0, injury: 'OUT' },
        { name: 'Damian Lillard', team: 'Portland Trail Blazers', averagePoints: 26.8, todayGame: '@ Jazz', gameTime: '10:00 PM', timeLeft: formatTimeLeft('10:00 PM', currentTime), pointsToday: 29, injury: 'NONE' },
        { name: 'Nikola Jokić', team: 'Denver Nuggets', averagePoints: 25.2, todayGame: '@ Suns', gameTime: '10:30 PM', timeLeft: formatTimeLeft('10:30 PM', currentTime), pointsToday: 26, injury: 'NONE' },
        { name: 'Kyrie Irving', team: 'Brooklyn Nets', averagePoints: 23.9, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' },
        { name: 'Kawhi Leonard', team: 'Los Angeles Clippers', averagePoints: 25.4, todayGame: 'vs Mavericks', gameTime: '7:00 PM', timeLeft: formatTimeLeft('7:00 PM', currentTime), pointsToday: 0, injury: 'OUT' },
        { name: 'Russell Westbrook', team: 'Washington Wizards', averagePoints: 23.1, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'SUSP' },
        { name: 'Jimmy Butler', team: 'Miami Heat', averagePoints: 26.5, todayGame: '@ Bulls', gameTime: '7:30 PM', timeLeft: formatTimeLeft('7:30 PM', currentTime), pointsToday: 27, injury: 'NONE' }
    ];

    const teamB = [
        { name: 'Chris Paul', team: 'Phoenix Suns', averagePoints: 22.3, todayGame: 'vs Clippers', gameTime: '7:00 PM', timeLeft: formatTimeLeft('7:00 PM', currentTime), pointsToday: 22, injury: 'NONE' },
        { name: 'Paul George', team: 'Los Angeles Clippers', averagePoints: 24.9, todayGame: 'vs Suns', gameTime: '8:00 PM', timeLeft: formatTimeLeft('8:00 PM', currentTime), pointsToday: 25, injury: 'NONE' },
        { name: 'Devin Booker', team: 'Phoenix Suns', averagePoints: 26.7, todayGame: '@ Warriors', gameTime: '9:00 PM', timeLeft: formatTimeLeft('9:00 PM', currentTime), pointsToday: 27, injury: 'NONE' },
        { name: 'Trae Young', team: 'Atlanta Hawks', averagePoints: 28.6, todayGame: 'vs Bucks', gameTime: '8:30 PM', timeLeft: formatTimeLeft('8:30 PM', currentTime), pointsToday: 28, injury: 'NONE' },
        { name: 'Jayson Tatum', team: 'Boston Celtics', averagePoints: 23.4, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' },
        { name: 'Zach LaVine', team: 'Chicago Bulls', averagePoints: 25.6, todayGame: '@ Heat', gameTime: '10:00 PM', timeLeft: formatTimeLeft('10:00 PM', currentTime), pointsToday: 26, injury: 'NONE' },
        { name: 'Donovan Mitchell', team: 'Utah Jazz', averagePoints: 24.5, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' },
        { name: 'Bradley Beal', team: 'Washington Wizards', averagePoints: 27.2, todayGame: 'vs Raptors', gameTime: '7:00 PM', timeLeft: formatTimeLeft('7:00 PM', currentTime), pointsToday: 27, injury: 'NONE' },
        { name: 'Jaylen Brown', team: 'Boston Celtics', averagePoints: 23.9, todayGame: '@ Nets', gameTime: '9:00 PM', timeLeft: formatTimeLeft('9:00 PM', currentTime), pointsToday: 24, injury: 'NONE' },
        { name: 'Jrue Holiday', team: 'Milwaukee Bucks', averagePoints: 21.7, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' },
        { name: 'Bam Adebayo', team: 'Miami Heat', averagePoints: 22.8, todayGame: '@ Bulls', gameTime: '7:30 PM', timeLeft: formatTimeLeft('7:30 PM', currentTime), pointsToday: 23, injury: 'NONE' },
        { name: 'Karl-Anthony Towns', team: 'Minnesota Timberwolves', averagePoints: 23.1, todayGame: 'vs Grizzlies', gameTime: '8:00 PM', timeLeft: formatTimeLeft('8:00 PM', currentTime), pointsToday: 0, injury: 'OUT' },
        { name: 'Klay Thompson', team: 'Golden State Warriors', averagePoints: 21.3, todayGame: 'vs Lakers', gameTime: '7:00 PM', timeLeft: formatTimeLeft('7:00 PM', currentTime), pointsToday: 0, injury: 'SUSP' },
        { name: 'CJ McCollum', team: 'Portland Trail Blazers', averagePoints: 22.9, todayGame: 'None', gameTime: 'None', timeLeft: 'None', pointsToday: 0, injury: 'NONE' }
    ];

    const calculateTotalPoints = (team) => {
        return team.slice(0, 9).reduce((total, player) => total + (player.injury === 'OUT' || player.injury === 'SUSP' ? 0 : player.pointsToday), 0);
    };

    const totalPointsTeamA = calculateTotalPoints(teamA);
    const totalPointsTeamB = calculateTotalPoints(teamB);

    return (
        <div className="teams-table-container">
            <table className="team-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Points Today</th>
                        <th>Game Time</th>
                        <th>Time Left</th>
                        <th>Injury</th>
                    </tr>
                </thead>
                <tbody>
                    {teamA.map((player, index) => (
                        <tr key={index}>
                            <td>{index > 12 ? 'IR' : index > 9 ? 'BENCH' : index > 6 ? 'FLEX' : index > 5 ? 'F' : index > 4 ? 'G' : index > 3 ? 'C' : index > 2 ? 'PF' : index > 1 ? 'SF' : index > 0 ? 'SG' : 'PG'}</td>
                            <td><a href={'/players'}>{player.name}</a></td>
                            <td>{player.team}</td>
                            <td>{player.injury === 'OUT' || player.injury === 'SUSP' ? 0 : player.pointsToday}</td>
                            <td>{player.gameTime}</td>
                            <td>{player.timeLeft}</td>
                            <td>{player.injury}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7">Total Points Team A: {totalPointsTeamA}</td>
                    </tr>
                </tfoot>
            </table>
            <p className="matchup-container">VS</p>
            <table className="team-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Points Today</th>
                        <th>Game Time</th>
                        <th>Time Left</th>
                        <th>Injury</th>
                    </tr>
                </thead>
                <tbody>
                    {teamB.map((player, index) => (
                        <tr key={index}>
                            <td>{index > 12 ? 'IR' : index > 9 ? 'BENCH' : index > 6 ? 'FLEX' : index > 5 ? 'F' : index > 4 ? 'G' : index > 3 ? 'C' : index > 2 ? 'PF' : index > 1 ? 'SF' : index > 0 ? 'SG' : 'PG'}</td>
                            <td><a href={'/players'}>{player.name}</a></td>
                            <td>{player.team}</td>
                            <td>{player.injury === 'OUT' || player.injury === 'SUSP' ? 0 : player.pointsToday}</td>
                            <td>{player.gameTime}</td>
                            <td>{player.timeLeft}</td>
                            <td>{player.injury}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="7">Total Points Team B: {totalPointsTeamB}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Matchup;
