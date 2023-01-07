import React from 'react';
import MentorshipForm from 'components/Forms/MentorshipForm';
import { Container, Col, Row } from 'react-bootstrap';
import Constants from 'constants';
import PageLayout from 'components/PageLayout';

import LinkArrow from 'components/LinkArrow';

const MentorshipInfoSection = ({ translation }) => (
  <Container className="my-5 py-5 padding-top-first-section">
    <Row>
      <h6 className="mb-2">{translation('MentorshipsPage-Title')}</h6>
      <h2 className="mb-2">{translation('MentorshipsPage-Subtitle')}</h2>
      <p className="mb-4">{translation('MentorshipsPage-Text_p1')}</p>
      <p className="mb-4">{translation('MentorshipsPage-Text_p2')}</p>
      <p className="mb-4">{translation('MentorshipsPage-Text_p3')}</p>
    </Row>
    <Row>
      <ul className="mx-4">
        <li className="mb-2">{translation('MentorshipsPage-IndividualMentorshipTitle')}</li>
        <p className="my-3">{translation('MentorshipsPage-IndividualMentorshipText')}</p>
        <li className="mb-2">{translation('MentorshipsPage-GroupMentorshipTitle')}</li>
        <p className="my-3">{translation('MentorshipsPage-GroupMentorshipText')}</p>
      </ul>
    </Row>
    <LinkArrow href={Constants.Routes.Team} variant="primary">
      {translation('HomePage-MentorsSection-Title')}
    </LinkArrow>
  </Container>
);

const MentorshipFormSection = ({ translation }) => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{translation('MentorshipsPage-MentorshipForm-Title')}</h2>
      <p className="mb-4">{translation('MentorshipsPage-MentorshipForm-Subtitle')}</p>
    </Row>
    <Row>
      <MentorshipForm translation={translation} />
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

const Mentorship = ({ translation }) => {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('MentorshipsPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('MentorshipsPage-PageName')}
      description={translation('MentorshipsPage-Description')}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md">
        <Row>
          <Col>
            <MentorshipInfoSection translation={translation} />
          </Col>
          <Col>
            <MentorshipFormSection translation={translation} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Mentorship;
