import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage.js';
import {Button,ButtonToolbar} from 'react-bootstrap';
import myForm from './myForm.js';
import LogIn from './LogIn.js';
import TicketForm from './TicketForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<HomePage></HomePage>*/}
        {/*<LogIn></LogIn>*/}
        <TicketForm></TicketForm>
      </div>
    );
  }
}

export default App;
