import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Workshops from "./components/Workshops";
import Mentorship from "./components/Mentorship";
import Events from "./components/Events";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NavBar from "./components/NavBarComponent";
import Social from "./components/Social";

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
          <Route exact path="/mentorship" element={<Mentorship />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
