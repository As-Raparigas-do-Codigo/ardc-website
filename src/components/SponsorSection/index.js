import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./sponsorSection.scss";
import sponsors from "data/sponsors";

const SponsorSection = () => {

  const renderSponsorLogos = (level) => {
    const hasGrayscale = [2, 3].includes(level)
    const sponsorsToDisplay = sponsors.filter(
      sponsor => sponsor.level === level
    )

    return <Row className="justify-content-center">
      {
        sponsorsToDisplay.map(
          sponsor => (
            <Col key={sponsor.id} className="col-auto py-3 my-md-2 mx-2">
              <a href={sponsor.link}>
                <img className={`${hasGrayscale ? "sponsor-grayscale" : null} sponsor-${level}`} src={sponsor.image} alt={sponsor.alt} />
              </a>
            </Col>
          )
        )
      }
    </Row>
  }

  return (
    <Container className="mt-5 pt-md-5 py-5">
      <h6 className="sponsor-title text-uppercase text-center mb-4">Os nossos parceiros</h6>
      {renderSponsorLogos(1)}
      {renderSponsorLogos(2)}
      {renderSponsorLogos(3)}
    </Container>
  )
}

export default SponsorSection;
