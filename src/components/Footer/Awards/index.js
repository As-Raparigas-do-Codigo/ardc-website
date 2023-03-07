import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Constants from 'constants';
import LinkButton from 'components/LinkButton';
import SocialLinks from 'components/SocialLinks';
import Icon from 'components/Icon';
import FeatureFlag from 'components/FeatureFlag';
import '../footer.scss';

const Awards = ({ translation }) => {
  return (
    <Container className="info padding-top-bottom-medium align-center">
      <Row>
        <Col>
          <img className="rounded mx-auto d-block" alt="" src={require('assets/award-logo.png')} />
        </Col>
        <Col>
          <Row>
            <p className="text-secondary-color text-700-weight">
              {translation('Footer-AwardsSection-Title')}
            </p>
          </Row>
          <Row>
            <h4>{translation('Footer-AwardsSection-Subtitle')}</h4>
          </Row>
          <Row>
            <p>{translation('Footer-AwardsSection-Description')}</p>
          </Row>
          <Row>
            <p>
              <LinkButton href="https://www.youtube.com/watch?v=5ku99qSbZOI" target="blank">
                {translation('Footer-AwardsSection-Button')}
              </LinkButton>
            </p>
          </Row>
        </Col>
      </Row>
      <hr className={'mt-5'} />
      <Row className={'mt-5'}>
        <Col sm={12} md={6}>
          <h4>{translation('RdCLabel')}</h4>
          <p className={'w-75'}>{translation('Footer-WhoWeAreLabel')}</p>
          <p>
            <Icon name={'email'} link={'#'} />
            <a href={`mailto:${Constants.Contacts.Email}`}>{Constants.Contacts.Email}</a>
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>O Projecto</h4>
              <ul>
                <li>
                  <a href={Constants.Routes.About}>{translation('AboutLabel')}</a>
                </li>
                <FeatureFlag name="show_colaboration">
                  <li>
                    <a href={Constants.Routes.Collaborate}>{'Quero Colaborar !'}</a>
                  </li>
                </FeatureFlag>
                <li>
                  <a href={Constants.Routes.Contacts}>{translation('ContactsPage-PageName')}</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>{translation('EventsPage-PageName')}</h4>
              <ul>
                <li>
                  <a href={Constants.Routes.Workshops}>{translation('WorkshopsPage-PageName')}</a>
                </li>
                <li>
                  <a href={Constants.Routes.Events} style={{ display: 'none' }}>
                    {translation('EventsPage-PageName')}
                  </a>
                  <a href={Constants.Routes.Community}>{translation('CommunityPage-PageName')}</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={'mt-5'}>
        <div className={'mt-5 centering-col'}>
          <SocialLinks translation={translation} />
        </div>
      </Row>
      <hr className={'mt-5'} />
      <Row className={'legal-copy'}>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">
            <a href={Constants.Routes.PrivacyPolicy}>{translation('PrivacyPolicyPage-PageName')}</a>
          </p>
        </Col>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">
            Copyright ™ {new Date().getFullYear()} As Raparigas do Código. All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Awards;
