import React from "react";

import PageLayout from "components/PageLayout";

function About() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre nós",
      href: Constants.AboutRoute,
    },
    { label: "Sobre o projecto" },
  ];

  return (
    <PageLayout
      title="Sobre o projecto"
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <h1>As Raparigas do Código</h1>
    </PageLayout>
  );
}

export default About;
