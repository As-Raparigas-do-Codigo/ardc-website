import React from "react";
import PageLayout from "components/PageLayout";
import { Routes, SiteContent } from "Constants";

function About() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: SiteContent.Title.AboutUs,
      href: Routes.About,
    },
    { label: "Sobre o projecto" },
  ];

  return (
    <PageLayout
      title={SiteContent.Title.AboutUs}
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <h1>As Raparigas do Código</h1>
    </PageLayout>
  );
}

export default About;
