import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Navbar from './components/layout/Navbar';
import HomeGuest from './components/layout/HomeGuest'
import Terms from './components/layout/Terms'
import About from './components/layout/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={HomeGuest}/>
          <Route path='/about' exact component={About}/>
          <Route path='/about' exact component={Terms}/>
        </Switch>
        <footer/>
      </Router>
    </div>
  );
}

export default App;
