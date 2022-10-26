import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Constants from 'data/Constants';
import Routes from 'data/Routes';
import SiteContent from 'data/SiteContent';
import LinkButton from 'components/LinkButton';
import SocialLinks from 'components/SocialLinks';
import Icon from 'components/Icon';
import '../footer.scss';

const Awards = () => {
  return (
    <Container className="info padding-top-bottom-medium align-center">
      <Row>
        <Col>
          <img className="rounded mx-auto d-block" alt="" src={require('assets/award-logo.png')} />
        </Col>
        <Col>
          <Row>
            <p className="text-secondary-color text-700-weight">
              {SiteContent.Footer.AwardsSection.Title}
            </p>
          </Row>
          <Row>
            <h4>{SiteContent.Footer.AwardsSection.Subtitle}</h4>
          </Row>
          <Row>
            <p>{SiteContent.Footer.AwardsSection.Description}</p>
          </Row>
          <Row>
            <p>
              <LinkButton href="https://www.youtube.com/watch?v=5ku99qSbZOI" target="blank">
                {SiteContent.Footer.AwardsSection.Button}
              </LinkButton>
            </p>
          </Row>
        </Col>
      </Row>
      <hr className={'mt-5'} />
      <Row className={'mt-5'}>
        <Col sm={12} md={6}>
          <h4>{SiteContent.RdCLabel}</h4>
          <p className={'w-75'}>{SiteContent.WhoWeAreLabel}</p>
          <p>
            <Icon name={'email'} link={'#'} />
            <a href={`mailto:${Constants.Email}`}>{Constants.Email}</a>
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Row>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>O Projecto</h4>
              <ul>
                <li>
                  <a href={Routes.About}>{SiteContent.AboutLabel.Title}</a>
                </li>
                <li>
                  <a href={Routes.Contacts}>{SiteContent.ContactsPage.PageName}</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={'mt-3'}>
              <h4>{SiteContent.EventsPage.PageName}</h4>
              <ul>
                <li>
                  <a href={Routes.Workshops}> {SiteContent.WorkshopsPage.PageName}</a>
                </li>
                <li>
                  <a href={Routes.Events} style={{ display: 'none' }}>
                    {SiteContent.EventsPage.PageName}
                  </a>
                  <a href={Routes.Mentorships}> {SiteContent.MentorshipsPage.PageName}</a>
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
            <a href={Routes.PrivacyPolicy}>{SiteContent.PrivacyPolicyPage.PageName}</a>
          </p>
        </Col>
        <Col sm={12} md={6} className={'mt-5'}>
          <p className="text-center">{SiteContent.Footer.Copyright}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Awards;
