import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import {Button,ButtonToolbar} from 'react-bootstrap';
import myForm from './myForm.js';
import LogIn from './Components/LogIn.js';
import SignUpForm from './Components/SignUpForm.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <div className="App">
      <Router>
     
        {/*<HomePage></HomePage>*/}
        {/*<LogIn></LogIn>*/}
        <Route path="/" component={HomePage}></Route>
        <Route path="/SignUp" component={SignUpForm}></Route>
        <Route path="/LogIn" component={LogIn}></Route>

      </Router>
      </div>
    );
  }
}

export default App;
