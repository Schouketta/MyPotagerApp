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
  import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./Navbar.css";
import logo from '../Images/vegetable.png';

const MyNavbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const {
      buttonLabel,
      className
    } = props;  
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
  

  return (
    <div>
      <Navbar color="light" light expand="md">
      <img className="logo" src={logo} alt='logo' id="logo" height='60px'></img>
        <NavbarBrand href="/">MyPotagerApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            <NavItem><NavLink onClick={toggleModal}>Vannes</NavLink></NavItem>
            <Modal isOpen={modal} toggle={toggleModal} className={className}>
            <ModalHeader toggle={toggleModal}>Gestion des vannes</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
            </Modal>

            <NavItem><NavLink onClick={toggleModal}>Gestion des programmes</NavLink></NavItem>
            <Modal isOpen={modal} toggle={toggleModal} className={className}>
            <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
            </Modal>
           
          </Nav>
         
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default MyNavbar;
