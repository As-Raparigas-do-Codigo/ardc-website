import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import PageLayout from 'components/PageLayout';
import Constants from 'constants';
import TeamData from 'data/team';
import FeatureFlag from 'components/FeatureFlag';

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
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {founderTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
          {adminTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
          {collabTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
          <FeatureFlag name="show_colaboration">
            <Col key={'colaborar'} className={'mt-4'}>
              <PersonCard key={'colaborar'} />
            </Col>
          </FeatureFlag>
        </Row>
      </Container>
    </PageLayout>
  );
}

export default Team;
