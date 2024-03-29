import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import WorkshopsList from 'components/WorkshopsList';
import LinkArrow from 'components/LinkArrow';
import Constants from 'constants';

function WorkshopsSection({ heading, subtitle, translation }) {
  return (
    <Container className="mt-5 py-md-5">
      <h2 className="mb-2">{heading}</h2>
      <Row className="pb-3 mb-md-2">
        <Col>
          <p className="">{subtitle}</p>
        </Col>
        <Col className="col-auto align-self-end">
          <LinkArrow href={Constants.Routes.Workshops}>
            {translation('HomePage-WorkshopsSection-Button')}
          </LinkArrow>
        </Col>
      </Row>
      <Row>
        <WorkshopsList next translation={translation} />
      </Row>
    </Container>
  );
}

export default WorkshopsSection;
