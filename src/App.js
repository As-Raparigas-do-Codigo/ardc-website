import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from 'pages/About';
import Contact from 'pages/Contact';
import Events from 'pages/Events';
import Home from 'pages/Home';
import Mentorship from 'pages/Mentorship';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Team from 'pages/Team';
import Workshops from 'pages/Workshops';
import Footer from 'components/Footer';
import NavBar from 'components/NavBarComponent';
import Social from 'components/Social';
import SiteRoutes from 'data/Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Social />
          <NavBar />
        </header>
        <Routes>
          <Route exact path={SiteRoutes.About} element={<AboutUs />} />
          <Route exact path={SiteRoutes.Contacts} element={<Contact />} />
          <Route exact path={SiteRoutes.Events} element={<Events />} />
          <Route exact path={SiteRoutes.Home} element={<Home />} />
          <Route exact path={SiteRoutes.Mentorships} element={<Mentorship />} />
          <Route exact path={SiteRoutes.PrivacyPolicy} element={<PrivacyPolicy />} />
          <Route exact path={SiteRoutes.Team} element={<Team />} />
          <Route exact path={SiteRoutes.Workshops} element={<Workshops />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
