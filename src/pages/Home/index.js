import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// components
import LinkArrow from "components/LinkArrow";
import BasicCardsRow from "components/BasicCardsRow";
import LinkButton from "components/LinkButton";
import MentorsSection from "components/MentorsSection";
import SponsorSection from "components/SponsorSection";
import WorkshopsSection from "components/WorkshopsSection";
import PageLayout from "components/PageLayout";
// images
import banner from "assets/home/banner.jpeg";
import missao from "assets/home/missao.png";
// data
// TODO: retirar comentário após MVP
//import articles from "../../data/articles";
import events from "../../data/events";

const IntroContent = () => {
  return (
    <>
      <Col className="my-4 align-self-center">
        <h1 className="py-1">Somos As Raparigas do Código</h1>
        <p className="py-1">
          Uma comunidade jovem focada em promover a inclusão digital através da
          realização de atividades associadas ao ensino da programação para
          raparigas e mulheres.
        </p>
        <Container className="p-0">
          <Row>
            <Col className="col-auto align-self-center">
              <LinkButton href="/workshops" variant="primary">
                Conhece os nossos workshops
              </LinkButton>
            </Col>
            <Col className="col-auto align-self-center">
              <LinkArrow href="/colaborar">Quero colaborar!</LinkArrow>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col className="my-4 col-auto">
        <img
          src={banner}
          className="box-border box-radius horizontal-card__img shadow"
          alt="As raparigas do código"
        />
      </Col>
    </>
  );
};

function Home() {
  return (
    <PageLayout title="Home" customBanner={<IntroContent />}>
      <SponsorSection />

      <hr />

      <WorkshopsSection
        heading={"Os nossos workshops"}
        subtitle={
          "Oferecemos vários cursos e workshops, totalmente gratuitos e adaptados às necessidades e interesses das alunas inscritas."
        }
      />

      <div className="zig-zag"></div>

      <div className="gradient">
        <Container className="py-md-5">
          <Row>
            <Col className="my-4">
              <h6 className="py-5">A NOSSA MISSÃO</h6>
              <p className="py-1">
                E encorajando mais raparigas e mulheres a ingressar no sector
                das tecnologias de informação.
              </p>
              <p className="py-1">
                Temos como objetivo a criação de oportunidades de aprendizagem
                para jovens raparigas e mulheres, fomentando um ambiente
                inclusivo e de colaboração, e estimulando o interesse pela
                aquisição de competências digitais, nomeadamente a programação.
              </p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href="/sobre" variant="primary">
                      Sabe mais sobre nós
                    </LinkButton>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="my-4 col-auto">
              <img
                src={missao}
                className="box-border box-radius horizontal-card__img shadow"
                alt="As raparigas do código"
              />
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container className="py-5 px-2">
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
      </div>
      <div className="bg-blue">
        <Container className="py-5">
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className="d-grid gap-4">
                <h6 className="text-center">JUNTA-TE À NOSSA COMUNIDADE!</h6>
                <h2 className="text-center">Gostavas de colaborar connosco?</h2>
                <p className="text-center">
                  Se gostas de ensinar, de escrever e produzir conteúdo digital,
                  ou estás sempre a par das últimas novidades no mundo da
                  tecnologia, gostávamos muito de poder contar contigo!
                </p>
                <div className="text-center">
                  <LinkButton href="/colaborar" variant="primary">
                    Quero colaborar!
                  </LinkButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="zig-zag"></div>

      <BasicCardsRow
        data={events}
        heading={"Talks & Eventos"}
        subtitle={
          "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />

      <div className="bg-blue">
        <div className="zig-zag"></div>
        <div className="pt-2">
          <MentorsSection />
        </div>
      </div>
    </PageLayout>
  );
  // TODO: retirar comentário após MVP
  //<div className="zig-zag"></div>
  //<BasicCardsRow
  //data={articles}
  //heading={"Artigos recentes"}
  //subtitle={
  //"Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
  //}
  ///>
}

export default Home;
