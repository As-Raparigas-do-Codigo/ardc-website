import React from 'react';
import Constants from 'constants';
import { Container } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import WorkshopsList from 'components/WorkshopsList';
import KPISSection from 'components/KPISSection';

function Workshops({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('WorkshopsPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('WorkshopsPage-PageName')}
      descriptionParagraphs={[translation('WorkshopsPage-Description')]}
      breadcrumbsData={breadcrumbs}>
      <Container className="mt-5 py-md-5">
        <WorkshopsList next translation={translation} />
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <KPISSection translation={translation} />
      </div>
      <Container className="mt-5 py-md-5">
        <WorkshopsList all translation={translation} />
      </Container>
    </PageLayout>
  );
}

export default Workshops;
