//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {
  Link,
  Switch,
  Route,
} from "react-router-dom";

import Main from './views/Main';
import New from './views/New';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      <Link to="/players/list"><span>Manage Players</span></Link>| <Link to="/game/status/1"><span>Manage Player Status</span></Link>
      <div>
          <Switch>
            <Route exact path="/players/list">
              <Main />
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
