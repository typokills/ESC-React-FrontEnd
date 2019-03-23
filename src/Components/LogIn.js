import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Button, Image, Container} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class LogIn extends React.Component {
    render(){
        return (
        <div>
        <Container style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Form style={{width:"30rem"}} className="text-center" >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
         </Form>
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
