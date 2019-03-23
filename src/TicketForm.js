import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class TicketForm extends React.Component {
    render(){
        return (
        <div>
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
          <Container>
          <Card className="text-center">
              <Card.Header>Sign Up Form</Card.Header>
              <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>;
          </Container>
          </div>
          
        );
    }

}


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />
