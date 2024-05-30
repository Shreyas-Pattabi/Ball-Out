import React from 'react';
import {useState, useEffect } from 'react';
// import {
//   AppConfig,
//   UserSession,
//   showConnect,
//   openContractCall,
// } from "@stacks/connect";
// import { StacksMocknet } from "@stacks/network";
// import { principalCV, stringUtf8CV, uintCV } from "@stacks/transactions";
import { Link } from 'react-router-dom';
import logo from '../assets/logoBO.png'
import './CreateAccount.css';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });
const network = new StacksMocknet();
const appDetails = {
  name: "Hello Stacks",
  icon: "https://freesvg.org/img/1541103084.png",
};

const CreateAccount = () => {

  const [userData, setUserData] = useState(undefined);

  const connectWallet = () => {
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
  }, []);
  
  console.log(userData)

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const mint_nft = async (e) => {
    e.preventDefault();
  
    const network = new StacksMocknet();
  
    const options = {
      contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      contractName: "players",
      functionName: "mint",
      functionArgs: [principalCV('ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5'), uintCV(10)],
      network,
      appDetails,
      onFinish: ({ txId }) => console.log(txId),
    };
  
    await openContractCall(options);
  };

  const handleTransactionChange = (e) => {
    setTransactionId(e.target.value);
  };

  const retrieveMessage = () => {
    // submit transaction
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

      
        
      <body>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form>
        <h3>Sign Up</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

          {
          !userData && (
            <button
              className="wallet-connect"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )};
        <button className='sign-up' onClick={mint_nft}>Sign Up</button>

        
      
    </form>
</body>

      </div>
    );
  };

  



export default CreateAccount;
