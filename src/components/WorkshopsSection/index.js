import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import WorkshopsList from 'components/WorkshopsList';
import LinkArrow from 'components/LinkArrow';
import { Routes } from 'Constants';
import { SiteContent } from 'data/SiteContent';

function WorkshopsSection(props) {
  return (
    <Container className="mt-5 py-md-5">
      <h2 className="mb-2">{props.heading}</h2>
      <Row className="pb-3 mb-md-2">
        <Col>
          <p className="">{props.subtitle}</p>
        </Col>
        <Col className="col-auto align-self-end">
          <LinkArrow href={Routes.Workshop}>
            {SiteContent.HomePage.WorkshopsSection.Button}
          </LinkArrow>
        </Col>
      </Row>
      <Row>
        <WorkshopsList next />
      </Row>
    </Container>
  );
}

export default WorkshopsSection;
