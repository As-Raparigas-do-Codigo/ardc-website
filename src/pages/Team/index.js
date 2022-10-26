import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import PageLayout from 'components/PageLayout';
import Routes from 'data/Routes';
import SiteContent from 'data/SiteContent';
import TeamData from 'data/Team';

function Team() {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.AboutLabel,
      href: Routes.Team
    },
    {
      label: SiteContent.TeamPage.PageName
    }
  ];

  const founderTeam = TeamData.filter((x) => x.roles.includes('founder'));
  const adminTeam = TeamData.filter((x) => x.roles.includes('admin') && !x.roles.includes('founder'));
  const collabTeam = TeamData.filter(
    (x) => x.roles.includes('collaborator') && !x.roles.includes('admin')
  );

  return (
    <PageLayout
      title={SiteContent.TeamPage.PageName}
      description={SiteContent.TeamPage.Description}
      breadcrumbsData={breadcrumbs}
    >
      <Container className={'mt-5 padding-top-bottom-medium'}>
        <Row>
          <h2>{SiteContent.TeamPage.Label.Founder}</h2>
        </Row>
        <Row className={'mt-4'} xs={1} md={1} lg={4}>
          {founderTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>{SiteContent.TeamPage.Label.Administration}</h2>
        </Row>
        <Row className={'mt-4'} xs={1} md={1} lg={4}>
          {adminTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>{SiteContent.TeamPage.Label.Collaborators}</h2>
        </Row>
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {collabTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
          <Col className={'mt-4'}>
            <PersonCard key={'colaborar'} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}

export default Team;
