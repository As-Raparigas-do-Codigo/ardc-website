import React from 'react';
import PageLayout from 'components/PageLayout';
import Routes from 'data/Routes';

function Events({ translation }) {
  const breadcrumbs = [
    {
      label: translation("HomePage-PageName"),
      href: Routes.Home
    },
    {
      label: translation("EventsPage-PageName")
    }
  ];
  return (
    <PageLayout
      title={translation("EventsPage-PageName")}
      description={translation("EventsPage-Description")}
      breadcrumbsData={breadcrumbs}>
      <h1>{translation("EventsPage-PageName")}</h1>
    </PageLayout>
  );
}

export default Events;
