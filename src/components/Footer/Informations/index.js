import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Constants, Routes, SiteContent } from 'Constants';
import LinkButton from 'components/LinkButton';
import SocialLinks from 'components/SocialLinks';
import Icon from 'components/Icon';
import '../footer.scss';

const Informations = () => {
  return (
    <Container className="info padding-top-bottom-medium align-center">
      <Row>
        <Col>
          <img className="rounded mx-auto d-block" alt="" src={require('assets/award-logo.png')} />
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
              <LinkButton href="https://www.youtube.com/watch?v=5ku99qSbZOI" target="blank">
                Ver o vídeo no Youtube
              </LinkButton>
            </p>
          </Row>
        </Col>
      </Row>
      <hr className={'mt-5'} />
      <Row className={'mt-5'}>
        <Col sm={12} md={6}>
          <h4>{SiteContent.Title.RdC}</h4>
          <p className={'w-75'}>{SiteContent.Text.WhoWeAre}</p>
          <p>
            <Icon name={'email'} link={'#'} />
            <a href="mailto:asraparigasdocodigo@gmail.com">{Constants.Email}</a>
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>O Projecto</h4>
              <ul>
                <li>
                  <a href={Routes.About}> {SiteContent.Title.AboutUs}</a>
                </li>
                <li>
                  <a href={Routes.Collaborate}> {SiteContent.Title.IWantToCollaborate}</a>
                </li>
                {/* TODO: retirar comentário depois do MVP
                  <li>
                  <a href={ Routes.Blog }> { SiteContent.Title.Blog }</a>
                  </li>
                  */}
                <li>
                  <a href={Routes.Contacts}> {SiteContent.Title.Contacts}</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>{SiteContent.Title.Events}</h4>
              <ul>
                <li>
                  <a href={Routes.Workshops}> {SiteContent.Title.Workshops}</a>
                </li>
                <li>
                  <a href={Routes.Mentorships}> {SiteContent.Title.Mentorships}</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={'mt-5'}>
        <div className={'mt-5 centering-col'}>
          <SocialLinks />
        </div>
      </Row>
      <hr className={'mt-5'} />
      <Row className={'legal-copy'}>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">
            <a href={Routes.TermsOfUsePolicy}>{SiteContent.Title.TermsOfUsePolicy}</a> |{' '}
            <a href={Routes.PrivacyPolicy}>{SiteContent.Title.PrivacyPolicy}</a>
          </p>
        </Col>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">{SiteContent.Text.Copyright}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Informations;
