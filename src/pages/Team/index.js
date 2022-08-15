import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import PageLayout from 'components/PageLayout';
import { SiteContent, Routes } from 'Constants';
import team from 'data/team';

function Team() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.AboutUs,
      href: Routes.Team
    },
    {
      label: SiteContent.Title.OurTeam
    }
  ];

  // team.sort((a, b) => {
  //   const nameA = a.name.toLowerCase();
  //   const nameB = b.name.toLowerCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }

  //   return 0;
  // });

  const founderTeam = team.filter((x) => x.roles.includes('founder'));
  const adminTeam = team.filter((x) => x.roles.includes('admin') && !x.roles.includes('founder'));
  const collabTeam = team.filter(
    (x) => x.roles.includes('collaborator') && !x.roles.includes('admin')
  );

  return (
    <PageLayout
      title={SiteContent.Title.OurTeam}
      description={SiteContent.Subtitle.OurTeam}
      breadcrumbsData={breadcrumbs}
    >
      <Container className={'mt-5 padding-top-bottom-medium'}>
        <Row>
          <h2>Fundadora</h2>
        </Row>
        <Row className={'mt-4'} xs={1} md={1} lg={4}>
          {founderTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>Administração</h2>
        </Row>
        <Row className={'mt-4'} xs={1} md={1} lg={4}>
          {adminTeam.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <PersonCard key={key} person={item} />
            </Col>
          ))}
        </Row>
        <Row className={'mt-5'}>
          <h2>Colaboradores</h2>
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
