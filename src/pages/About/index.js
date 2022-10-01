import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, SiteContent } from 'Constants';
import PageLayout from "components/PageLayout";
import Teaser from "components/Teaser";
import Statistics from "components/Statistics";
import about from "data/about.js";

function About() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.AboutUs,
      href: Routes.About
    },
    {
      label: SiteContent.Title.AboutTheProject
    }
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
      title={ SiteContent.Title.AboutUs }
      description={ SiteContent.Subtitle.AboutUs }
      breadcrumbsData={ breadcrumbs }>
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