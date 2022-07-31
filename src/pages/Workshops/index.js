import React from "react";
import { Routes, SiteContent } from "Constants";
import { Container } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import WorkshopsList from "components/WorkshopsList";


function Workshops() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home,
    },
    {
      label: SiteContent.Title.Workshops
    },
  ];
  return (
    <PageLayout
      title={ SiteContent.Title.Workshops }
      description={ SiteContent.Subtitle.Workshops }
      breadcrumbsData={breadcrumbs}>
      <Container className="mt-5 py-md-5">
        <WorkshopsList/>
      </Container>

    </PageLayout>
  );
}

export default Workshops;
