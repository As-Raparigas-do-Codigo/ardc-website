import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SiteContent from 'data/SiteContent';

const KPISSection = () => {
  return (
    <Container className="py-5 px-2">
      <Row>
        <Col className="px-5 my-2">
          <h1 className="text-center fs-x5 fw-bold mb-1">67</h1>
          <p className="text-center">
            {SiteContent.StatisticsSection.WorkshopsLabel}
          </p>
        </Col>
        <Col className="px-5 my-2">
          <h1 className="text-center fs-x5 fw-bold mb-1">25</h1>
          <p className="text-center">
            {SiteContent.StatisticsSection.MentorsLabel}
          </p>
        </Col>
        <Col className="px-5 my-2">
          <h1 className="text-center fs-x5 fw-bold mb-1">400+</h1>
          <p className="text-center">
            {SiteContent.StatisticsSection.StudentsLabel}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default KPISSection;
