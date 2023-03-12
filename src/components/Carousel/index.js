import React from 'react';
import { ReactComponent as GreenArrow } from 'assets/icons/green-arrow.svg';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel-section.scss';

function Carousel({
  items,
  desktop = 4,
  tablet = 2,
  mobile = 1,
  autoSpeed = 9000000,
  autoPlay = false,
  infinite = false
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: tablet,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: mobile,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <MultiCarousel
      swipeable
      draggable
      autoPlaySpeed={autoSpeed}
      showDots
      arrows
      autoPlay={autoPlay}
      infinite={infinite}
      transitionDuration={10000}
      responsive={responsive}
      renderDotsOutside
      dotListClass="custom-dots"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}>
      {items}
    </MultiCarousel>
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

export default Carousel;
