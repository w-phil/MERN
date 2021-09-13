//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/:id/edit">         
            <Update />     
          </Route>    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
