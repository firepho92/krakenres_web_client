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
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Krakenres <img src={Icon} alt="krakenres icon"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.cajero != null ? <LoggedIn cajero = {this.props.cajero}/> : <LogIn/>}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const LoggedIn = ({cajero}) => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="/components/">Barra</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/components/">Cocina</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/components/">Caja</NavLink>
    </NavItem>
    <NavItem>
      <UncontrolledDropdown>
        <DropdownToggle caret>
          {cajero.nombre}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </NavItem>
  </Nav>
)

const LogIn = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="/">Entrar</NavLink>
    </NavItem>
  </Nav>
)

export default Header;
