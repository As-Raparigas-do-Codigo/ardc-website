import React from 'react';
import PageLayout from 'components/PageLayout';
import { Routes, SiteContent } from 'Constants';

function Blog() {
  const breadcrumbs = [
    {
      label: SiteContent.Title.Home,
      href: Routes.Home
    },
    {
      label: SiteContent.Title.Blog
    }
  ];

  return (
    <PageLayout
      title={SiteContent.Title.Blog}
      description={SiteContent.Subtitle.Blog}
      breadcrumbsData={breadcrumbs}
    >
      <h1>{SiteContent.Title.Blog}</h1>
    </PageLayout>
  );
}
export default Blog;
