import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class SignUpForm extends React.Component {
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
         <Container className="align-center">
          <Card style={{width:"30rem"}}  className="text-center">
              <Card.Header>Sign Up Form</Card.Header>
              <Card.Title>You're about to be an exclusive member of the Accenture Club.</Card.Title>
              <Card.Text>
                  Our Consultants provide 24/7 to ensure your business runs smoothly.
                </Card.Text>
              <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="Jeremy" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="password" placeholder="Wang" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Row>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Client</option>
                    <option>Admin</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
                <Button variant="primary">Sign me up!</Button>
              </Card.Body>
              <Card.Footer className="text-muted">High performance. Delivered.</Card.Footer>
            </Card>
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


              {/*<Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>*/}
