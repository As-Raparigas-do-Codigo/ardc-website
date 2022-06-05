import React from "react";
import MentorshipForm from "components/Forms/MentorshipForm";
import { Container, Col, Row } from "react-bootstrap";
import { Routes, SiteContent } from "Constants";
import PageLayout from "components/PageLayout";

const MentorshipInfoSection = () => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <h6 className="mb-2">PROGRAMA DE MENTORIA</h6>
      <h2 className="mb-2">O que fazemos?</h2>
      <p className="mb-4">
        Temos uma equipa vasta de diversas qualidades que te podem ajudar a
        guiar-te por este mundo das tecnologias.
      </p>
      <p className="mb-4">A nossa equipa de mentores irá seguir-</p>
      <p className="mb-4">Existem duas opcões disponíveis:</p>
    </Row>
    <Row>
      <ul className="mx-4">
        <li className="mb-2">Mentorias Individuais</li>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          aliquet eros et gravida convallis. Integer placerat blandit arcu, nec
          imperdiet urna pretium at. Sed et massa nec tortor dapibus facilisis
          et ut lacus.
        </p>
        <li className="mb-2">Mentorias de Grupo</li>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          aliquet eros et gravida convallis. Integer placerat blandit arcu, nec
          imperdiet urna pretium at. Sed et massa nec tortor dapibus facilisis
          et ut lacus.
        </p>
      </ul>
    </Row>
  </Container>
);

const MentorshipFormSection = () => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{ SiteContent.Title.MentorshipForm }</h2>
      <p className="mb-4">{ SiteContent.Subtitle.MentorshipForm }</p>
    </Row>
    <Row>
      <MentorshipForm />
    </Row>
  </Container>
);

const MentorsSection = () => (
  <Container>
    <Row>
      <h2 className="mb-2">{ SiteContent.Title.GetToKnowOurMentors }</h2>
      <p className="mb-4">
        Placeholder de texto para descrição, lorem ipsum dolor sit amet.
      </p>
    </Row>
    <Row>TODO: mentor cards</Row>
  </Container>
);

const Mentorship = () => {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home,
    },
    {
      label: SiteContent.Title.Mentorships,
    },
  ];
  return (
    <PageLayout
      title={ SiteContent.Title.Mentorship }
      description={ SiteContent.Subtitle.Mentorship }
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md">
        <Row>
          <Col>
            <MentorshipInfoSection />
          </Col>
          <Col>
            <MentorshipFormSection />
          </Col>
        </Row>
        <Row>
          <MentorsSection />
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Mentorship;
