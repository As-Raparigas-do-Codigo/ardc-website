import React from "react";
import PageLayout from "components/PageLayout";
import { Routes, SiteContent } from "Constants";

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
    <PageLayout title={ SiteContent.Title.Workshops } description="Oferecemos vários cursos e workshops de programação, totalmente gratuitos e adaptados às necessidades e interesses das alunas inscritas." breadcrumbsData={breadcrumbs}>
      <h1>Workshops Page</h1>
    </PageLayout>
  );
}

export default Workshops;
