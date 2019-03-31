import React from 'react'
import {Table, Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap'
//import logo from './homepage_Accenture.png';

export default class ViewTicket extends React.Component {
    render(){
        return (
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Topic</th>
      <th>Description</th>
      <th>Dev Responses</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><a href="TicketPage/ticket1">Server Issue</a></td>
      <td>Lagging</td>
      <td>Sorry can't help.</td>
      <td>Helppppp!</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2"><a href="TicketPage/ticket2">Larry the Bird</a></td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>;
         
          </div>
          
        );
    }

}


