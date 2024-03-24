import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/mitrayu.png';
import "../App.css";
import {Route, Routes, Link} from "react-router-dom";

import Services from "../pages/services";
import About  from '../pages/about';
import Contact from '../pages/contact';
import Properties from '../pages/properties';
import SendProp from '../pages/land';
import Home from './home';





function NavbarMenu() {
  return (
    <>

    <Navbar expand="lg" className="navbarMenu sticky-top ">
      <Container fluid>
        <Navbar.Brand href="#" className="fs-2 fw-bold" style={{color: "#ffc72c"}}>
        <img
              alt="RealEstate"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center m-3 w-auto "
            />{' '} Mitrayu Realtors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
          id="navbarScroll"

           className=" navitems mx-auto gap-4 text-center fw-bold mx-auto text-warning "
                
          >
            <Nav.Link  as ={Link} to = "/Home" className= " nav-link ">Home</Nav.Link>
            <Nav.Link  as ={Link} to = "/services" className= "nav-link ">Services</Nav.Link>
            <Nav.Link  as ={Link} to = "/Properties" className= "nav-link ">Properties</Nav.Link>
            <Nav.Link  as ={Link} to = "/contact" className= "nav-link ">Contact</Nav.Link>
            <Nav.Link  as ={Link} to = "/About" className= "nav-link ">About us</Nav.Link>
            <Nav.Link  as ={Link} to = "/land" className= "nav-link">Send Property</Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <Routes>
      <Route path ='/Home' element ={<Home/>}> </Route>
      <Route path ='/services' element ={<Services/>}> </Route>
      <Route path = "/Properties" element ={<Properties/>}> </Route>
      <Route path = "/contact" element ={<Contact/>}> </Route>
      <Route path = "/About" element ={<About/>}> </Route>
      <Route path = "/land" element ={<SendProp/>}> </Route>

    </Routes>
    
    <br/>
    </>
   
  );
}


export default NavbarMenu;

