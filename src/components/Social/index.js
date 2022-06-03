import React from "react";
import Container from "react-bootstrap/Container";
import SocialLinks from "components/SocialLinks";
import "./social.scss";

function SocialBar() {
  return <div className="social-bar">
    <Container>
        <SocialLinks/>
    </Container>
  </div>;
}

export default SocialBar;
