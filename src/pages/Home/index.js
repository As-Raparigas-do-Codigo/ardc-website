import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// components
import LinkArrow from "components/LinkArrow";
import BasicCardsRow from "components/BasicCardsRow";
import LinkButton from "components/LinkButton";
import MentorsSection from "components/MentorsSection";
import SponsorSection from "components/SponsorSection";
import WorkshopsSection from "components/WorkshopsSection";
// images
import banner from "assets/home/banner.jpeg";
import missao from "assets/home/missao.png";
// data
import articles from "../../data/articles";
import events from "../../data/events";


function Home() {
  return (
    <div className="home">
      <div className="gradient">
        <Container className="py-5">
          <Row>
            <Col className="my-4 align-self-center">
              <h1 className="py-1">Somos As Raparigas do Código</h1>
              <p className="py-1">Uma comunidade jovem focada em promover a inclusão digital através da realização de atividades associadas ao ensino da programação para raparigas e mulheres.</p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href="/workshops" variant="primary">Conhece os nossos workshops</LinkButton>
                  </Col>
                  <Col className="col-auto align-self-center">
                    <LinkArrow href="/collaborate">Quero colaborar!</LinkArrow>                    
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="my-4 col-auto">
              <img src={banner} className="box-border box-radius horizontal-card__img shadow" alt='As raparigas do código' />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="zig-zag">
        <SponsorSection />
        <WorkshopsSection
          heading={"Os nossos workshops"}
          subtitle={
            "Oferecemos vários cursos e workshops, totalmente gratuitos e adaptados às necessidades e interesses das alunas inscritas."
          }
        />
      </div>

      <div className="gradient">
        <Container className="py-5">
          <Row>
            <Col className="my-4">
              <p>A NOSSA MISSÃO</p>
              <p className="py-1">E encorajando mais raparigas e mulheres a ingressar no sector das tecnologias de informação.</p>
              <p className="py-1">Temos como objetivo a criação de oportunidades de aprendizagem para jovens raparigas e mulheres, fomentando um ambiente inclusivo e de colaboração, e estimulando o interesse pela aquisição de competências digitais, nomeadamente a programação.</p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href="/about" variant="primary">Sabe mais sobre nós</LinkButton>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="my-4 col-auto">
              <img src={missao} className="box-border box-radius horizontal-card__img shadow" alt='As raparigas do código' />
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container className="py-5">
          <Row>
            <Col xs={4}>
              <h1 style={{fontSize: 82, textAlign: 'center' }}>123+</h1>
              <p style={{ textAlign: 'center' }}>Workshops realizados</p>
            </Col>
            <Col xs={4}>
              <h1 style={{fontSize: 82, textAlign: 'center' }}>45+</h1>
              <p style={{ textAlign: 'center' }}>Professores & Mentores</p>
            </Col>
            <Col xs={4}>
              <h1 style={{fontSize: 82, textAlign: 'center' }}>678</h1>
              <p style={{ textAlign: 'center' }}>Alunas inscritas</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-blue">
        <Container className="py-5">
          <Row>
            <Col xs={0} md={2} lg={3}></Col>
            <Col xs={12} md={8} lg={6}>
              <Row>
                <p style={{ textAlign: 'center' }}>JUNTA-TE À NOSSA COMUNIDADE!</p>
              </Row>
              <Row>
                <h2 style={{ textAlign: 'center' }}>Gostavas de colaborar connosco?</h2>
              </Row>
              <Row>
                <p style={{ textAlign: 'center' }}>Se gostas de ensinar, de escrever e produzir conteúdo digital, ou estás sempre a par das últimas novidades no mundo da tecnologia, gostávamos muito de poder contar contigo!</p>
              </Row>
              <Row>
                <LinkButton href="/collaborate" variant="primary">Quero colaborar!</LinkButton>
              </Row>
            </Col>
            <Col xs={0} md={2} lg={3}></Col>
          </Row>
        </Container>
      </div>
      <div className="zig-zag">
        <BasicCardsRow
          data={events}
          heading={"Talks & Eventos"}
          subtitle={
            "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
      <div className="gradient">
        <MentorsSection />
      </div>
      <div className="zig-zag">
        <BasicCardsRow
          data={articles}
          heading={"Artigos recentes"}
          subtitle={
            "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        />
      </div>
      <div className="bg-pink">
        <h2>Ajuda o projecto a crescer -- to be done</h2>
      </div>
    </div>
  );
}

export default Home;
