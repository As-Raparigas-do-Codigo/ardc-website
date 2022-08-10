import React from 'react';
import PersonCard from 'components/PersonCard';
import { Row, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './mentors-section.scss';
import team from 'data/team';

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
  const mentorsCards = team
    .filter((x) => x.roles.includes('mentor'))
    .slice(0, 8)
    .map((item) => <PersonCard key={item.id} person={item} />)
    .sort((a, b) => {
      return a.id - b.id;
    });

  return (
    <Container className="mt-5 pt-md-5 pb-5">
      <Row>
        <h2 className="mb-2">Conhece os nossos mentores.</h2>
        <p className="mb-5">
          A nossa equipa é formada por pessoas provenientes de diversas áreas profissionais.
          <br />
          Da engenharia ao design, das ciências ao marketing, a trabalhar juntos por um futuro mais
          inclusivo.
        </p>
      </Row>

      <Row>
        <Carousel
          autoPlay={false}
          showDots
          arrows={false}
          responsive={responsive}
          renderDotsOutside
          renderButtonGroupOutside
          dotListClass="custom-dots"
          itemClass="card-item"
          // customButtonGroup={<CustomButtonGroupAsArrows />}
          infinite={false}>
          {mentorsCards}
        </Carousel>
      </Row>
    </Container>
  );
}

// const CustomDot = ({ onClick, active, index, carouselState }) => {
//   const { currentSlide } = carouselState;
//   return (
//     <li style={{ background: active ? "grey" : "initial" }}>
//       <button
//         style={{ background: active ? "grey" : "initial" }}
//         onClick={() => onClick()}
//       />
//     </li>
//   );
// };

// const CustomButtonGroupAsArrows = ({ next, previous }) => {
//   return (
//     <div>
//       <div
//         style={{
//           textAlign: "center",
//         }}>
//         <button onClick={previous}>{"<"}</button>
//       </div>
//       <div
//         style={{
//           textAlign: "center",
//         }}>
//         <button onClick={next}>{">"}</button>
//       </div>
//     </div>
//   );
// };

export default MentorsSection;
