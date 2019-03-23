import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import myForm from './myForm.js';
import LogIn from './Components/LogIn.js';
import SignUpForm from './Components/SignUpForm.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <img 
                src="/Images/accenture.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                //alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Tickets">Tickets</Nav.Link>
                <Nav.Link href="#askQuestions">Ask questions</Nav.Link>

              </Nav>
              <Form inline>
               <Nav.Link href="#link">Sign up</Nav.Link>
               <Nav.Link href="#link">Log in</Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
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
