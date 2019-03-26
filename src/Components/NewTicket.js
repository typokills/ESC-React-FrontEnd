import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class NewTicket extends React.Component {
    render(){
        return (
        <div>
         <Container style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Card style={{width:"35rem"}}  className="text-center" bg="dark" text="white">
              <Card.Header as="h4">New Ticket Submission</Card.Header>
              <Card.Body>
              <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Jeremy"
                    aria-label="First Name"
                    aria-describedby="First Name"
                    bg="grey"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Wang"
                    aria-label="Last Name"
                    aria-describedby="Last Name"
                    />
                </InputGroup>
            
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="123@gmail.com"
                    aria-label="Email Address"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon2">Company Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Company Name"
                    aria-label="Company Name"
                    aria-describedby="Company Name"
                    />                                  
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="Phone Number">Phone Number</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="+65 91234567"
                    aria-label="Phone Number"
                    aria-describedby="Phone Number"
                    type = "number"
                    />                                  
                </InputGroup>

                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Issue Type"
                    id="input-group-dropdown-1"
                    text="white"
                    >
                    <Dropdown.Item href="#">CSE Assignment</Dropdown.Item>
                    <Dropdown.Item href="#">Bed Bugs</Dropdown.Item>
                    <Dropdown.Item href="#">Daddy Issues</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Other</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                </InputGroup>

                <span>&nbsp;</span>

                <label htmlFor="basic-url">Problem Description</label>
                <FormControl as="textarea" aria-label="With textarea" />
                    <h1>      </h1>
                
                <Button variant="light">Submit</Button>



              </Card.Body>
              <Card.Footer className="text-muted" >High performance. Delivered.</Card.Footer>
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
