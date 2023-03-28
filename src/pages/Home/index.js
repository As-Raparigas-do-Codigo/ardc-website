import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Constants from 'constants';
import EventsSection from 'components/EventsSection';
import LinkButton from 'components/LinkButton';
import LinkArrow from 'components/LinkArrow';
import MentorsSection from 'components/MentorsSection';
import SponsorSection from 'components/SponsorSection';
import KPISSection from 'components/KPISSection';
import PageLayout from 'components/PageLayout';
import banner from 'assets/home/banner.jpeg';
import missao from 'assets/home/missao2.png';
import pdf from '../../assets/Booklet_ARDC_2022.pdf';
import FeatureFlag from 'components/FeatureFlag';

import './home.scss';

const IntroContent = ({ translation }) => {
  return (
    <>
      <Col id="home-title" className="my-4 align-self-center">
        <h1 className="py-1">{translation('HomePage-IntroSection-Title')}</h1>
        <p className="py-1">{translation('HomePage-IntroSection-Description')}</p>
        <Container className="p-0">
          <Row>
            <Col className="col-auto align-self-center">
              <LinkButton href={Constants.Routes.Community} variant="primary">
                {translation('HomePage-IntroSection-PrimaryButton')}
              </LinkButton>
            </Col>
            <Col className="col-auto align-self-center">
              <LinkArrow href={pdf} download>
                {translation('HomePage-IntroSection-SecondaryButton')}
              </LinkArrow>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col className="my-4 col-auto">
        <img
          src={banner}
          className="box-border box-radius horizontal-card__img shadow"
          alt={translation('RdCLabel')}
        />
      </Col>
    </>
  );
};

function Home({ translation }) {
  return (
    <PageLayout title="Home" customBanner={<IntroContent translation={translation} />}>
      <SponsorSection />
      <div className="zig-zag"></div>

      {/* <WorkshopsSection
        heading={translation('HomePage-WorkshopsSection-Title')}
        subtitle={translation('WorkshopsPage-Description')}
        translation={translation}
      /> */}

      <div className="zig-zag"></div>
      <div className="gradient">
        <Container className="py-md-5">
          <Row>
            <Col className="my-4">
              <h6 className="pt-5">{translation('HomePage-MissionSection-Title')}</h6>
              <p className="py-1">{translation('HomePage-MissionSection-Text_p1')}</p>
              <p className="py-1">{translation('HomePage-MissionSection-Text_p2')}</p>
              <Container className="p-0">
                <Row>
                  <Col className="col-auto align-self-center">
                    <LinkButton href={Constants.Routes.About} variant="primary">
                      {translation('HomePage-MissionSection-Button')}
                    </LinkButton>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="my-4 col-auto">
              <img
                src={missao}
                id={'img-missao'}
                className="box-border box-radius horizontal-card__img shadow"
                alt="As raparigas do código"
              />
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <KPISSection translation={translation} />
      </div>
      <FeatureFlag name="show_colaboration">
        <div className="bg-blue">
          <Container className="py-5">
            <Row>
              <Col xs={12} md={8} lg={6} className="mx-auto">
                <div className="d-grid gap-4">
                  <h6 className="text-center">JUNTA-TE À NOSSA COMUNIDADE!</h6>
                  <h2 className="text-center">Gostavas de colaborar connosco?</h2>
                  <p className="text-center">
                    Se gostas de ensinar, de escrever e produzir conteúdo digital, ou estás sempre a
                    par das últimas novidades no mundo da tecnologia, gostávamos muito de poder
                    contar contigo!
                  </p>
                  <div className="text-center">
                    <LinkButton href={Constants.Routes.Collaborate} variant="primary">
                      Quero colaborar!
                    </LinkButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </FeatureFlag>
      <div className="zig-zag"></div>

      <EventsSection translation={translation} />

      {/* TODO: mudar para className="gradient" depois do MVP */}
      <div className="bg-blue">
        <div className="zig-zag"></div>
        <div className="pt-2">
          <MentorsSection translation={translation} />
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
