import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Workshops from "pages/Workshops";
import Mentorship from "pages/Mentorship";
import Events from "pages/Events";
import About from "pages/About";
import Blog from "pages/Blog";
import Contact from "pages/Contact";
import NavBar from "components/NavBarComponent";
import Social from "components/Social";
import Team from "pages/Team";
import Collaborate from "pages/Collaborate";
import Footer from "components/Footer";
import Constants from "Constants";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Social />
          <NavBar />
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={Constants.WorkshopsRoute} element={<Workshops />} />
          <Route exact path={Constants.MentorshipsRoute} element={<Mentorship />} />
          <Route exact path={Constants.EventsRoute} element={<Events />} />
          <Route exact path={Constants.BlogRoute} element={<Blog />} />
          <Route exact path={Constants.TeamRoute} element={<Team />} />
          <Route exact path={Constants.AboutRoute} element={<About />} />
          <Route exact path={Constants.ContactsRoute} element={<Contact />} />
          <Route exact path={Constants.CollaborateRoute} element={<Collaborate />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
