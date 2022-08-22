import React from 'react';
import { Routes, SiteContent } from 'Constants';
import { Container } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import WorkshopsList from 'components/WorkshopsList';
import KPISSection from 'components/KPISSection';

function Workshops() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.Workshops
    }
  ];
  return (
    <PageLayout
      title={SiteContent.Title.Workshops}
      description={SiteContent.Subtitle.Workshops}
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
