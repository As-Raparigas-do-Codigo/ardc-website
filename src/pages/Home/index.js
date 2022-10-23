import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Routes } from 'Constants';
import { SiteContent } from 'data/SiteContent';
import BasicCardsRow from 'components/BasicCardsRow';
import LinkButton from 'components/LinkButton';
import LinkArrow from 'components/LinkArrow';
import MentorsSection from 'components/MentorsSection';
import SponsorSection from 'components/SponsorSection';
import WorkshopsSection from 'components/WorkshopsSection';
import KPISSection from 'components/KPISSection';
import PageLayout from 'components/PageLayout';
import banner from 'assets/home/banner.jpeg';
import missao from 'assets/home/missao.png';
import Events from '../../data/Events';
import pdf from '../../assets/Booklet_ARDC_2022.pdf'

const IntroContent = () => {
  return (
    <>
      <Col className="my-4 align-self-center">
        <h1 className="py-1">{SiteContent.HomePage.IntroSection.Title}</h1>
        <p className="py-1">{SiteContent.HomePage.IntroSection.Description}</p>
        <Container className="p-0">
          <Row>
            <Col className="col-auto align-self-center">
              <LinkButton href={Routes.Workshops} variant="primary">
                {SiteContent.HomePage.IntroSection.PrimaryButton}
              </LinkButton>
            </Col>
            <Col className="col-auto align-self-center">
              <LinkArrow href={pdf} download>
                {SiteContent.HomePage.IntroSection.SecondaryButton}
              </LinkArrow>
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

      <div className="zig-zag"></div>

      <WorkshopsSection
        heading={SiteContent.HomePage.WorkshopsSection.Title}
        subtitle={SiteContent.WorkshopsPage.Description}
      />

      <div className="zig-zag"></div>

      <div className="gradient">
        <Container className="py-md-5">
          <Row>
            <Col className="my-4">
              <h6 className="py-5">{SiteContent.HomePage.MissionSection.Title}</h6>
              <p className="py-1">{SiteContent.HomePage.MissionSection.Text_p1}</p>
              <p className="py-1">{SiteContent.HomePage.MissionSection.Text_p2}</p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href={Routes.About} variant="primary">
                    {SiteContent.HomePage.MissionSection.Button}
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
      <BasicCardsRow data={Events} heading={SiteContent.HomePage.TalksSection.Title} subtitle="" />

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