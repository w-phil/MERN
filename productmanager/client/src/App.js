//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:id" />
        <Update path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
