import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNav extends Component {
    
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };
    
      render() {
          return(
            <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'>
              <Container>
                  <NavbarBrand href="/">To Do List</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className='ml-auto' navbar>
                          <NavItem>
                              <NavLink href="http://github.com/">
                                  Github
                              </NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Container>
            </Navbar>
        </div>
          );
      }
    
}

export default AppNav;