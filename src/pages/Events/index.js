import React from 'react';
import PageLayout from 'components/PageLayout';
import { Routes } from 'Constants';
import { SiteContent } from 'SiteContent';

function Events() {
  const breadcrumbs = [
    {
      label: SiteContent.HomePage.PageName,
      href: Routes.Home
    },
    {
      label: SiteContent.EventsPage.PageName
    }
  ];
  return (
    <PageLayout
      title={SiteContent.EventsPage.PageName}
      description={SiteContent.EventsPage.Description}
      breadcrumbsData={breadcrumbs}
    >
      <h1>{SiteContent.Title.Events}</h1>
    </PageLayout>
  );
}

export default Events;
