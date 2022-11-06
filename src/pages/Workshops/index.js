import React from 'react';
import Routes from 'data/Routes';
import { Container } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import WorkshopsList from 'components/WorkshopsList';
import KPISSection from 'components/KPISSection';

function Workshops({ translation }) {
  const breadcrumbs = [
    {
      label: translation("HomePage-PageName"),
      href: Routes(translation).Home
    },
    {
      label: translation("WorkshopsPage-PageName")
    }
  ];
  return (
    <PageLayout
      title={translation("WorkshopsPage-PageName")}
      description={translation("WorkshopsPage-Description")}
      breadcrumbsData={breadcrumbs}
    >
      <Container className="mt-5 py-md-5">
        <WorkshopsList next translation={translation}/>
      </Container>
      <div className="zig-zag"></div>
      <div className="bg-pink">
        <KPISSection translation={translation}/>
      </div>
      <Container className="mt-5 py-md-5">
        <WorkshopsList all translation={translation}/>
      </Container>
    </PageLayout>
  );
}

export default Workshops;
