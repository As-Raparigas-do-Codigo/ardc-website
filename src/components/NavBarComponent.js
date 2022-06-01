import React, { useState, createRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import logo from "assets/ardc-logo.svg";
import { ReactComponent as HomeIcon } from "assets/icons/home.svg";

function NavBarComponent(props) {
  const [navColour, updateNavbar] = useState(false);
  const navRef = createRef();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    const currentHref = window.location.pathname;

    const currentNav = navRef.current.children[0].querySelectorAll(
      `.nav-link[href='${currentHref}']`
    );

    if (currentNav && currentNav.length > 0) {
      currentNav[0].setAttribute("active", true);
    }
  });

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      ref={navRef}
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
            <Nav.Link href="/">
              <HomeIcon />
            </Nav.Link>
            <Nav.Link href="/workshops">Workshops</Nav.Link>
            <Nav.Link href="/mentorship">Mentorias</Nav.Link>
            {/* <Nav.Link href="/events">Eventos</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link> */}
            <NavDropdown title="Sobre Nós" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">
                Sobre o projecto
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/team">A nossa equipa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
