import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
import PageLayout from 'components/PageLayout';
import notFoundImg from 'assets/erro404-image.svg';
import './index.scss';

const NotFound404 = ({ translation }) => {
  return (
    <PageLayout>
      <Container className="info padding-top-bottom-large align-center">
        <Row xs={1} md={1} lg={2} className="notfound404__row">
          <Col className="notfound404__image-wrapper ">
            <img src={notFoundImg} alt="404 warning" />
          </Col>
          <Col className="notfound404__text">
            <Row>
              <p className="text-secondary-color text-700-weight">Erro 404</p>
            </Row>
            <Row>
              <h4 data-testid="NotFound404-Title">{translation('NotFound404-Title')}</h4>
            </Row>
            <Row>
              <p data-testid="NotFound404-Subtitle">{translation('NotFound404-Subtitle')}</p>
            </Row>
            <Row>
              <p>
                <LinkButton id="NotFound404-Button" href="/">
                  {translation('NotFound404-Button')}
                </LinkButton>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default NotFound404;
