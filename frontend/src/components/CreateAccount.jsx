
import React, { useState, useEffect } from 'react';
import {
  AppConfig,
  UserSession,
  showConnect,
  openContractCall,
} from "@stacks/connect";
import { StacksMocknet, StacksTestnet } from "@stacks/network";
import { principalCV, uintCV } from "@stacks/transactions";

import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png';
import './CreateAccount.css';
import axios from 'axios';
const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });
const network = new StacksTestnet();
const appDetails = {
  name: "Hello Stacks",
  icon: "https://freesvg.org/img/1541103084.png",
};

const CreateAccount = () => {

  const [userData, setUserData] = useState(undefined);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createAccount = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/create_account/', {user: username, pass: password})
    }
    catch(error) {
      console.error('Error logging in', error)
    }
  }

  const connectWallet = (e) => {
    e.preventDefault();
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
    // userSession.handlePendingSignIn().then((userData) => {
    //       setUserData(userData);
    //     });
    
  }, []);
  
  console.log(userData);

  const mint_nft = async (e) => {
    e.preventDefault();

    const options = {
      contractAddress: "ST3P58MSNPCSA2339QXFS4G9KF6DA6GVBMDRCK4RF",
      contractName: "nft_players",
      functionName: "mint",
      functionArgs: [],
      network,
      appDetails,
      onFinish: ({ txId }) => console.log(txId),
    };

    await openContractCall(options);
  };
  

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Ball Out Logo" />
          <span></span>
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

      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Sign Up</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => setUsername(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>

        {
          !userData && (
            <button
              className="wallet-connect"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )
        }
        <button className='sign-up' onClick={createAccount}>Sign Up</button>
      </form>
    </div>
  );
};

export default CreateAccount;
