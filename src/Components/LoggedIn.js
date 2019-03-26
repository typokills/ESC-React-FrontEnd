import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Button, Image} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';



export default class LoggedIn extends React.Component {
    render(){
        return (
          
          <div className="App">
        
          <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand  href="#home">
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
                    <Nav.Link   href="/" >Home</Nav.Link>
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
                 <Nav.Link href="/SignUp">Sign up</Nav.Link>
                 <Nav.Link  href="/LogIn">Log in</Nav.Link>              
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
          <Route path="/ViewTickets" component={ViewTicket}></Route>
  
        </Router>
        </div>
        );
    }

}


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />
