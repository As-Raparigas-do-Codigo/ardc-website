import React from "react";
import { Row, Container } from "react-bootstrap";

const createMarkup = function(textHtml) {
    return {__html: textHtml};
}

function NumberedRow(props) {
  return (
    <Row className="px-5 mx-5" id={props.number}>
        <Container className="my-5 py-5 px-5">
            <h1 className="mb-2">{props.number}</h1>
            <h4 className="mb-2">{props.title}</h4>
            <p dangerouslySetInnerHTML={createMarkup(props.textHtml)}/>
            <hr></hr>
        </Container>
    </Row>
  );
}

export default NumberedRow;
