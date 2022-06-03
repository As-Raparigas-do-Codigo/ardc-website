import HorizontalCard from "../HorizontalCard";
import { Row, Col, Container } from "react-bootstrap";
import workshops from "../../data/workshops";
import LinkArrow from "components/LinkArrow";
import Constants from "Constants";

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
    <Container className="mt-5 py-md-5">
      <h2 className="mb-2">{props.heading}</h2>
      <Row className="pb-3 mb-md-2">
        <Col>
          <p className="">{props.subtitle}</p>
        </Col>
        <Col className="col-auto align-self-end">
          <LinkArrow href={Constants.WorkshopsRoute}>Ver todos os workshops</LinkArrow>
        </Col>
      </Row>
      <Row>{articlesArray}</Row>
    </Container>
  );
}

export default WorkshopsSection;
