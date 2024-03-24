import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './sponsorSection.scss';
import { sponsors } from 'data/sponsors';
import { communityPartners } from 'data/communityPartners';

const amountOfTiers = 3;
const SponsorSection = () => {
  const renderSponsorLogosTier = (tier, partnerList) => {
    const sponsorsToDisplay = partnerList.filter((sponsor) => sponsor.tier === tier);

    return (
      <Row className="justify-content-center" key={tier}>
        {sponsorsToDisplay.map((sponsor) => (
          <Col key={sponsor.id} className="col-auto my-md-2 mx-2">
            <a href={sponsor.link}>
              <img className={`sponsor-${tier}`} src={sponsor.image} alt={sponsor.alt} />
            </a>
          </Col>
        ))}
      </Row>
    );
  };

  const renderAllSponsorTiersInOrder = (partnerList) => {
    const tiers = [];
    for (let i = 1; i <= amountOfTiers; i++) {
      tiers.push(renderSponsorLogosTier(i, partnerList));
    }
    return tiers;
  };

  return (
    <Container className="mt-5 pt-md-5 py-5">
      <h6 className="sponsor-title text-uppercase text-center mb-4">Os nossos patrocinadores</h6>
      {renderAllSponsorTiersInOrder(sponsors)}
      <br></br>
      <br></br>
      <br></br>
      <h6 className="sponsor-title text-uppercase text-center mb-4">Os nossos parceiros</h6>
      {renderAllSponsorTiersInOrder(communityPartners)}
    </Container>
  );
};

export default SponsorSection;
