import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Button, Image} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class myForm extends React.Component {
    state = {                  //State will hold all of the values
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    } 

    render(){
        return (
            <Form>
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
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

}


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />
