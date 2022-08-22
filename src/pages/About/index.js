import React from 'react';
import PageLayout from 'components/PageLayout';
import { Routes, SiteContent } from 'Constants';

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
  return (
    <PageLayout
      title={SiteContent.Title.AboutUs}
      description={SiteContent.Subtitle.AboutUs}
      breadcrumbsData={breadcrumbs}
    >
      <h1>{SiteContent.Title.RdC}</h1>
    </PageLayout>
  );
}

export default About;
