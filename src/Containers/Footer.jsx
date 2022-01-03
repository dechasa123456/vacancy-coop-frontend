import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Footer() {
  return (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="bottom">
   <Container>
    <Navbar.Brand href="/">New Vacancy</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Item><Nav.Link href="#">Bid</Nav.Link></Nav.Item>
    </Nav>
    </Navbar.Collapse>
    </Container>
    <Navbar bg="red" variant="dark"></Navbar>
  </Navbar>
  );
}

export default Footer;
