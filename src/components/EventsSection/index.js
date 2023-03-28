import React from 'react';
import EventCard from '../EventCard';
import activities from '../../data/activities';
import LinkArrow from 'components/LinkArrow';
import Constants from 'constants';
import Carousel from 'components/Carousel';
import './events-section.scss';

import { Row, Container, Col } from 'react-bootstrap';

function EventsSection({ translation }) {
  const events = activities.slice(0, 8).map((item) => <EventCard item={item} key={item.id} />);

  return (
    <Container className="mt-5 py-md-5 event-section">
      <Row>
        <h2 className="mb-2">{translation('HomePage-EventsSection-Title')}</h2>
        <Col></Col>
        <Col className="d-flex justify-content-end align-items-end fw-bold">
          <div>
            <LinkArrow href={Constants.Routes.Activities} sameWindow>
              {translation('HomePage-ActivitiesSection-AllActivities')}
            </LinkArrow>
          </div>
        </Col>
      </Row>
      <Row>
        <Carousel items={events} />
      </Row>
    </Container>
  );
}

export default EventsSection;
