import React from 'react';
import BasicCard from '../BasicCard';
import Events from '../../data/events';
import Carousel from 'components/Carousel';
import './events-section.scss';

import { Row, Container } from 'react-bootstrap';

function EventsSection({ translation }) {
  const events = Events.map((item) => (
    <BasicCard
      alt={item.alt}
      date={item.date}
      description={item.description}
      imgPath={item.image}
      link={item.link}
      title={item.title}
      url={item.url}
      key={item.id}
    />
  ));

  return (
    <Container className="mt-5 py-md-5 event-section">
      <Row>
        <h2 className="mb-2">{translation('HomePage-EventsSection-Title')}</h2>
        <p className="mb-5"></p>
      </Row>
      <Row>
        <Carousel items={events} />
      </Row>
    </Container>
  );
}

export default EventsSection;
