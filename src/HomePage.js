import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Button, Image} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class HomePage extends React.Component {
    render(){
        return (
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
        );
    }

}


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />
