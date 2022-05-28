import React from "react";

// data
import articles from "../../data/articles";
import events from "../../data/events";

// Components
import BasicCardsRow from "components/BasicCardsRow";
import SponsorSection from "components/SponsorSection";
import WorkshopsSection from "components/WorkshopsSection";
import MentorsSection from "components/MentorsSection";
import Button from "components/Button";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/home/home_page_photo.png";

function Home() {
  return (
    <div className="home">
      <div className="gradient">
        <Container style={{paddingTop:100}}>
          <Row>
            <Col xs={12} md={6}>
              <h1>Somos As Raparigas do Código</h1>
              <p style={{paddingTop:30}}>Uma comunidade jovem focada em promover a inclusão digital através da realização de atividades associadas ao ensino da programação para raparigas e mulheres.</p>
              <Button style={{paddingTop:30}} href={'/workshops'} btnClass="button-primary">Conhece os nossos workshops</Button>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 30 }}>
              <img src={logo} style={{height:470, borderColor:'white', backgroundColor:'white', borderRadius:15, padding:6, marginBottom:90}} className="horizontal-card__img" alt=''/>
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
        <h2>
          Queremos desmistificar o papel da mulher na tecnologia. --do be done
        </h2>
      </div>

      <div className="bg-blue">
        <h2>Gostavas de colaborar connosco-- to be done</h2>
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
