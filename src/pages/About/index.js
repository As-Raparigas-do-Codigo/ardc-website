import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import Teaser from 'components/Teaser';
import Statistics from 'components/KPISSection';
import AboutData from 'data/about';
import Constants from 'constants';

function AboutUs({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('AboutLabel'),
      href: Constants.Routes.About
    },
    {
      label: translation('AboutUsPage-PageName')
    }
  ];

  const aboutBellow = AboutData(translation)
    .slice(1, 3)
    .map((data) => {
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
      title={translation('AboutUsPage-PageName')}
      description={translation('AboutUsPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container>
        <Row>
          <Col md={12} key={AboutData(translation)[0].id}>
            <Teaser
              title={AboutData(translation)[0].title}
              subtitle={AboutData(translation)[0].subtitle}
              description={AboutData(translation)[0].description}
              imgPath={AboutData(translation)[0].img}
              imageRight={AboutData(translation)[0].pictureRight}
              linkFirst={AboutData(translation)[0].link1}
            />
          </Col>
        </Row>
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <Statistics translation={translation} />
      </div>
      <Container>
        <Row>{aboutBellow}</Row>
      </Container>
    </PageLayout>
  );
}

export default AboutUs;
