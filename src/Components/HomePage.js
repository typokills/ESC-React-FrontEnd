import React from "react";
import Sidebar from "react-sidebar";
import {Navbar,Nav, OverlayTrigger,Row,Spinner, Carousel,Jumbotron,Figure,NavDropdown,Form, FormControl, Tooltip, Card, Button, Image, Container, Col, InputGroup, Dropdown, DropdownButton} from 'react-bootstrap' 


class HomePage extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
   
    return (
      <div>

 
      <span>&nbsp;</span>

      <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"        
      }}>


          <Container             
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          
        }}>
      <Carousel>
  <Carousel.Item>

    <img
      className="d-block w-100"
      src="/Images/accentureOrange.png"
      alt="First slide"
      width={171}
      height={300}
    />

    <Carousel.Caption style={{ color: 'black' }}>
      <h3>Productivity at your fingertips</h3>
      <p>Increase your productivity by 100%</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/accentureOrange.png"
      alt="Third slide"
      width={171}
      height={300}
    />

    <Carousel.Caption style={{ color: 'black' }}>
      <h3>Meet Our Team</h3>
      <p>We make your success our goal.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/Images/accentureOrange.png"
      alt="Third slide"
      width={171}
      height={300}
    />

    <Carousel.Caption style={{ color: 'black' }}>
      <h3>Send us a Ticket!</h3>
      <p>Takes only 10s!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>


      </Container>

      <Jumbotron>
        <h1>Welcome To Accenture's API Portal</h1>
        <p>
          Use our APIs to bring your business to new heights.
        </p>
        <p>
          <Button variant="primary" href="/LogIn">Log In Now</Button>
        </p>
      </Jumbotron>


      </div>
    );
  }
}
 
export default HomePage;


// <input  
// placeholder='First Name' 
// value ={this.state.firstName} 
// onChange={e=>this.setState({ firstName: e.target.value})} 
//   />

