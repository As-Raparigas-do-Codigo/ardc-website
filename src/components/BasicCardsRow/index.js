import BasicCard from "../BasicCard";

import { Row, Col, Container } from "react-bootstrap";

function BasicCardsRow(props) {
  const articlesArray = props.data.map((item) => (
    <Col lg={4} md={6} sm={12} key={item.id}>
      <BasicCard
        alt={item.alt}
        date={item.date}
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
        <h2 className="mb-2">{props.heading}</h2>
        <p className="mb-5">{props.subtitle}</p>
      </Row>
      <Row>{articlesArray}</Row>
    </Container>
  );
}

export default BasicCardsRow;
