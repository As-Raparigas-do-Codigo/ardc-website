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
          <Route exact path="/workshops" element={<Workshops />} />
          <Route exact path="/mentorias" element={<Mentorship />} />
          <Route exact path="/eventos" element={<Events />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/equipa" element={<Team />} />
          <Route exact path="/sobre-nos" element={<About />} />
          <Route exact path="/contactos" element={<Contact />} />
          <Route exact path="/colaborar" element={<Collaborate />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
