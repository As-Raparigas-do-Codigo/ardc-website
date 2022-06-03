import React from "react";

import { Row, Container, Col } from "react-bootstrap";
import LinkButton from "components/LinkButton";

import SocialLinks from "components/SocialLinks";
import Icon from "components/Icon";

import "../footer.scss";

const Informations = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // const handleResize = () => {
  //   if (window.outerWidth <= 820) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <Container className="padding-top-bottom-medium align-center">
      <Row>
        <Col>
          <img
            className="rounded mx-auto d-block"
            alt=""
            src={require("assets/award-logo.png")}
          />
        </Col>
        <Col>
          <Row>
            <p className="text-secondary-color text-700-weight">AWARDS</p>
          </Row>
          <Row>
            <h4>Portuguese Women in Tech Awards 2021</h4>
          </Row>
          <Row>
            <p>Best Digital Inclusion Project started by a Woman.</p>
          </Row>
          <Row>
            <p>
              <LinkButton
                href="https://www.youtube.com/watch?v=5ku99qSbZOI"
                target="blank">
                Ver o vídeo no Youtube
              </LinkButton>
            </p>
          </Row>
        </Col>
      </Row>
      <hr className={"mt-5"} />
      <Row className={"mt-5"}>
        <Col sm={12} md={6}>
          <h4>As Raparigas do Código</h4>
          <p className={"w-75"}>
            Uma comunidade jovem focada em promover a inclusão digital através
            da realização de atividades associadas ao ensino da programação para
            raparigas em idade escolar (ensino básico, secundário e superior).{" "}
          </p>
          <p>
            <Icon name={"email"} link={"#"} />
            <a href="mailto:asraparigasdocodigo@gmail.com">
              asraparigasdocodigo@gmail.com
            </a>
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6} className={"mt-3"}>
              <h4>O Projecto</h4>
              <ul>
                <li>
                  <a href="/about"> Sobre nós</a>
                </li>
                <li>
                  <a href="/colaborar"> Quero Colaborar!</a>
                </li>
                <li>
                  <a href="/blog"> Blog</a>
                </li>
                <li>
                  <a href="/contactos"> Contactos</a>
                </li>
                {/* <li>
                  <a href="#"> FAQs</a>
                </li> */}
              </ul>
            </Col>
            <Col sm={12} md={6} className={"mt-3"}>
              <h4>Eventos</h4>
              <ul>
                <li>
                  <a href="/workshops"> Workshops</a>
                </li>
                <li>
                  <a href="/mentorias"> Mentorias</a>
                </li>
                <li>
                  <a href="/eventos"> Eventos</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={"mt-5"}>
        <div className={"mt-5 centering-col"}>
          <SocialLinks />
        </div>
      </Row>
      <hr className={"mt-5"} />
      <Row className={"legal-copy"}>
        <Col sm={12} md={6} className={"mt-5"}>
          <p className="text-center">
            <a href="/">Informação Legal</a> |{" "}
            <a href="/">Politica de Privacidade</a>
          </p>
        </Col>
        <Col sm={12} md={6} className={"mt-5"}>
          <p className="text-center">
            Copyright © 2022 As Raparigas do Código. All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Informations;
