import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from 'components/Forms/ContactForm';
import PageLayout from 'components/PageLayout';
import { Constants, Routes } from 'Constants';
import { SiteContent } from 'data/SiteContent';

const ContactInfoSection = () => (
  <Container className="my-5 py-5">
    <Row>
      <h2 className="mb-2">
        {SiteContent.ContactsPage.ContactInfoSection.Title}
      </h2>
      <p className="mb-4">
        {SiteContent.ContactsPage.ContactInfoSection.Description}
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
            <strong>
              {SiteContent.ContactsPage.ContactInfoSection.EmailLabel}
            </strong>
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
      <h2 className="mb-2">
        {SiteContent.ContactsPage.ContactFormSection.Title}
      </h2>
      <p className="mb-4">
        {SiteContent.ContactsPage.ContactFormSection.Description}
      </p>
    </Row>
    <Row>
      <ContactForm />
    </Row>
  </Container>
);

const Contact = () => {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.ContactsPage.PageName
    }
  ];
  return (
    <PageLayout
      title={SiteContent.ContactsPage.Title}
      description={SiteContent.ContactsPage.Description}
      breadcrumbsData={breadcrumbs}
    >
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
