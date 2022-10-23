import React from 'react';
import { Routes } from 'data/Constants';
import { SiteContent } from 'data/SiteContent';
import { Container } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import WorkshopsList from 'components/WorkshopsList';
import KPISSection from 'components/KPISSection';

function Workshops() {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.WorkshopsPage.PageName
    }
  ];
  return (
    <PageLayout
      title={SiteContent.WorkshopsPage.PageName}
      description={SiteContent.WorkshopsPage.Description}
      breadcrumbsData={breadcrumbs}
    >
      <Container className="mt-5 py-md-5">
        <WorkshopsList next />
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <KPISSection />
      </div>
      <Container className="mt-5 py-md-5">
        <WorkshopsList all />
      </Container>
    </PageLayout>
  );
}

export default Workshops;
