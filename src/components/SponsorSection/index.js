import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './sponsorSection.scss';
import { amountOfTiers, sponsors } from 'data/sponsors';

const SponsorSection = () => {
  const renderSponsorLogosTier = (tier) => {
    const hasGrayscale = [2, 3].includes(tier);
    const sponsorsToDisplay = sponsors.filter((sponsor) => sponsor.tier === tier);

    return (
      <Row className="justify-content-center" key={tier}>
        {sponsorsToDisplay.map((sponsor) => (
          <Col key={sponsor.id} className="col-auto py-3 my-md-2 mx-2">
            <a href={sponsor.link}>
              <img
                className={`${hasGrayscale ? 'sponsor-grayscale' : null} sponsor-${tier}`}
                src={sponsor.image}
                alt={sponsor.alt}
              />
            </a>
          </Col>
        ))}
      </Row>
    );
  };

  const renderAllSponsorTiersInOrder = () => {
    const tiers = [];
    for (let i = 1; i <= amountOfTiers; i++) {
      tiers.push(renderSponsorLogosTier(i));
    }
    return tiers;
  };

  return (
    <Container className="mt-5 pt-md-5 py-5">
      <h6 className="sponsor-title text-uppercase text-center mb-4">Os nossos parceiros</h6>
      {renderAllSponsorTiersInOrder()}
    </Container>
  );
};

export default SponsorSection;
