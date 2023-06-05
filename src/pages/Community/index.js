import React from 'react';
import CommunityForm from 'components/Forms/CommunityForm';
import { Container, Col, Row } from 'react-bootstrap';
import Constants from 'constants';
import PageLayout from 'components/PageLayout';

const CommunityInfoSection = ({ translation }) => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <h6 className="mb-2">{translation('CommunityPage-Title')}</h6>
        <h2 className="mb-2">{translation('CommunityPage-Subtitle')}</h2>
        <p>
          A nossa comunidade está desenhada para te ajudar a trilhar o teu caminho no mundo da
          Tecnologia! Nela poderás encontrar uma equipa dedicada a apoiar o teu percurso, amigas com
          os mesmos interesses e imensos recursos e oportunidades interessantes.
        </p>
        <h5>Comunidade e Networking</h5>
        <p>
          Vais encontrar um espaço seguro e encorajador onde dar os primeiros passos na Tecnlogia e
          Programação e conhecer muitas raparigas e mulheres que partilham os teus objectivos!
        </p>
        <h5>Mentoria e Orientação </h5>
        <p>
          Poderás entrar em contacto com qualquer um dos nossos mentores para iniciares um processo
          de mentoria: em grupo ou individual.
        </p>
        <h5>Recursos e Oportunidades </h5>
        <p>
          Partilharemos contigo recursos e materiais de estudo, dicas e vagas de emprego e
          oportunidades de eventos, estágios e formações!
        </p>
        <h5>Acesso Exclusivo a Eventos e Formações</h5>
        <p>
          Terás acesso exclusivo a eventos e formações organizadas por nós ou pela nossa rede de
          parceiros e patrocinadores.
        </p>
      </Row>
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
