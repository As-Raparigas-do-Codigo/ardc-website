import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Assets
import AWS from "assets/sponsorlogos/aws.png";
import PortoTechHub from "assets/sponsorlogos/portohub.png";
import WIT from "assets/sponsorlogos/wit.png";
import "./sponsorSection.scss";

const SponsorImages = [{
  id: 1,
  src: AWS,
  alt: "AWS logo"
}, {
  id: 2,
  src: PortoTechHub,
  alt: "Porto Tech Hub logo"
}, {
  id: 3,
  src: WIT,
  alt: "Women In Tech logo"
}];

const SponsorSection = () => (
  <Container className="mt-5 py-5">
    <h6 className="sponsor-title text-uppercase text-center mb-4">headline para principais parceiros aqui, lorem ipsum dolor.</h6>
    <Row className="justify-content-center">
      {SponsorImages.map(image => (
        <Col key={image.id} className="col-auto m-5">
          <img className="sponsor-image" src={image.src} alt={image.alt} />
        </Col>
      ))}
    </Row>
  </Container>
);


export default SponsorSection;