import React from "react"
import { Col, Container, Row } from "react-bootstrap";

const KPISSection =  () => {
  return ( <Container className="py-5 px-2">
          <Row>
            <Col className="px-5 my-2">
              <h1 className="text-center fs-x5 fw-bold mb-1">123+</h1>
              <p className="text-center">Workshops realizados</p>
            </Col>
            <Col className="px-5 my-2">
              <h1 className="text-center fs-x5 fw-bold mb-1">45+</h1>
              <p className="text-center">Professores & Mentores</p>
            </Col>
            <Col className="px-5 my-2">
              <h1 className="text-center fs-x5 fw-bold mb-1">678</h1>
              <p className="text-center">Alunas inscritas</p>
            </Col>
          </Row>
        </Container>
  )
}

export default KPISSection