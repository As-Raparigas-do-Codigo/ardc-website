import BasicCard from "../../../Cards/Basic";
import events from "../../../../data/events";
import { Row, Col, Container } from "react-bootstrap";

function EventsSection() {
  const eventsArray = events.map((item) => (
    <Col lg={4} md={6} sm={12} key={item.id}>
      <BasicCard
        alt={item.alt}
        description={item.description}
        imgPath={item.image}
        link={item.link}
        title={item.title}
        url={item.url}
      />
    </Col>
  ));
  return (
    <Container className="padding-top-bottom-medium">
      <Row>
        <h2 className="mb-2">Talks & Eventos</h2>
        <p className="mb-5">
          Placeholder de texto para descrição, lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </Row>
      <Row>{eventsArray}</Row>
    </Container>
  );
}

export default EventsSection;
