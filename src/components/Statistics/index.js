import React from "react";
import { Col, Row } from "react-bootstrap";
import "./statistics.scss";

const Statistics = () => (
  <Row className="statistics">
    <Col className="px-5 my-2">
      <h1 className="text-center fs-x5 fw-bold mb-1">67</h1>
      <p className="text-center mb-0">Workshops realizados</p>
    </Col>
    <Col className="px-5 my-2">
      <h1 className="text-center fs-x5 fw-bold mb-1">25</h1>
      <p className="text-center mb-0">Professores & Mentores</p>
    </Col>
    <Col className="px-5 my-2">
      <h1 className="text-center fs-x5 fw-bold mb-1">400</h1>
      <p className="text-center mb-0">Alunas inscritas</p>
    </Col>
  </Row>
);

export default Statistics;
