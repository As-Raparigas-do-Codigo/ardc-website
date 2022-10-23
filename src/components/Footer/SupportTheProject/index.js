import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
import '../footer.scss';
import testimonials from 'data/Testimonials';
import { SiteContent } from 'data/SiteContent';

const SupportTheProject = () => {
  return (
    <Container className="padding-top-bottom-medium">
      <Row>
        <Col>
          <p className="text-secondary-color text-700-weight">
            {SiteContent.SupportTheProject.Title}
          </p>
        </Col>
      </Row>
      <Row>
        <h2>{SiteContent.SupportTheProject.Subtitle}</h2>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p>
            {SiteContent.SupportTheProject.Text}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <LinkButton href="#">
            {SiteContent.SupportTheProject.Button}
          </LinkButton>
        </Col>
      </Row>
      <Row className="testimonials">
        {testimonials.map((testimonial, index) => {
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
    </Container>
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

export default SupportTheProject;
