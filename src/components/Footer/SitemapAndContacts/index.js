import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import SocialLinks from 'components/SocialLinks';
import Icon from 'components/Icon';
import FeatureFlag from 'components/FeatureFlag';
import '../footer.scss';
import Constants from 'constants';
import { projectLinks } from 'data/footer';

const SitemapAndContacts = ({ translation }) => {
  return (
    <Container id="footer" className="info align-center">
      <Row
        className={'mt-5 justify-content-md-center justify-content-lg-center'}
        id="middle-footer">
        <Col sm={12} md={6} lg={4} className={'align-content-center centering-text-mobile'}>
          <h4>{translation('RdCLabel')}</h4>
          <p>{translation('Footer-WhoWeAreLabel')}</p>
          <p>
            <Icon name={'email'} link={'#'} />
            <a href={`mailto:${Constants.Contacts.Email}`}>{Constants.Contacts.Email}</a>
          </p>
        </Col>
        <Col sm={12} md={6} lg={2} className="centering-text-mobile">
          <h4>O Projecto</h4>
          <ul>
            <FeatureFlag name="show_colaboration">
              <li>
                <a href={Constants.Routes.Collaborate}>{'Quero Colaborar !'}</a>
              </li>
            </FeatureFlag>
            {projectLinks.map((project, index) => (
              <li key={`project-${index}`}>
                <a href={project.path}>{translation(project.name)}</a>
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <span className="text-center">
                <SocialLinks className="text-center" translation={translation} />
              </span>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <p className="text-center">
                <a href={Constants.Routes.PrivacyPolicy}>
                  {translation('PrivacyPolicyPage-PageName')}
                </a>
              </p>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <p className="text-center">
                Copyright ™ {new Date().getFullYear()} As Raparigas do Código.
                <br />
                All Rights Reserved
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SitemapAndContacts;
