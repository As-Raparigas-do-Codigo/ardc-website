import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
import Constants from 'constants';
import '../footer.scss';

const SupportTheProject = ({ translation }) => {
  return (
    <Container className="padding-top-bottom-medium text-center">
      <Row>
        <Col>
          <span className="text-secondary-color text-700-weight">
            {translation('SupportTheProject-Title')}
          </span>
        </Col>
      </Row>
      <Row>
        <h2>{translation('SupportTheProject-Subtitle')}</h2>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p dangerouslySetInnerHTML={{ __html: translation('SupportTheProject-Text')}}/>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-3">
          <LinkButton target="_blank" href={Constants.Contacts.Kofi}>
            {translation('SupportTheProject-Button').toString()}
          </LinkButton>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTheProject;
