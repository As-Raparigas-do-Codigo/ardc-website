import React from 'react';
import PageLayout from 'components/PageLayout';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'components/Carousel';
import Constants from 'constants';
import './partners.scss';
import OrganizationFeature from 'components/OrganizationFeature';
import lideranca from 'assets/lideranca.png';
import iniciativas from 'assets/iniciativas.png';
import geracoes from 'assets/geracoes.png';
import recursos from 'assets/recursos.png';
import apoio_comunidade from 'assets/apoio_comunidade.png';
import patrono from 'assets/patrono.png';

import activities from 'data/activities';

import EventCard from 'components/EventCard';

import { sortByDesc } from 'utils';

const features = [
  <OrganizationFeature
    key={1}
    imgsrc={lideranca}
    title={'Lidera para a inclusão digital'}
    description={
      'Torna-te parceiro do nosso projeto e ajuda-nos a promover a educação gratuita, a inclusão digital e a igualdade de género no sector tecnológico'
    }
  />,
  <OrganizationFeature
    key={2}
    imgsrc={iniciativas}
    title={'Desenvolve iniciativas com impacto'}
    description={
      'Integra as nossas atividades e ajuda-nos a criar impacto a nível social, cultural, económico e tecnológico'
    }
  />,
  <OrganizationFeature
    key={3}
    imgsrc={geracoes}
    title={'Inspira as próximas gerações'}
    description={
      'Dinamiza connosco projetos de consciencialização e ajuda-nos a desmistificar preconceitos de género em crianças e jovens'
    }
  />,
  <OrganizationFeature
    key={4}
    imgsrc={recursos}
    title={'Doa material e recursos'}
    description={
      'Ajuda-nos a conseguir material, recursos e ferramentas para a realização e divulgação das nossas atividades'
    }
  />,
  <OrganizationFeature
    key={5}
    imgsrc={apoio_comunidade}
    title={'Apoia a comunidade'}
    description={
      'Considera integrar as nossas alunas nos teus estágios, formações, posições e outras oportunidades'
    }
  />,
  <OrganizationFeature
    key={6}
    imgsrc={patrono}
    title={'Torna-te nosso patrono '}
    description={
      'Oferece-nos um espaço de trabalho e dá-nos formação para acompanharmos a comunidade no nosso melhor'
    }
  />
];

const PartnerFeaturesBanner = ({ t }) => (
  <>
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="my-4 align-self-center text-center">
        <h1 className="py-1">{t('PartnersPage-PageName')}</h1>
      </Col>
    </Row>
    <Carousel
      items={features}
      desktop={3}
      autoSpeed={10000}
      infinite
      autoPlay
      transitionDuration={500}
    />
  </>
);

function Partners({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('PartnersPage-PageName')
    }
  ];

  const activitiesRefined = activities
    .filter((x) => x.category == Constants.Categories.MEDIA)
    .map((x) => {
      x.date = new Date(x.date);
      return x;
    })
    .sort((a, b) => sortByDesc(a, b, 'date'));

  return (
    <PageLayout
      title={translation('PartnersPage-PageName')}
      description={translation('PartnersPage-Description')}
      customBanner={<PartnerFeaturesBanner t={translation} />}
      breadcrumbsData={breadcrumbs}>
      <Container className="mb-5 mt-5">
        <Row>
          <h1>Somos As Raparigas do Código</h1>
          <h6>Trabalhamos para criar impacto.</h6>
          <p>
            As Raparigas do Código consagraram-se vencedoras do “Melhor Projeto de Inclusão Digital
            fundado por uma Mulher” em 2021 da 2ª edição do “Prémio Cidades e Territórios do Futuro”
            nas categorias “Igualdade e Inclusão” e “Qualificações” em 2023. O nosso projeto
            enquadra-se no âmbito da educação inclusiva, estando alinhado com os objetivos 4 e 5 da
            Agenda 2030 da ONU e com os Eixos 1, 2 e 3 da iniciativa national de reforço das
            competências digitais, INCoDe 2030, contribuindo ativamente para a agenda de transição
            digital em Portugal.
          </p>
        </Row>
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {activitiesRefined.map((item, key) => (
            <Col key={key} className={'mt-4'}>
              <span className={'event-card-wrapper'}>
                <EventCard item={item} key={item.id} />
              </span>
            </Col>
          ))}
        </Row>
      </Container>
    </PageLayout>
  );
}

export default Partners;
