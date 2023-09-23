import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LinkButton from 'components/LinkButton';
import { awardsList } from 'data/footer';

import '../footer.scss';

const Awards = ({ translation }) => {
  return (
    <Container id="footer" className="info padding-top-medium align-center">
      <Row>
        <span className="text-secondary-color text-700-weight text-center">
          {translation('Footer-AwardsSection-Title')}
        </span>
      </Row>
      <Row>
        {awardsList.map((award, index) => (
          <Col className="mt-5" key={`award-${index}`}>
            <Row>
              <Col className={'align-self-center'}>
                <img width={255} className="rounded mx-auto d-block" alt="" src={award.img} />
              </Col>
              <Col className="centering-text-mobile">
                <h4>{translation(award.title)}</h4>
                <p>{translation(award.description)}</p>
                <p>
                  <LinkButton href={award.link} target="blank">
                    {translation('Footer-AwardsSection-Button')}
                  </LinkButton>
                </p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
      <hr className={'mt-5'} />
    </Container>
  );
};

export default Awards;
