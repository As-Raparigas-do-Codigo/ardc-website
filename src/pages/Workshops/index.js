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
    <PageLayout title={ SiteContent.Title.Workshops }
                description={ SiteContent.Subtitle.Workshops } 
                breadcrumbsData={ breadcrumbs }>
      <h1>{ SiteContent.Title.Workshops }</h1>
    </PageLayout>
  );
}

export default Workshops;
