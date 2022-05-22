import HorizontalCard from "../HorizontalCard";

import { Row, Col, Container } from "react-bootstrap";
import workshops from "../../data/workshops";

const articlesArray = workshops.map((item) => (
  <Col lg={12} md={12} sm={12} key={item.id}>
    <HorizontalCard
      alt={item.alt}
      date={item.date}
      description={item.description}
      imgPath={item.image}
      buttonUrl={item.buttonUrl}
      buttonLabel={item.buttonLabel}
      linkUrl={item.linkUrl}
      linkLabel={item.linkLabel}
      duration={item.duration}
      title={item.title}
    />
  </Col>
));

function WorkshopsSection(props) {
  return (
    <Container className="padding-top-bottom-medium">
      <Row>
        <h2 className="mb-2">{props.heading}</h2>
        <p className="mb-5">{props.subtitle}</p>
      </Row>
      <Row>{articlesArray}</Row>
    </Container>
  );
}

export default WorkshopsSection;
