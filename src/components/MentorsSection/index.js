import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import LinkArrow from 'components/LinkArrow';
import Carousel from 'components/Carousel';
import Constants from 'constants';
import TeamData from 'data/team';
import { shuffle, sortById } from 'utils';

function MentorsSection({ translation }) {
  const mentorsCards = shuffle(TeamData.filter((x) => x.roles.includes('mentor')))
    .slice(0, 10)
    .map((item) => <PersonCard key={item.id} person={item} />)
    .sort(sortById);

  return (
    <Container className="mt-5 pt-md-5 pb-5">
      <Row>
        <h2 className="mb-2">{translation('HomePage-MentorsSection-Title')}</h2>
      </Row>
      <Row>
        <Col>
          <p className="mb-5">{translation('HomePage-MentorsSection-Text')}</p>
        </Col>
        <Col className="d-flex justify-content-end align-items-end fw-bold">
          <div>
            <LinkArrow href={Constants.Routes.Team} sameWindow>
              {translation('HomePage-MentorsSection-AllMentorsLabel')}
            </LinkArrow>
          </div>
        </Col>
      </Row>

      <Row>
        <Carousel items={mentorsCards} autoPlay infinite />
      </Row>
    </Container>
  );
}

export default MentorsSection;
