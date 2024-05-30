import React from 'react';
import Home from './components/Home';
import Matchup from './components/Matchup';
import Draft from './components/Draft'
import Players from './components/Players'
import League from './components/League'
import EditLineup from './components/EditLineup';
import Login from './components/Login'
import CreateAccount from './components/CreateAccount';
import JoinLeague from './components/JoinLeague';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matchup" element={<Matchup />} />
        <Route path = "/draft" element = {<Draft />}/>
        <Route path = "/players" element = {<Players/>}/>
        <Route path = "/my-league" element = {<League/>}/>
        <Route path = "/lineup" element = {<EditLineup/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/create-account" element = {<CreateAccount/>}/>
        <Route path = "/join-league" element = {<JoinLeague/>}/>

      </Routes>
    </Router>
  );
}

export default App;
