import React from 'react';
import PageLayout from 'components/PageLayout';
import { Routes } from 'data/Constants';
import { SiteContent } from 'data/SiteContent';

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
      breadcrumbsData={breadcrumbs}>
      <h1>{SiteContent.EventsPage.PageName}</h1>
    </PageLayout>
  );
}

export default Events;
