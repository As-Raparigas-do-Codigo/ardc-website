import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import Teaser from 'components/Teaser';
import Statistics from 'components/KPISSection';
import AboutData from 'data/about';
import SiteContent from 'data/SiteContent';
import Routes from 'data/Routes';

function AboutUs() {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.AboutLabel,
      href: Routes.About
    },
    {
      label: SiteContent.AboutUsPage.PageName
    }
  ];

  const aboutBellow = AboutData.slice(1, 3).map((data) => {
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
      title={SiteContent.AboutUsPage.PageName}
      description={SiteContent.AboutUsPage.Description}
      breadcrumbsData={breadcrumbs}>
      <Container>
        <Row>
          <Col md={12} key={AboutData[0].id}>
            <Teaser
              title={AboutData[0].title}
              subtitle={AboutData[0].subtitle}
              description={AboutData[0].description}
              imgPath={AboutData[0].img}
              imageRight={AboutData[0].pictureRight}
              linkFirst={AboutData[0].link1}
            />
          </Col>
        </Row>
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <Statistics />
      </div>
      <Container>
        <Row>{aboutBellow}</Row>
      </Container>
    </PageLayout>
  );
}

export default AboutUs;
