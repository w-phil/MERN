//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import List from './views/List';
import New from './views/New';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      <h3><span>Manage Players</span> | <span>Mangae Player Status</span></h3>
      <div>
        <h1><span>List</span> | <span>Add Player</span></h1>
        <Switch>
          <Route exact path="/players/list">
            <List />
          </Route>
          <Route path="/players/addplayer">
            <New />
          </Route>
          <Route path="/game/status/:id">         
            <Status />     
          </Route>    
        </Switch>
      </div>
    </div>
  );
}

export default App;
