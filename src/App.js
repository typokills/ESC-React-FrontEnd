import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col, OverlayTrigger} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import myForm from './myForm.js';
import LogIn from './Components/LogIn.js';
import SignUpForm from './Components/SignUpForm.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomeTip from './ToolTips/HomeTip';
import TicketTip from './ToolTips/TicketTip';
import NewTicket from './Components/NewTicket'


class App extends Component {
  render() {
    return (

      <div className="App">
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">
              <img 
                src="/Images/accenturelogowhite.png"
                width="136"
                height="40"
                className="d-inline-block align-top"
                //alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
               
                <OverlayTrigger
                  placement="right-start"
                  delay={{ show: 0, hide: 0 }}
                  overlay={HomeTip}
                  placement='bottom'
                      >
                  <Nav.Link 
                    href="/"
                    style={{ color: 'white' }}
                  >
                    <img 
                      src="/Images/home.png"
                      width="25"
                      height="25"
                      className="d-inline-block align-top"
                    />
                  Home</Nav.Link>
                </OverlayTrigger>

                <OverlayTrigger placement="right-start"
                  delay={{ show: 0, hide: 0 }}
                  overlay={TicketTip}
                  placement='bottom'>
                  <Nav.Link 
                    href="/ViewTickets"
                    style={{ color: 'white' }}
                  >
                    <img 
                      src="/Images/tickets.png"
                      width="25"
                      height="25"
                      className="d-inline-block align-top"
                    />
                  Tickets</Nav.Link>
                </OverlayTrigger>


                <Nav.Link 
                  href="/NewTicket"
                  style={{ color: 'white' }}
                >
                  <img 
                      src="/Images/questions.png"
                      width="25"
                      height="25"
                      className="d-inline-block align-top"
                    />
                Ask questions</Nav.Link>
                

                
              
                {/* <OverlayTrigger placement="right-start"
                  delay={{ show: 0, hide: 0 }}
                  overlay={TicketTip}
                  placement='bottom'>
                  <button onClick={() => this.onSetSidebarOpen(true)} >
                    Open sidebar
                  </button>
                </OverlayTrigger> */}

              </Nav>
              <Form inline>
               <Nav.Link 
                href="/SignUp"
                style={{ color: 'orange' }}
               >Sign up</Nav.Link>

               <Nav.Link 
                href="/LogIn"
                style={{ color: 'orange' }}
                >Log in</Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
      <Router>
     
        {/*<HomePage></HomePage>*/}
        {/*<LogIn></LogIn>*/}
        <Route path="/" component={HomePage}></Route>
        <Route path="/SignUp" component={SignUpForm}></Route>
        <Route path="/LogIn" component={LogIn}></Route>
        <Route path="/NewTicket" component={NewTicket}></Route>

      </Router>
      </div>
    );
  }
}

export default App;
