import React from "react";
import PageLayout from "components/PageLayout";
import { Routes, SiteContent } from "Constants";

function Blog() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home,
    },
    { label: SiteContent.Title.Blog },
  ];

  return (
    <PageLayout
      title={SiteContent.Title.Blog}
      description="bla bla bla cenas"
      breadcrumbsData={breadcrumbs}>
      <h1>Blog page</h1>
    </PageLayout>
  );
}
export default Blog;
