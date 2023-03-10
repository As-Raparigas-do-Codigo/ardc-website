import React from 'react';
import PageLayout from 'components/PageLayout';
import EventCard from 'components/EventCard';
import { Container, Row, Col } from 'react-bootstrap';
import Constants from 'constants';
import './events.scss';

import events from 'data/events';

function Events({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('EventsPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('EventsPage-PageName')}
      description={translation('EventsPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md" className="">
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {events.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <span className={'event-card-wrapper'}>
                <EventCard item={item} key={item.id} />
              </span>
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
}

export default Events;
