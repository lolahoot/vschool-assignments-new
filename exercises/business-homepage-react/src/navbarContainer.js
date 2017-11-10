import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";


function NavbarContainer() {
    return (
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUX-RgaFiS-UXNs3RClg_ZqaK0I0c8VOieTMdJjoNFFhaVTTDp">YOUR VIEW</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="https://i.ytimg.com/vi/78xRP7z-zGg/maxresdefault.jpg">Voted Best Image</NavItem>
      <NavItem eventKey={2} href="#">Images Archive</NavItem>
      <NavDropdown eventKey={3} title="Shop With Us" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Images</MenuItem>
        <MenuItem eventKey={3.2}>Cameras and Equipment</MenuItem>
        <MenuItem eventKey={3.3}>Track Your Order</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Specials</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    );

}

export default NavbarContainer;
