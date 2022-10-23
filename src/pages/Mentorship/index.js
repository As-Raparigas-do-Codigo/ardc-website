import React from 'react';
import MentorshipForm from 'components/Forms/MentorshipForm';
import { Container, Col, Row } from 'react-bootstrap';
import { Routes } from 'Constants';
import { SiteContent } from 'data/SiteContent';
import PageLayout from 'components/PageLayout';

import LinkArrow from 'components/LinkArrow';

const MentorshipInfoSection = () => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <h6 className="mb-2">{SiteContent.MentorshipsPage.Title}</h6>
      <h2 className="mb-2">{SiteContent.MentorshipsPage.Subtitle}</h2>
      <p className="mb-4">
        {SiteContent.MentorshipsPage.Text_p1}
      </p>
      <p className="mb-4">
        {SiteContent.MentorshipsPage.Text_p2}
      </p>
      <p className="mb-4">
        {SiteContent.MentorshipsPage.Text_p3}
      </p>
    </Row>
    <Row>
      <ul className="mx-4">
        <li className="mb-2">Mentorias Individuais</li>
        <p className="my-3">
          Aqui o acompamento será feito de forma singular e completamente personalizado e adequado
          aos teus objectivos pessoais.
        </p>
        <li className="mb-2">Mentorias de Grupo</li>
        <p className="my-3">
          Neste tipo de mentoria faz sentido que os membros do grupo estejam alinhados nos
          objectivos, pois se as necessidades de cada grupo forem muito dispares então o
          acompanhamento poderá não ser o mais adequado.
        </p>
      </ul>
    </Row>
    <LinkArrow href={Routes.TeamRoute} variant="primary">
      Conhece os nossos mentores
    </LinkArrow>
  </Container>
);

const MentorshipFormSection = () => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{SiteContent.MentorshipsPage.MentorshipForm.Title}</h2>
      <p className="mb-4">{SiteContent.MentorshipsPage.MentorshipForm.Subtitle}</p>
    </Row>
    <Row>
      <MentorshipForm />
    </Row>
  </Container>
);

// const MentorsSection = () => {
//   const mentorsTeam = team.filter((x) => x.roles.includes("mentor"));

//   return (
//    <Container className={"mt-5 padding-top-bottom-medium"}>
//      <Row>
//       <h2 className="mb-2">{SiteContent.Title.GetToKnowOurMentors}</h2>
//       <p className="mb-4">{SiteContent.Subtitle.GetToKnowOurMentors}</p>
//      </Row>
//      <Row className={"mt-4"} xs={1} md={1} lg={4}>
//        {mentorsTeam.map((item, key) => (
//          <Col className={"mt-4"}>
//            <PersonCard key={key} person={item} />
//          </Col>
//        ))}
//      </Row>
//    </Container>
//   );
// };

const Mentorship = () => {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.MentorshipsPage.PageName
    }
  ];
  return (
    <PageLayout
      title={SiteContent.MentorshipsPage.PageName}
      description={SiteContent.MentorshipsPage.Description}
      breadcrumbsData={breadcrumbs}
    >
      <Container fluid="md">
        <Row>
          <Col>
            <MentorshipInfoSection />
          </Col>
          <Col>
            <MentorshipFormSection />
          </Col>
        </Row>
        {/* <Row>
          <MentorsSection />
        </Row> */}
      </Container>
    </PageLayout>
  );
};

export default Mentorship;
