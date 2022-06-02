import React from "react";

import PageLayout from "components/PageLayout";

function Workshops() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    { label: "Workshops" },
  ];

  return (
    <PageLayout breadcrumbsData={breadcrumbs}>
      <h1>Workshops Page</h1>
    </PageLayout>
  );
}

export default Workshops;
