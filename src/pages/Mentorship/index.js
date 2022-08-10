import React from "react";
import MentorshipForm from "components/Forms/MentorshipForm";
import { Container, Col, Row } from "react-bootstrap";
import { Routes, SiteContent } from "Constants";
import PageLayout from "components/PageLayout";

import LinkArrow from "components/LinkArrow";
import Constants from "Constants";

const MentorshipInfoSection = () => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <h6 className="mb-2">{SiteContent.Title.MentorshipProgram}</h6>
      <h2 className="mb-2">{SiteContent.Title.WhatDoWeDo}</h2>
      <p className="mb-4">
        Temos uma equipa vasta de diversas qualidades que te podem ajudar a
        guiar-te por este mundo das tecnologias. Nós iremos garantir que o
        mentor terá o connhecimento e um conjunto de qualidades adequado àquilo
        que tu procuras
      </p>
      <p className="mb-4">
        A nossa equipa de mentores tem o propósito de te acompanhar ao longo
        deste teu novo percurso. Alocando uma pessoa dedicada a ti irá permitir
        que tenhas um acompanhamento bastante personalizado de acordo com os
        teus objectivos. Poderás tirar dúvidas e seres respondido com a mais
        brevidade possivel. A nossa dedicação será sempre em prol de quem nos
        procura e faremos o que estiver ao nosso alcance para ajudar.
      </p>
      <p className="mb-4">
        Assim, para te esclarecemos melhor nós fornecemos dois tipos de
        mentorias:
      </p>
    </Row>
    <Row>
      <ul className="mx-4">
        <li className="mb-2">Mentorias Individuais</li>
        <p className="my-3">
          Aqui o acompamento será feito de forma singular e completamente
          personalizado e adequado aos teus objectivos pessoais.
        </p>
        <li className="mb-2">Mentorias de Grupo</li>
        <p className="my-3">
          Neste tipo de mentoria faz sentido que os membros do grupo estejam
          alinhados nos objectivos, pois se as necessidades de cada grupo forem
          muito dispares então o acompanhamento poderá não ser o mais adequado.
        </p>
      </ul>
    </Row>
    <LinkArrow href={Constants.TeamRoute} variant="primary">
      Conhece os nossos mentores
    </LinkArrow>
  </Container>
);

const MentorshipFormSection = () => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{SiteContent.Title.MentorshipForm}</h2>
      <p className="mb-4">{SiteContent.Subtitle.MentorshipForm}</p>
    </Row>
    <Row>
      <MentorshipForm />
    </Row>
  </Container>
);

const MentorsSection = () => {
  const mentorsTeam = team.filter((x) => x.roles.includes("mentor"));

  return (
   <Container className={"mt-5 padding-top-bottom-medium"}>
     <Row>
      <h2 className="mb-2">{SiteContent.Title.GetToKnowOurMentors}</h2>
      <p className="mb-4">{SiteContent.Subtitle.GetToKnowOurMentors}</p>
     </Row>
     <Row className={"mt-4"} xs={1} md={1} lg={4}>
       {mentorsTeam.map((item, key) => (
         <Col className={"mt-4"}>
           <PersonCard key={key} person={item} />
         </Col>
       ))}
     </Row>
   </Container>
  );
};


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
      title={SiteContent.Title.Mentorship}
      description={SiteContent.Subtitle.Mentorship}
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
        {/* <Row>
          <MentorsSection />
        </Row> */}
      </Container>
    </PageLayout>
  );
};

export default Mentorship;
