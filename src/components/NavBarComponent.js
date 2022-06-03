import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import logo from "assets/ardc-logo.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { Link } from "react-router-dom";
import "components/navbar.scss"

const NavLink = ({ location, to, children }) => (
  <Nav.Link as={Link} to={to} className={{ 'active': location.pathname === to }}>
    {children}
  </Nav.Link>
);

const NavDropdownItem = ({ location, to, children }) => (
  <NavDropdown.Item as={Link} to={to} className={{ 'active': location.pathname === to }}>
    {children}
  </NavDropdown.Item>
);

function NavBarComponent() {
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={
        navColour
          ? "sticky navigation-position"
          : "navbar__component navigation-position"
      }>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink location={location} to="/"><HomeIcon /></NavLink>
            <NavLink location={location} to={Constants.WorkshopsRoute}>Workshops</NavLink>
            <NavLink location={location} to={Constants.MentorshipsRoute}>Mentorias</NavLink>
            {/* <NavLink location={location} to={Constants.EventsRoute}>Eventos</NavLink> */}
            {/* <NavLink location={location} to={Constants.BlogRoute}>Blog</NavLink> */}
            <NavDropdown title="Sobre Nós" id="navbarScrollingDropdown">
              <NavDropdownItem location={location} to={Constants.AboutRoute}>
                Sobre o projecto
              </NavDropdownItem>
              <NavDropdown.Divider />
              <NavDropdownItem location={location} to={Constants.TeamRoute}>A nossa equipa</NavDropdownItem>
            </NavDropdown>
            <NavLink location={location} to={Constants.ContactsRoute}>Contactos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
