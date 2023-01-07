import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import PageLayout from 'components/PageLayout';
import Constants from 'constants';
import TeamData from 'data/team';

function Team({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('AboutLabel'),
      href: Constants.Routes.Team
    },
    {
      label: translation('TeamPage-PageName')
    }
  ];

  const founderTeam = TeamData.filter((x) => x.roles.includes('founder'));
  const adminTeam = TeamData.filter(
    (x) => x.roles.includes('admin') && !x.roles.includes('founder')
  );
  const collabTeam = TeamData.filter(
    (x) => x.roles.includes('collaborator') && !x.roles.includes('admin')
  );

  return (
    <PageLayout
      title={translation('TeamPage-PageName')}
      description={translation('TeamPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container>
        <Row>
          <h2>{translation('TeamPage-Label-Founder')}</h2>
        </Row>
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {founderTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>{translation('TeamPage-Label-Administration')}</h2>
        </Row>
        <Row className={'mt-4'} xs={1} md={1} lg={4}>
          {adminTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>{translation('TeamPage-Label-Collaborators')}</h2>
        </Row>
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {collabTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
          {/* <PersonCard key={'colaborar'} /> */}
        </Row>
      </Container>
    </PageLayout>
  );
}

export default Team;
