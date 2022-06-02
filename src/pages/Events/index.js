import React from "react";

import PageLayout from "components/PageLayout";

function Events() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    { label: "Eventos" },
  ];
  return (
    <PageLayout
      title="Eventos"
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <h1>Eventos</h1>
    </PageLayout>
  );
}

export default Events;
