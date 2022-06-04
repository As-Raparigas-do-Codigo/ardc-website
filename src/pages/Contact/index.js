import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "components/Forms/ContactForm";
import PageLayout from "components/PageLayout";
import { Constants, Routes, SiteContent } from "Constants";

const ContactInfoSection = () => (
  <Container className="my-5 py-5">
    <Row>
      <h2 className="mb-2">Envia-nos um email.</h2>
      <p className="mb-4">
        Placeholder de texto para descrição, lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
    </Row>
    <Row>
      <Container>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}>
            <strong>Direção:</strong>
          </Col>
          <Col>Miriam Santos</Col>
        </Row>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}>
            <strong>Email:</strong>
          </Col>
          <Col>
            <a href={`mailto:${Constants.Email}`}>{Constants.Email}</a>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

const ContactFormSection = () => (
  <Container className="my-5 py-5 px-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">Precisas de ajuda?</h2>
      <p className="mb-4">
        Envia-nos a tua mensagem através do formulário de contacto.
      </p>
    </Row>
    <Row>
      <ContactForm />
    </Row>
  </Container>
);

const Contact = ({ banner }) => {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home,
    },
    { label: SiteContent.Title.Contacts },
  ];
  return (
    <PageLayout
      title={SiteContent.Title.Contacts}
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md" className="padding-top-first-section">
        <Row>
          <Col>
            <ContactInfoSection />
          </Col>
          <Col>
            <ContactFormSection />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Contact;
