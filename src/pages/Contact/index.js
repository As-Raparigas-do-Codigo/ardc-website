import React from "react";
import ContactForm from "components/Forms/ContactForm";
import { Container, Row, Col } from "react-bootstrap";
import Constants from "Constants";

const ContactInfoSection = () => (
  <Container className="my-5 py-5">
    <Row>
      <h2 className="mb-2">Envia-nos um email.</h2>
      <p className="mb-4">Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Row>
    <Row>
      <Container>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}><strong>Direção:</strong></Col>
          <Col>Miriam Santos</Col>
        </Row>
        <Row xs="auto" md="auto" lg="auto" className="mb-3">
          <Col xs={2} md={2} lg={2}><strong>Email:</strong></Col>
          <Col><a href={`mailto:${Constants.Email}`}>{Constants.Email}</a></Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

const ContactFormSection = () => (
  <Container className="my-5 py-5 px-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">Precisas de ajuda?</h2>
      <p className="mb-4">Envia-nos a tua mensagem através do formulário de contacto.</p>
    </Row>
    <Row>
      <ContactForm />
    </Row>
  </Container>
);

const Contact = () => (
  <Container fluid="md" className="Contact">
    <Row>
      <Col><ContactInfoSection /></Col>
      <Col><ContactFormSection /></Col>
    </Row>
  </Container>
);

export default Contact;
