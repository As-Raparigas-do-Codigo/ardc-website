import React from "react";
import ContactForm from "../Forms/ContactForm";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>

      <div className="gradient-zig-zag">
        <button className="button-primary">Button</button>
        <a href="/somehe" className="button-secondary">
          Link
        </a>
      </div>
    </div>
  );
}

export default Home;
