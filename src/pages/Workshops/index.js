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
    <PageLayout title="Workshops" description="Oferecemos vários cursos e workshops de programação, totalmente gratuitos e adaptados às necessidades e interesses das alunas inscritas." breadcrumbsData={breadcrumbs}>
      <h1>Workshops Page</h1>
    </PageLayout>
  );
}

export default Workshops;
