import React from 'react'
import {Col,Row,Navbar,Nav,Badge,NavDropdown,Form,FormControl, Button, Image, Container, Card} from 'react-bootstrap'

//import logo from './homepage_Accenture.png';



export default class Profile extends React.Component {
    render(){
        return (
        <div>
          <Container style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            
          }}>
          <Card  style={{width:"35rem"}} className="text-center" >
            <Card.Header as="h5">
              <img
                src="/Images/accentureOrange.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                />
              <Container>
                Profile Name  
              </Container>
              
            </Card.Header>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext defaultValue="Chelsea" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext defaultValue="Starz" />
              </Col>
            </Form.Group>


            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" plaintext defaultValue="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext defaultValue="PasswordExample" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="10">
                <Form.Control type="number" plaintext defaultValue="12345" />
              </Col>
            </Form.Group>
            
        <Button width ="20rem">
           Save Changes
         </Button>

            
         </Card>


         </Container>

        </div>
          
        );
    }

}
