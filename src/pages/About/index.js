import React from "react";
import Constants from "Constants";
import { Container, Row, Col } from "react-bootstrap";

// components
import PageLayout from "components/PageLayout";
import Teaser from "components/Teaser";
import Statistics from "components/Statistics";

// data
import about from "data/about.js";

function About() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre nós",
      href: Constants.AboutRoute,
    },
    { label: "Sobre o projecto" },
  ];

  const aboutBellow = about.slice(1, 3).map((data) => {
    return (
      <Col md={12} key={data.id}>
        <Teaser
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          imgPath={data.img}
          imageRight={data.pictureRight}
          linkFirst={data.link1}
        />
      </Col>
    );
  });

  return (
    <PageLayout
      title="Sobre o projecto"
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}
    >
      <Container>
        <Row>
          <Col md={12} key={about[0].id}>
            <Teaser
              title={about[0].title}
              subtitle={about[0].subtitle}
              description={about[0].description}
              imgPath={about[0].img}
              imageRight={about[0].pictureRight}
              linkFirst={about[0].link1}
            />
          </Col>
        </Row>
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <Statistics />
      </div>
      <Container>
        {" "}
        <Row>{aboutBellow}</Row>
      </Container>
    </PageLayout>
  );
}

export default About;
