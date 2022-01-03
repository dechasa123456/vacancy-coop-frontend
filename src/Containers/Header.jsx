import {Container,Navbar,Nav, NavDropdown} from 'react-bootstrap'
import { FaUserEdit, FaLock, FaUserGraduate, FaSitemap, FaQuestionCircle} from "react-icons/fa";
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  handleLogout=()=>{
    localStorage.clear();
    window.location.href = window.location.origin;
  }
  state={};
  componentDidCatch=()=>{
 
  }
  render () {
    let buttons;
    if (!localStorage.getItem('phone')) {
      buttons=(
        <React.Fragment>
      <Nav.Item><Link to="/signup"style={{color:"#fff"}} className="nav-link">
        <FaUserEdit/>Sign Up</Link></Nav.Item>
      <Nav.Item><Link to="/login"style={{color:"#fff"}} className="nav-link">
        <FaLock/>Login</Link></Nav.Item>
        </React.Fragment>
        );
  
    } else {
      buttons=(<NavDropdown  title={<FaUserGraduate style={{color:"#fff"}}/>} id="navbarScrollingDropdown">
      <div className="dropdown-item">{localStorage.getItem('phone')}</div>
      <NavDropdown.Divider />
      <Link to="/" className="dropdown-item">New vacancy</Link>
      <Link to="/profile" className="dropdown-item">Profile</Link>
      <Link to="/logout" className="dropdown-item" onClick={this.handleLogout}>Logout</Link>
      </NavDropdown>);
    }
  return (
 <Navbar  style={{background:"#000066"}}  expand="lg" >
   <Container>
    <Link className="navbar-brand" to="/" style={{color:"#fff"}}>
    <FaSitemap />  Vacancy
    </Link>
    <Nav className="ml-auto" >
      <Nav.Item><Link to="/help" style={{color:"#fff"}} className="nav-link"> <FaQuestionCircle/>How?</Link></Nav.Item>
      {buttons}
    
    </Nav>
    </Container>
    <Navbar bg="red" variant="dark"></Navbar>
  </Navbar>
  );
  }
}

export default Header;
