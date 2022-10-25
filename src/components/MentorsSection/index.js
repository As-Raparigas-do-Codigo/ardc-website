import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import PersonCard from 'components/PersonCard';
import LinkArrow from 'components/LinkArrow';
import { ReactComponent as GreenArrow } from 'assets/icons/green-arrow.svg';
import { Routes, SiteContent } from 'Constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './mentors-section.scss';
import team from 'data/team';
import { shuffle, sortById } from 'utils';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function MentorsSection() {
  const mentorsCards = shuffle(team.filter((x) => x.roles.includes('mentor')))
    .slice(0, 10)
    .map((item) => <PersonCard key={item.id} person={item} />)
    .sort(sortById);

  return (
    <Container className="mt-5 pt-md-5 pb-5">
      <Row>
        <h2 className="mb-2">Conhece os nossos mentores.</h2>
      </Row>
      <Row>
        <Col>
          <p className="mb-5">
            A nossa equipa é formada por pessoas provenientes de diversas áreas profissionais.
            <br />
            Da engenharia ao design, das ciências ao marketing, a trabalhar juntos por um futuro
            mais inclusivo.
          </p>
        </Col>
        <Col className="d-flex justify-content-end align-items-end fw-bold">
          <div className="mb-5">
            <LinkArrow href={Routes.Team}> {SiteContent.Text.AllMentorsLabel} </LinkArrow>
          </div>
        </Col>
      </Row>

      <Row>
        <Carousel
          autoPlaySpeed={9000000}
          showDots
          arrows
          responsive={responsive}
          renderDotsOutside
          dotListClass="custom-dots"
          itemClass="card-item"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}>
          {mentorsCards}
        </Carousel>
      </Row>
    </Container>
  );
}

const CustomLeftArrow = ({ onClick }) => (
  <span onClick={() => onClick()}>
    <div className="custom-arrow custom-arrow-left">
      <GreenArrow className="blue-arrow" />
    </div>
  </span>
);
const CustomRightArrow = ({ onClick }) => (
  <span onClick={() => onClick()}>
    <div className="custom-arrow custom-arrow-right">
      <GreenArrow className="blue-arrow" />
    </div>
  </span>
);

export default MentorsSection;
