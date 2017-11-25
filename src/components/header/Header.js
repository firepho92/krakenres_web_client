import React, { Component } from 'react'
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import Icon from './img/icon-48x48.png'
import './Header.css'

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
      <Navbar color="faded" light expand="md" className="fixed-top">
        <Link to="/" className="navbar-brand">Krakenres <img src={Icon} alt="krakenres icon"/></Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {this.props.cajero != null ? <LoggedIn handleLogout = {this.props.handleLogout}/> : <LogIn/>}
        </Collapse>
      </Navbar>
    );
  }
}

class LoggedIn extends Component {

  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/Kitchen">Barra</NavLink>
        </NavItem>
        <NavItem>
          <Link to="/cocina" className="nav-link">Cocina</Link>
        </NavItem>
        <NavItem>
          <Link to="/mesas" className="nav-link">Mesas</Link>
        </NavItem>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle caret>
              {sessionStorage.getItem('cajero_nombre')}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.props.handleLogout}>Salir</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    );
  }
}

const LogIn = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <Link to="/" className="nav-link">Entrar</Link>
    </NavItem>
  </Nav>
)

export default Header;
