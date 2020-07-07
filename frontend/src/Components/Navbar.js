import React, { useState, Component } from 'react';
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
import TabsVannes from './TabsVannes';
import TabsProgrammes from './TabsProgrammes';

class MyNavbar extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    //Navbar toggle
    this.toggle = this.toggle.bind(this);
    //Modal
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  /*const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);*/

  /// Pour Modal
  toggleModal1() {
    this.setState({
        modal1: !this.state.modal1
    });
  }

  toggleModal2() {
    this.setState({
        modal2: !this.state.modal2
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  showModal() {
    this.setState({
        isModalOpen: true
    });
  }

  

  /* 
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  */
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <img className="logo" src={logo} alt='logo' id="logo" height='60px'></img>
          <NavbarBrand href="/">MyPotagerApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem><NavLink onClick={this.toggleModal1}>Gestion des Vannes</NavLink></NavItem>
              <Modal size="lg" isOpen={this.state.modal1} show={this.state.show} onHide={this.handleClose} toggle={this.toggleModal1}>   
                <ModalHeader toggle={this.toggleModal1}>Gestion des vannes</ModalHeader>
                <ModalBody>
                    <TabsVannes></TabsVannes>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleModal1}>Fermer</Button>
                </ModalFooter>
              </Modal>

              <NavItem><NavLink onClick={this.toggleModal2}>Gestion des programmes</NavLink></NavItem>
                <Modal size="xl"isOpen={this.state.modal2} show={this.state.show} onHide={this.handleClose} toggle={this.toggleModal2}>   
                <ModalHeader toggle={this.toggleModal2}>Gestion des programmes</ModalHeader>
                <ModalBody>
                    <TabsProgrammes></TabsProgrammes>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleModal2}>Fermer</Button>
                </ModalFooter>
              </Modal>
            
            </Nav>
          
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}

export default MyNavbar;
