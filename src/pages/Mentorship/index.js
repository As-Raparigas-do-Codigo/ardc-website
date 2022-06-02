import React from "react";
import MentorshipForm from "components/Forms/MentorshipForm";
import { Container, Col, Row } from "react-bootstrap";
import PageLayout from "components/PageLayout";

const MentorshipInfoSection = () => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <h6 className="mb-2">SUB-HEADING PLACEHOLDER </h6>
      <h2 className="mb-2">
        Heading placeholder lorem ipsum dolor sit amet, consectetur.
      </h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        aliquet eros et gravida convallis. Integer placerat blandit arcu, nec
        imperdiet urna pretium at. Sed et massa nec tortor dapibus facilisis et
        ut lacus. Integer tincidunt augue ut sem scelerisque hendrerit. Fusce
        vel laoreet sapien. In hac habitasse platea dictumst. Etiam a ultrices
        turpis. Donec id auctor nunc. Donec vitae pharetra massa, sit amet
        venenatis quam.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        aliquet eros et gravida convallis. Integer placerat blandit arcu, nec
        imperdiet urna pretium at. Sed et massa nec tortor dapibus facilisis et
        ut lacus.
      </p>
      <p className="mb-4">
        Placeholder de texto para descrição, lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
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
      <h2 className="mb-2">Procuras mentoria?</h2>
      <p className="mb-4">
        Placeholder de texto para descrição, lorem ipsum dolor sit amet.
      </p>
    </Row>
    <Row>
      <MentorshipForm />
    </Row>
  </Container>
);

const MentorsSection = () => (
  <Container>
    <Row>
      <h2 className="mb-2">Conhece os nossos mentores.</h2>
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
      label: "Home",
      href: "/",
    },
    { label: "Mentorias" },
  ];

  return (
    <PageLayout
      title="Mentoria"
      description="bla bla bla cenas"
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
