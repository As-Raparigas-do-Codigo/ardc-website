const cities = [
  'Arquipélago dos Açores',
  'Arquipélago da Madeira',
  'Aveiro',
  'Beja',
  'Braga',
  'Bragança',
  'Castelo Branco',
  'Coimbra',
  'Évora',
  'Faro',
  'Guarda',
  'Leiria',
  'Lisboa',
  'Portalegre',
  'Porto',
  'Santarém',
  'Setúbal',
  'Viana do Castelo',
  'Vila Real',
  'Viseu',
  'Fora de Portugal'
];

const educationLevelList = {
  BASICO: 'Ensino Básico (5º - 9º)',
  SECUNDARIO: 'Ensino Secundário (10º - 12º / Curso Profissional)',
  SUPERIOR: 'Ensino Superior'
};

const workFieldsList = {
  ESTUDOS_OBRIGATORIOS: 'Ensino Obrigatório (5º - 12º ano)',
  INFORMATICA: 'Informática',
  ARTES: 'Artes, Design, Multimédia',
  EDU_PSICO: 'Educação, Psicologia',
  CIENCIAS_SOCIAIS: 'Línguas, Ciências Sociais, Jornalismo',
  STEM: 'Engenharia, Matemática, Física',
  SAUDE: 'Saúde e Ciências da Vida',
  ECONOMIA: 'Economia e Gestão',
  COMERCIO: 'Comércio e Logística',
  TRANSPORTES_SERVICOS: 'Transportes e Serviços'
};

const currentSituationList = {
  ESTUDOS_OBRIGATORIOS: 'Ensino Obrigatório (5º - 12º)',
  T_MUDANCA_CARREIRA: 'Empregad@ e em mudança de carreira',
  D_MUDANCA_CARREIRA: 'Desempregad@ e em mudança de carreira',
  T_NOVAS_OPORTUNIDADES: 'Empregad@ e à procura de novas oportunidades',
  D_NOVAS_OPORTUNIDADES: 'Desempregad@ e à procura de novas oportunidades',
  FREELANCER: 'Freelancer',
  PROJECTOS_PESSOAS: 'Projectos pessoais de empreendedorismo'
};

const foundUsList = {
  INSTAGRAM: 'Instagram',
  FACEBOOK: 'Facebook',
  LINKEDIN: 'LinkedIn',
  AMIGO_PROF: 'Através de um amigo/professor',
  PESQUISA_ONLINE: 'Ao pesquisar por projectos semelhantes',
  MEDIA: 'Evento, Talk, Podcast, Entrevista'
};

export default {
  cities: cities,
  educationLevelList: educationLevelList,
  workFieldsList: workFieldsList,
  currentSituationList: currentSituationList,
  foundUsList: foundUsList
};
