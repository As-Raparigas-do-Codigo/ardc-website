import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
// import Carousel from 'components/Carousel';

import '../footer.scss';

const listAwards = (translation) => {
  return [
    <Col className="mt-5" key={1}>
      <Row>
        <Col className={'align-self-center'}>
          <img
            width={255}
            className="rounded mx-auto d-block"
            alt=""
            src={require('assets/award-logo.png')}
          />
        </Col>
        <Col>
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
    </Col>,
    <Col className="mt-5" key={2}>
      <Row>
        <Col className={'align-self-center'}>
          <img
            width={255}
            className="rounded mx-auto d-block"
            alt=""
            src={require('assets/apdc.png')}
          />
        </Col>
        <Col>
          <Row>
            <h4>Prémio Cidades e Territórios do Futuro 2023</h4>
          </Row>
          <Row>
            <p>Vencedoras nas categorias “Igualdade e Inclusão” e “Qualificações”.</p>
          </Row>
          <Row>
            <p>
              <LinkButton href="https://youtu.be/8VHslZ4dYWM?t=532" target="blank">
                {translation('Footer-AwardsSection-Button')}
              </LinkButton>
            </p>
          </Row>
        </Col>
      </Row>
    </Col>
  ];
};

const Awards = ({ translation }) => {
  return (
    <Container id="footer" className="info padding-top-medium align-center">
      {/* <Row>
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
      </Row> */}
      <Row>
        <Col className="text-center">
          <span className="text-secondary-color text-700-weight text-center">
            {translation('Footer-AwardsSection-Title')}
          </span>
        </Col>
      </Row>
      <Row>{listAwards(translation)}</Row>
      <hr className={'mt-5'} />
    </Container>
  );
};

export default Awards;
