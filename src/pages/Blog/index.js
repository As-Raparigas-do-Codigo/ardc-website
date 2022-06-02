import React from "react";

import PageLayout from "components/PageLayout";

function Blog() {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    { label: "Blog" },
  ];

  return (
    <PageLayout
      title="Blog"
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <h1>Blog page</h1>
    </PageLayout>
  );
}
export default Blog;
