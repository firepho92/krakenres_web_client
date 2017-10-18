import React, { Component } from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import Icon from './img/icon-48x48.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <bar>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Krakenres <img src={Icon} alt="krakenres icon"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                {this.props.cajero != null ? <LoggedIn/> : <LogIn/>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </bar>
    );
  }
}

const LoggedIn = ({name}) => (
  <UncontrolledDropdown>
    <DropdownToggle caret>
      {name}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

const LogIn = () => (
  <NavLink href="/">Entrar</NavLink>
)

export default Header;
