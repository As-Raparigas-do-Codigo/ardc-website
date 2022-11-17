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
import 'components/navbar.scss';
import Routes from 'data/Routes';
import SiteContent from 'data/SiteContent';

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

function NavBarComponent() {
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
      className={navColour ? 'sticky navigation-position' : 'navbar__component navigation-position'}
    >
      <Container className="flex-nowrap">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="responsive-navbar-nav"
          aria-labelledby="responsive-navbar-nav"
          placement="end"
        >
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
                to={Routes.Home}
                onSelect={onSelect}
                className="d-none d-lg-block"
              >
                <HomeIcon />
              </NavLink>
              <NavLink
                location={location}
                to={Routes.Workshops}
                onSelect={onSelect}
                className="text-center"
              >
                {SiteContent.WorkshopsPage.PageName}
              </NavLink>
              <NavLink
                location={location}
                to={Routes.Mentorships}
                onSelect={onSelect}
                className="text-center"
              >
                {SiteContent.MentorshipsPage.PageName}
              </NavLink>
              <NavDropdown
                title={SiteContent.AboutLabel}
                id="navbarScrollingDropdown"
                className="text-center"
              >
                <NavDropdownItem
                  location={location}
                  to={Routes.About}
                  onSelect={onSelect}
                  className="text-center text-lg-center"
                >
                  {SiteContent.AboutUsPage.PageName}
                </NavDropdownItem>
                <NavDropdownItem
                  location={location}
                  to={Routes.Team}
                  onSelect={onSelect}
                  className="text-center"
                >
                  {SiteContent.TeamPage.PageName}
                </NavDropdownItem>
              </NavDropdown>
              <NavLink
                location={location}
                to={Routes.Contacts}
                onSelect={onSelect}
                className="text-center"
              >
                {SiteContent.ContactsPage.PageName}
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
