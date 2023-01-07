import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from 'components/Forms/ContactForm';
import PageLayout from 'components/PageLayout';
import Constants from 'constants';

const ContactInfoSection = ({ translation }) => (
  <Container className="my-5 py-5">
    <Row>
      <h2 className="mb-2">{translation('ContactsPage-ContactInfoSection-Title')}</h2>
      <p className="mb-4">{translation('ContactsPage-ContactInfoSection-Description')}</p>
    </Row>
    <Row>
      <Container>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}>
            <strong>{translation('ContactsPage-ContactInfoSection-AdminLabel')}</strong>
          </Col>
          <Col>Miriam Santos</Col>
        </Row>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}>
            <strong>{translation('ContactsPage-ContactInfoSection-EmailLabel')}</strong>
          </Col>
          <Col>
            <a href={`mailto:${Constants.Contacts.Email}`}>{Constants.Contacts.Email}</a>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

const ContactFormSection = ({ translation }) => (
  <Container className="my-5 py-5 px-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{translation('ContactsPage-ContactFormSection-Title')}</h2>
      <p className="mb-4">{translation('ContactsPage-ContactFormSection-Description')}</p>
    </Row>
    <Row>
      <ContactForm translation={translation} />
    </Row>
  </Container>
);

const Contact = ({ translation }) => {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('ContactsPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('ContactsPage-Title')}
      description={translation('ContactsPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md" className="padding-top-first-section">
        <Row>
          <Col>
            <ContactInfoSection translation={translation} />
          </Col>
          <Col>
            <ContactFormSection translation={translation} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Contact;
