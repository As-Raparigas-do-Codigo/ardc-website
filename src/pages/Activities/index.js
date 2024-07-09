import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import OrganizationFeature from 'components/OrganizationFeature';
import EventCard from 'components/EventCard';

import Constants from 'constants';
import { sortByDesc, capitalize } from 'utils';

import projectoEducacao from '../../assets/projeto_educacao.png';
import inclusaoDigital from '../../assets/inclusao_digital.png';
import comunidade from '../../assets/comunidade.png';

import './activities.scss';

import activities from 'data/activities';

const ActivitiesFeaturesBanner = ({ t }) => (
  <>
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="my-4 align-self-center text-center">
        <h1 className="py-1">{t('ActivitiesPage-PageName')}</h1>
      </Col>
    </Row>
    <Row xs={1} md={2} lg={3} className="p-2 mt-4">
      <Col>
        <OrganizationFeature
          key={1}
          imgsrc={comunidade}
          title={'Comunidade'}
          description={
            'Dinamizamos workshops, mentorias e momentos de networking. Partilhamos recursos, vagas de emprego e promovemos o acesso exclusivo a eventos e formações'
          }
        />
      </Col>
      <Col>
        <OrganizationFeature
          key={2}
          imgsrc={projectoEducacao}
          title={'Projeto Educação'}
          description={
            'Organizamos workshops para crianças e jovens, fomentando o interesse pelas áreas CTEM (Ciência, Tecnologia, Engenharia e Matemática)'
          }
        />
      </Col>
      <Col>
        <OrganizationFeature
          key={3}
          imgsrc={inclusaoDigital}
          title={'Inclusão Digital'}
          description={
            'Organizamos palestras, exposições, celebramos efemérides e colaboramos ativamente em projetos de cariz social'
          }
        />
      </Col>
    </Row>
  </>
);

function Activities({ translation }) {
  const breadcrumbs = [
    {
      label: translation('HomePage-PageName'),
      href: Constants.Routes.Home
    },
    {
      label: translation('ActivitiesPage-PageName')
    }
  ];

  const activitiesRefined = activities
    .map((x) => {
      x.date = new Date(x.date);
      return x;
    })
    .sort((a, b) => sortByDesc(a, b, 'date'));

  const categories = Array.from(new Set(activities.map(item => item.category.label)));

  const calculateCategoryTotal = (category) => {
    return activitiesRefined && activitiesRefined.filter((item) => item.category.label === category).length;
  };

  const total = activitiesRefined && activitiesRefined.length;
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory ? activitiesRefined.filter((event) => event.category.label === selectedCategory) : activitiesRefined;

  return (
    <PageLayout
      customBanner={<ActivitiesFeaturesBanner t={translation} />}
      title={translation('ActivitiesPage-PageName')}
      descriptionParagraphs={[translation('ActivitiesPage-Description')]}
      breadcrumbsData={breadcrumbs}>
      <Container fluid="md" className="">
        <button onClick={() => handleCategoryClick('')} className={`${selectedCategory === '' ? 'activeTab' : 'inactiveTab'} rounded-pill`}>
          Todos <span>{total}</span>
        </button>
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => handleCategoryClick(category)} 
            className={`${selectedCategory === category ? 'activeTab' : 'inactiveTab'} rounded-pill`}
          >
            {capitalize(category)} <span>{calculateCategoryTotal(category)}</span>
          </button>
        ))}
        <Row className={'mt-4 mb-5'} xs={1} lg={4}>
          {filteredEvents.map((item, key) => (
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

export default Activities;
