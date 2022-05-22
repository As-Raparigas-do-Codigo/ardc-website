import React from "react";
import CollaboratorForm from "components/Forms/CollaboratorForm";
import { Container, Row } from "react-bootstrap";

const CollaborateFormSection = () => (
  <Container className="my-5 py-5 px-5">
    <Row>
      <h2 className="mb-2">Queres colaborar connosco?</h2>
      <p className="mb-4">Placeholder de texto para descrição, lorem ipsum dolor sit amet.</p>
    </Row>
    <Row>
      <CollaboratorForm />
    </Row>
  </Container>
)

const Collaborate = () => (
  <Container fluid="md" className="Collaborate">
    <Row className="px-5 mx-5">
      <CollaborateFormSection />
    </Row>
  </Container>
);

export default Collaborate;
