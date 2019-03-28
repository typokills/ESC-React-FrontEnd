import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class SignUpForm extends React.Component {
    render(){
        return (
        <div>
         <Container style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Card style={{width:"40rem"}} className="text-text-center"  >
              <Card.Header className="text-center" text="orange">Sign Up Form</Card.Header>
              <Card.Title className="text-center">You're about to be an exclusive member of the Accenture Club.</Card.Title>
              <Card.Text className="text-center">
                  Our Consultants provide 24/7 to ensure your business runs smoothly.
                </Card.Text>
              <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail" className="text-left">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="Jeremy"  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" className="text-left">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control  placeholder="Wang" />
                </Form.Group>
              </Form.Row>
              
              <Form.Group controlId="formGridAddress1" className="text-left">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              

              <Form.Group controlId="formGridAddress2" className="text-left">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
 
              <Form.Row>

                <Form.Group as={Col} controlId="formGridState" className="text-left">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>Client</option>
                    <option>Admin</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
                <Button variant="primary" >Sign me up!</Button>
              </Card.Body>
              <Card.Footer className="text-muted" className="text-center">High performance. Delivered.</Card.Footer>
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
