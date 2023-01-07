import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Constants from 'constants';
import LinkButton from 'components/LinkButton';
import SocialLinks from 'components/SocialLinks';
import Icon from 'components/Icon';
import '../footer.scss';
import FeatureFlag from 'components/FeatureFlag';

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
          <h4>{Constants.Content.Title.RdC}</h4>
          <p className={'w-75'}>{Constants.Content.Text.WhoWeAre}</p>
          <p>
            <Icon name={'email'} link={'#'} />
            <a href={`mailto:${Constants.Content.Contacts.Email}`}>
              {Constants.Content.Contacts.Email}
            </a>
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>O Projecto</h4>
              <ul>
                <li>
                  <a href={Constants.Routes.About}> {Constants.Content.Title.AboutUs}</a>
                </li>
                <FeatureFlag name="show_colaboration">
                  <li>
                    <a href={Constants.Routes.Collaborate}>
                      {Constants.Content.Title.IWantToCollaborate}
                    </a>
                  </li>
                </FeatureFlag>

                {/* TODO: retirar comentário depois do MVP
                  <li>
                  <a href={ Constants.Routes.Blog }> { Constants.Content.Title.Blog }</a>
                  </li>
                  */}
                <li>
                  <a href={Constants.Routes.Contacts}> {Constants.Content.Title.Contacts}</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>{Constants.Content.Title.Events}</h4>
              <ul>
                <li>
                  <a href={Constants.Routes.Workshops}> {Constants.Content.Title.Workshops}</a>
                </li>
                <li>
                  <a href={Constants.Routes.Events} style={{ display: 'none' }}>
                    {Constants.Content.Title.Events}
                  </a>
                  <a href={Constants.Routes.Mentorships}> {Constants.Content.Title.Mentorships}</a>
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
            {/* <a href={Constants.Routes.TermsOfUsePolicy}>{Constants.Content.Title.TermsOfUsePolicy}</a> |{' '} */}
            <a href={Constants.Routes.PrivacyPolicy}>{Constants.Content.Title.PrivacyPolicy}</a>
          </p>
        </Col>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">{Constants.Content.Text.Copyright}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Informations;
