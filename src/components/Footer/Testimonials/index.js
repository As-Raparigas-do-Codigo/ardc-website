import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../footer.scss';
import testimonials from 'data/testimonials';

const Testimonials = () => {
  return (
    <Row className="testimonials">
      {testimonials.map((testimonial) => {
        return (
          <Col sm={12} md={6} className={'mt-5'} key={testimonial.id}>
            <TestimonialCard
              key={testimonial.id}
              description={testimonial.text}
              name={testimonial.name}
              avatar={testimonial.avatar}
            />
          </Col>
        );
      })}
    </Row>
  );
};

const TestimonialCard = ({ description, name, avatar }) => {
  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <div className={'card-text'}> {description}</div>

        <Row className={'card-author'}>
          <Col xs={2} md={2}>
            <img src={require('assets/team/' + avatar)} className="card-img" alt={'a person'} />
          </Col>
          <Col xs={10} md={10}>
            <h5>{name}</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
