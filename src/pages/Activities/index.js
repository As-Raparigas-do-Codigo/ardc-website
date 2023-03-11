import React from 'react';
import PageLayout from 'components/PageLayout';
import EventCard from 'components/EventCard';
import { Container, Row, Col } from 'react-bootstrap';
import Constants from 'constants';
import './activities.scss';

import events from 'data/events';

function Activities({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('ActivitiesPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('ActivitiesPage-PageName')}
      description={translation('ActivitiesPage-Description')}
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

export default Activities;
