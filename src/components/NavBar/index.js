import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import logo from 'assets/ardc-logo.svg';
import Constants from 'constants';

import './navbar.scss';

const NavLink = ({ location, to, children, onSelect, className = '' }) => (
  <Nav.Link
    className={`${className} ${location.pathname === to ? 'active' : ''}`}
    onClick={onSelect}
    as={Link}
    to={to}>
    {children}
  </Nav.Link>
);

const NavDropdownItem = ({ location, to, children, onSelect, className = '' }) => (
  <NavDropdown.Item
    className={`${className} ${location.pathname === to ? 'active' : ''}`}
    onClick={onSelect}
    as={Link}
    to={to}>
    {children}
  </NavDropdown.Item>
);

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const onSelect = () => {
    setExpanded(false);
  };

  const onToggle = () => {
    setExpanded(!expanded);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expanded}
      onSelect={onSelect}
      onToggle={onToggle}
      expand="lg"
      className={
        navColour ? 'sticky navigation-position' : 'navbar__component navigation-position'
      }>
      <Container className="flex-nowrap">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          aria-labelledby="responsive-navbar-nav"
          placement="end">
          <Offcanvas.Header closeButton className="mx-2">
            <Container>
              <Link to="/" onClick={onSelect}>
                <img src={logo} className="img-fluid logo w-80" alt="brand" />
              </Link>
            </Container>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <NavLink
                location={location}
                to={Constants.Routes.Home}
                onSelect={onSelect}
                className="d-none d-lg-block">
                <HomeIcon />
              </NavLink>
              <NavLink
                location={location}
                to={Constants.Routes.Workshops}
                onSelect={onSelect}
                className="text-center">
                {Constants.Content.Title.Workshops}
              </NavLink>
              <NavLink
                location={location}
                to={Constants.Routes.Mentorships}
                onSelect={onSelect}
                className="text-center">
                {Constants.Content.Title.Mentorships}
              </NavLink>
              <NavDropdown
                title={Constants.Content.Title.AboutUs}
                id="navbarScrollingDropdown"
                className="text-center">
                <NavDropdownItem
                  location={location}
                  to={Constants.Routes.About}
                  onSelect={onSelect}
                  className="text-center text-lg-center">
                  {Constants.Content.Title.AboutTheProject}
                </NavDropdownItem>
                <NavDropdownItem
                  location={location}
                  to={Constants.Routes.Team}
                  onSelect={onSelect}
                  className="text-center">
                  {Constants.Content.Title.OurTeam}
                </NavDropdownItem>
              </NavDropdown>
              <NavLink
                location={location}
                to={Constants.Routes.Contacts}
                onSelect={onSelect}
                className="text-center">
                {Constants.Content.Title.Contacts}
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
