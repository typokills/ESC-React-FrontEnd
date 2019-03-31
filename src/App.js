import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form, Spinner,Row,Carousel, Figure,FormControl, Card, Button, Image, Container, Col, OverlayTrigger, Tooltip} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage.js';
import myForm from './myForm.js';
import LogIn from './Components/LogIn.js';
import SignUpForm from './Components/SignUpForm.js'
import ViewTicket from './Components/ViewTickets.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomeTip from './ToolTips/HomeTip';
import TicketTip from './ToolTips/TicketTip';
import NewTicket from './Components/NewTicket'
import newTicketTip from './ToolTips/newTicketTip'
import MaterialNavBar from './Components/MaterialNavBar'
import Profile from './Components/Profile'


class App extends Component {


  render() {
    return (
      <div>
             <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand  href="/HomePage">
        <img 
          src="/Images/accentureOrange.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          //alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="mr-auto">
         
          <OverlayTrigger
            placement="right-start"                  
            overlay={
              <Tooltip>
                Back to Homepage
              </Tooltip>
            }
            placement='bottom'
                >
            <Nav.Link   href="/HomePage" >Home</Nav.Link>
          </OverlayTrigger>
      
          <OverlayTrigger placement="right-start"              
            overlay={
              <Tooltip>
                View Tickets
              </Tooltip>}
            placement='bottom'>
            <Nav.Link  href="/ViewTickets">Tickets</Nav.Link>
          </OverlayTrigger>
      
        <OverlayTrigger 
            placement="right-start"                  
            placement='bottom'
            overlay={
              <Tooltip>
                Let us help!
              </Tooltip>                                   
            }
          >
          <Nav.Link href="/NewTicket">Send Ticket</Nav.Link>
        </OverlayTrigger>
      
        </Nav>
        <Form inline>

        <Spinner animation="grow" variant="light" />
        <Spinner animation="border" variant="danger" />
      
        <Nav.Link  
          href="/Profile"
          style={{ color: 'white' }}
          >Profile</Nav.Link>  
      
         <Nav.Link 
          href="/SignUp"
          style={{ color: 'white' }}
          >Sign up</Nav.Link>
         <Nav.Link  
          href="/LogIn"
          style={{ color: 'white' }}
          >Log in</Nav.Link>    
      
       
      
        </Form>
      </Navbar.Collapse>
      </Navbar>


      <Router>
     
        {/*<HomePage></HomePage>*/}
        {/*<LogIn></LogIn>*/}
        <Route path="/HomePage" component={HomePage}></Route>
        <Route path="/SignUp" component={SignUpForm}></Route>
        <Route path="/LogIn" component={LogIn}></Route>
        <Route path="/NewTicket" component={NewTicket}></Route> 
        <Route path="/ViewTickets" component={ViewTicket}></Route>
        <Route path="/Profile" component={Profile}></Route>

      </Router>
      </div>
    );
  }
}

export default App;

    