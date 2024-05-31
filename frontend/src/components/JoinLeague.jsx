import React, { useState, useEffect } from 'react';
import './JoinLeague.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoBO.png';
import bgvid from '../assets/jlvidbg.mp4'
import axios from 'axios';
const JoinLeague = () => {
  const leagues = [
    { name: 'Bronze League', entryFee: '0.10 BTC', className: 'Bronze' },
    { name: 'Silver League', entryFee: '0.50 BTC', className: 'Silver' },
    { name: 'Gold League', entryFee: '1.00 BTC', className: 'Gold' },
  ];

  const [memberships, setMemberships] = useState([{}])
  const user_id = localStorage.getItem('user_id')
  const [tier, setTier] = useState('Gold')
  const navigate = useNavigate()
    useEffect(() => {
          axios.get(`http://localhost:8000/api/get_leagues/`, {
              params: { user: user_id }
          })
          .then(response => {
            setMemberships(JSON.parse(response.data))
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      const createLeague = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/create_league/', {user: user_id, name: user_id + "'s League", tier: tier, stage:0})
        }
        catch(error) {
          console.error('Error logging in', error)
        }
      }

      const enterLeague = (group_id) => {
          localStorage.setItem('group_id', group_id)
          
      }
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Ball Out Logo" />
        </div>
      </header>
      <div className="outside">
       <video src={bgvid} autoPlay loop muted />
       <form className="form-one">
      <div className="join-league-container">
        <h1 className="mainTitle">Create a League</h1>
        <div className="leagues-list">
          {leagues.map((league, index) => (
            <div className={`league-card ${league.className}`} key={index}>
              <h2>{league.name}</h2>
              <p><strong>Entry Fee:</strong> {league.entryFee}</p>
              <button className="join-button" onClick={()=>{
                setTier(league.className)
                createLeague()
              }
            }>Create League</button>
            </div>
          ))}
        </div>
      </div>
      <h1 className='text-5xl font-bold text-center'>Current Leagues</h1>
      <div className='flex justify-around mt-12'>
        {memberships.map((league, index)=>(
          <div key={index} className='league-card w-[25rem]'>
            <h2 className='text-center'>{league.group_id}</h2>
            <h3>{league.tier} Tier</h3>
            <button type='button' className='w-full text-center mt-6 h-10 text-xl bg-red-500 rounded-md' onClick={()=>{enterLeague(league.group_id)}}>Enter League</button>
          </div>
        ))}
      </div>
      </form>
      <footer className="footer">
        <p>&copy; 2024 Ball Out App. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default JoinLeague;
