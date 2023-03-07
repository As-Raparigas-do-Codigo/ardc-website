import React from 'react';
import CommunityForm from 'components/Forms/CommunityForm';
import { Container, Col, Row } from 'react-bootstrap';
import Constants from 'constants';
import PageLayout from 'components/PageLayout';

import LinkArrow from 'components/LinkArrow';

const CommunityInfoSection = ({ translation }) => (
  <Container className="my-5 py-5">
    <Row>
      <h6 className="mb-2">{translation('CommunityPage-Title')}</h6>
      <h2 className="mb-2">{translation('CommunityPage-Subtitle')}</h2>
      <p className="mb-4">{translation('CommunityPage-Text_p1')}</p>
      <p className="mb-4">{translation('CommunityPage-Text_p2')}</p>
      <p className="mb-4">{translation('CommunityPage-Text_p3')}</p>
    </Row>
    <Row>
      <ul className="mx-4">
        <li className="mb-2">{translation('CommunityPage-IndividualCommunityTitle')}</li>
        <p className="my-3">{translation('CommunityPage-IndividualCommunityText')}</p>
        <li className="mb-2">{translation('CommunityPage-GroupCommunityTitle')}</li>
        <p className="my-3">{translation('CommunityPage-GroupCommunityText')}</p>
      </ul>
      <p className="mb-4">{translation('CommunityPage-Text_p4')}</p>
    </Row>
    <LinkArrow href={Constants.Routes.Team} variant="primary">
      {translation('HomePage-MentorsSection-Title')}
    </LinkArrow>
  </Container>
);

const CommunityFormSection = ({ translation }) => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{translation('CommunityPage-CommunityForm-Title')}</h2>
      <p className="mb-4">{translation('CommunityPage-CommunityForm-Subtitle')}</p>
    </Row>
    <Row>
      <CommunityForm translation={translation} />
    </Row>
  </Container>
);

// const MentorsSection = ({ translation }) => {
//   const mentorsTeam = team.filter((x) => x.roles.includes("mentor"));

//   return (
//    <Container className={"mt-5 padding-top-bottom-medium"}>
//      <Row>
//       <h2 className="mb-2">{translation("Title.GetToKnowOurMentors)}</h2>
//       <p className="mb-4">{translation("Subtitle.GetToKnowOurMentors)}</p>
//      </Row>
//      <Row className={"mt-4"} xs={1} md={1} lg={4}>
//        {mentorsTeam.map((item, key) => (
//          <Col className={"mt-4"}>
//            <PersonCard key={key} person={item} />
//          </Col>
//        ))}
//      </Row>
//    </Container>
//   );
// };

const Community = ({ translation }) => {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('CommunityPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('CommunityPage-PageName')}
      description={translation('CommunityPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md">
        <Row>
          <Col>
            <CommunityInfoSection translation={translation} />
          </Col>
          <Col>
            <CommunityFormSection translation={translation} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Community;
