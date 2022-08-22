import React from 'react';

import PageLayout from 'components/PageLayout';
import { Routes, SiteContent } from 'Constants';

function Events() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.Events
    }
  ];
  return (
    <PageLayout
      title={SiteContent.Title.Events}
      description={SiteContent.Subtitle.Events}
      breadcrumbsData={breadcrumbs}
    >
      <h1>{SiteContent.Title.Events}</h1>
    </PageLayout>
  );
}

export default Events;
