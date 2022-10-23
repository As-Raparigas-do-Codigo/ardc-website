import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Routes, SiteContent } from 'Constants';
import BasicCardsRow from 'components/BasicCardsRow';
import LinkButton from 'components/LinkButton';
import MentorsSection from 'components/MentorsSection';
import SponsorSection from 'components/SponsorSection';
import WorkshopsSection from 'components/WorkshopsSection';
import KPISSection from 'components/KPISSection';
import PageLayout from 'components/PageLayout';
import banner from 'assets/home/banner.jpeg';
import missao from 'assets/home/missao.png';
import events from '../../data/events';
// data
// TODO: retirar comentário após MVP
//import articles from "../../data/articles";

const IntroContent = () => {
  return (
    <>
      <Col className="my-4 align-self-center">
        <h1 className="py-1">{SiteContent.Title.WeAreRdC}</h1>
        <p className="py-1">{SiteContent.Text.WhoWeAre}</p>
        <Container className="p-0">
          <Row>
            <Col className="col-auto align-self-center">
              <LinkButton href={Routes.Workshops} variant="primary">
                Conhece os nossos workshops
              </LinkButton>
            </Col>
            {/*
            <Col className="col-auto align-self-center">
              <LinkArrow href={Routes.Collaborate}>
                {SiteContent.Title.IWantToCollaborate}
              </LinkArrow>
            </Col>
            */
            }
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

      <div className="zig-zag"></div>

      <WorkshopsSection
        heading={SiteContent.Title.OurWorkshops}
        subtitle={SiteContent.Subtitle.Workshops}
      />

      <div className="zig-zag"></div>

      <div className="gradient">
        <Container className="py-md-5">
          <Row>
            <Col className="my-4">
              <h6 className="py-5">A NOSSA MISSÃO</h6>
              <p className="py-1">{SiteContent.Text.OurMission_p1}</p>
              <p className="py-1">{SiteContent.Text.OurMission_p2}</p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href={Routes.About} variant="primary">
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
        <KPISSection />
      </div>
      { /*
      <div className="bg-blue">
        <Container className="py-5">
          <Row>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className="d-grid gap-4">
                <h6 className="text-center">JUNTA-TE À NOSSA COMUNIDADE!</h6>
                <h2 className="text-center">Gostavas de colaborar connosco?</h2>
                <p className="text-center">
                  Se gostas de ensinar, de escrever e produzir conteúdo digital, ou estás sempre a
                  par das últimas novidades no mundo da tecnologia, gostávamos muito de poder contar
                  contigo!
                </p>
                <div className="text-center">
                  <LinkButton href={Routes.Collaborate} variant="primary">
                    Quero colaborar!
                  </LinkButton>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      */ }
      <div className="zig-zag"></div>
      <BasicCardsRow data={events} heading={'Talks & Eventos'} subtitle="" />

      {/* TODO: mudar para className="gradient" depois do MVP */}
      <div className="bg-blue">
        <div className="zig-zag"></div>
        <div className="pt-2">
          <MentorsSection />
        </div>
      </div>
      {/* TODO: retirar comentário após MVP
        <div className="zig-zag"></div>
        <BasicCardsRow 
          data={articles}
          heading={"Artigos recentes"}
          subtitle={ "Placeholder de texto para descrição, lorem ipsum dolor sit amet, consectetur adipiscing elit." }
        />
        */}
    </PageLayout>
  );
}

export default Home;