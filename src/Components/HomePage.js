import React from "react";
import Sidebar from "react-sidebar";
import {Navbar,Nav,NavDropdown,Form,FormControl, Card, Button, Image, Container, Col, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap' 

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  const 
 
  render() {
    return (
      <Sidebar
        sidebar={
        <b style={{ color: 'white' }}>
        Sidebar content testing width
        </b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        bg="dark" expand="lg"
        styles={{ sidebar: { background: "black" } }}
        transition= {"transform .3s ease-out"}
        
      >
        <div class="text-left">
          <button onClick={() => this.onSetSidebarOpen(true)} 
                variant="primary" 
                type="button" 
                class="btn btn-dark"
                //class="btn pull-right"
                >
          <img 
                src="/Images/hamburgericon.png"
                width="20"
                height="20"
                className="d-inline-block align-top"
                //alt="React Bootstrap logo"
                />
          </button>
        </div>
        
      
      </Sidebar>
    );
  }
}
 
export default HomePage;

/* export default class HomePage extends React.Component {
    render(){
        return (
          
          <p></p>
        );
    }

} */


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />

