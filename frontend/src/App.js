import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Navbar from './components/layout/Navbar';
import HomeGuest from './components/layout/HomeGuest'
import Terms from './components/layout/Terms'
import About from './components/layout/About'
import Footer from './components/layout/Footer'
import axios from 'axios'
import Home from './components/pages/Home';
import Alert from './utils/Alert';
import CreatePost from './components/pages/CreatePost';
axios.defaults.baseURL = 'http://localhost:8000'

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('token')))
  const [alert, setAlert] = useState([])
  return (
    <div className="App">
      <Router>
        <Alert messages={alert}/>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Switch>
          <Route path='/' exact >
            {loggedIn ? <Home/> : <HomeGuest/>}
          </Route>
          <Route path='/create-post' exact component={CreatePost}/>
          <Route path='/about' exact component={About}/>
          <Route path='/terms' exact component={Terms}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
