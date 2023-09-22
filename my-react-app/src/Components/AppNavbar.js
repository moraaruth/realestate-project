// AppNavbar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AppNavbar.css";

function AppNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <div className="navbar-brand-container">
        <Navbar.Brand href="#home" className="navbar-brand">
          {/* <img
          src="https://cdn.pixabay.com/photo/2016/05/21/21/52/house-1407562_640.jpg" 
          alt="Perfect Home Logo"
          width="30" 
          height="30" 
          className="d-inline-block align-top"
        /> */}

        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
        <Nav className="ml-auto">
        
        <Nav.Link as={Link} to="/" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about" className="nav-link">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/services" className="nav-link">
          Services
        </Nav.Link>
        <Nav.Link as={Link} to="/properties" className="nav-link">
          Properties
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="nav-link">
          Contact Us
        </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
