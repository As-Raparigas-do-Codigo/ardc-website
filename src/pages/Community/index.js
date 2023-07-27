import React from 'react';
import CommunityForm from 'components/Forms/CommunityForm';
import { Container, Col, Row } from 'react-bootstrap';
import Constants from 'constants';
import PageLayout from 'components/PageLayout';
import LinkArrow from 'components/LinkArrow';

const CommunityInfoSection = ({ translation }) => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <h6 className="mb-2">{translation('CommunityPage-Title')}</h6>
        <h2 className="mb-2">{translation('CommunityPage-Subtitle')}</h2>
        <h5>Comunidade e Networking</h5>
        <p>
          Vais encontrar um espaço seguro e encorajador onde dar os primeiros passos na Tecnlogia 
          e Programação e conhecer muitas raparigas e mulheres que partilham os teus objectivos!
        </p>
        <h5>Mentoria e Orientação</h5>
        <p>
          Temos uma equipa de profissionais ligados a várias áreas das TIs disponíveis 
          para te guiar e ajudar sempre que precisares! Poderás também entrar em contacto 
          com qualquer um dos nossos mentores para iniciares um processo de mentoria: em grupo ou individual.
        </p>
        <h5>Recursos e Oportunidades</h5>
        <p>
          Partilharemos contigo recursos e materiais de estudo, dicas e vagas 
          de emprego e oportunidades de eventos, estágios e formações!
        </p>
        <h5>Acesso Exclusivo a Eventos e Formações</h5>
        <p>
          Terás acesso exclusivo a eventos e formações organizadas por nós 
          ou pela nossa rede de parceiros e patrocinadores.
        </p>
      </Row>
      <LinkArrow href={Constants.Routes.Team} variant="primary">
        {translation('HomePage-MentorsSection-Title')}
      </LinkArrow>
    </Container>
  );
};

const CommunityFormSection = ({ translation }) => (
  <Container className="my-5 p-5 box-radius shadow-lg">
    <Row>
      <h2 className="mb-2">{translation('CommunityPage-CommunityForm-Title')}</h2>
      <p className="mb-4">{translation('CommunityPage-CommunityForm-Subtitle')}</p>
    </Row>
    <Row>
      <CommunityForm translation={translation} />
    </Row>
  </Container>
);

const Community = ({ translation }) => {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('CommunityPage-PageName')
    }
  ];
  return (
    <PageLayout
      title={translation('CommunityPage-PageName')}
      descriptionParagraphs={[
        translation('CommunityPage-Description-Line1'), 
        translation('CommunityPage-Description-Line2')
      ]}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md">
        <Row>
          <Col>
            <CommunityInfoSection translation={translation} />
          </Col>
          <Col>
            <CommunityFormSection translation={translation} />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
};

export default Community;
