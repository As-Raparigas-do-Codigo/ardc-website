import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const createMarkup = function (textHtml) {
  return { __html: textHtml };
};

function NumberedRow(props) {
  return (
    <Row id={props.number}>
      <Container className="my-3">
        <Row>
          <Col lg="auto" md="auto" sm="auto" className="align-top">
            <div className="fs-xxl">{props.number}</div>
          </Col>
          <Col className="px-3">
            <h4 className="mb-2">{props.title}</h4>
            <p dangerouslySetInnerHTML={createMarkup(props.textHtml)} />
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </Row>
  );
}

export default NumberedRow;
