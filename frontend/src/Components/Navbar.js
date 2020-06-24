import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import "./Navbar.css";
import logo from '../Images/vegetable.png';

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <img className="logo" src={logo} alt='logo' id="logo" height='60px'></img>
        <NavbarBrand href="/">MyPotagerApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Vannes</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/components/">Programmes</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
