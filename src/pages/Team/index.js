import React from "react";
import PersonCard from "components/PersonCard";
import { Row, Col, Container } from "react-bootstrap";
import team from "data/team";

function Team() {
  const founderTeam = team.filter((x) => x.roles.includes("founder"));
  const adminTeam = team.filter(
    (x) => x.roles.includes("admin") && !x.roles.includes("founder")
  );
  const mentorsTeam = team.filter(
    (x) => x.roles.includes("mentor") && !x.roles.includes("admin")
  );

  return (
    <div>
      <div className="team gradient">
        <Container className="padding-top-bottom-medium">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Conhece a nossa equipa</h1>
              <p>BLA BLA </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="team">
        <Container className={"mt-5 padding-top-bottom-medium"}>
          <Row>
            <h2>Direção</h2>
          </Row>
          <Row className={"mt-4"} xs={1} md={4}>
            {founderTeam.map((item, key) => (
              <Col className={"mt-4"}>
                <PersonCard key={key} person={item} />
              </Col>
            ))}
          </Row>
          <Row className={"mt-5"}>
            <h2>Administração</h2>
          </Row>
          <Row className={"mt-4"} xs={2} md={4}>
            {adminTeam.map((item, key) => (
              <Col className={"mt-4"}>
                <PersonCard key={key} person={item} />
              </Col>
            ))}
          </Row>
          <Row className={"mt-5"}>
            <h2>Mentores</h2>
          </Row>
          <Row className={"mt-4 mb-5"} xs={2} md={4}>
            {mentorsTeam.map((item, key) => (
              <Col className={"mt-4"}>
                <PersonCard key={key} person={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Team;
