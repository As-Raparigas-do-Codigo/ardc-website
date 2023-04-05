// import python from '../assets/workshops/workshop-python.png';
// import react from '../assets/workshops/workshop-react.png';
// import linkedin from '../assets/workshops/workshop-linkedin.jpeg';
// import gitportfolio from '../assets/workshops/workshop-gitportfolio.jpeg';
// import gitvidareal from '../assets/workshops/workshop-gitvidareal.jpeg';
// import web3ed from '../assets/workshops/workshop-web3ed.jpeg';
// import gestaocarreira1 from '../assets/workshops/workshop-gestao-carreira-1.jpeg';
// import gestaocarreira2 from '../assets/workshops/workshop-gestao-carreira-2.jpeg';

import Constants from 'constants';

// const WorkshopsData = [
//   {
//     id: 1,
//     title: 'React',
//     image: react,
//     alt: 'React workshop',
//     description:
//       'Temos o prazer de apresentar a primeira edição do workshop de React. Esta biblioteca criada pela Meta (antiga Facebook) tem vindo a crescer imenso na popularidade e na procura no mercado das TI.',
//     descriptiveDate: 'Próxima Edição: 02 de Abril a 07 de Maio (Sábados), entre 10h e as 12h',
//     startingDate: '2022-09-02T10:00:00Z',
//     endingDate: '2022-10-17T12:00:00Z',
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Longa Duração',
//     sessions: {
//       total: 5,
//       data: [
//         {
//           date: '2022-04-02T10:00:00Z',
//           hour: '10h',
//           duration: '2h'
//         },
//         {
//           date: '2022-04-09T10:00:00Z',
//           hour: '10h',
//           duration: '2h'
//         }
//       ]
//     }
//   },
//   {
//     id: 8,
//     title: 'Gestão de Carreira (Edição 2)',
//     image: gestaocarreira2,
//     alt: 'Workshop Gestão de Carreira (Edição 2)',
//     description:
//       'Uma carreira em Tech pode parecer algo assustador à primeira vista, \
//       mas este workshop é mesmo para as desmistificar! \
//       Vais perceber como procurar a vaga que pretendes, como te candidatares, \
//       como são as entrevistas os Recursos Humanos e até as entrevistas técnicas! \
//       Três sessões para esclareceres todas as tuas dúvidas.',
//     descriptiveDate: null,
//     startingDate: '2022-10-23T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
//   }
// ];

const Workshops = [
  {
    id: self.crypto.randomUUID(),
    date: '2022-06-28',
    title: 'Workshop Gestão de Carreira',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 
      'Workshop composto de 3 sessões, sobre partilha de ferramentas e \
      dicas para preparação para procura de emprego, \
      esclarecimento do processo de recrutamento e de entrevistas técnicas.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-10-25',
    title: 'Workshop Gestão de Carreira',
    subtitle: '2a Edição',
    image: '',
    alt: '',
    description: 
      'Workshop composto de 3 sessões, sobre partilha de ferramentas e \
      dicas para preparação para procura de emprego, \
      esclarecimento do processo de recrutamento e de entrevistas técnicas.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-12-01',
    title: 'Workshop de Introdução a UX/UI',
    subtitle: '',
    image: '',
    alt: '',
    description: 'Workshop sobre conceitos básicos relacionados com User Experience (UX) \
    e User Interface (UI). Planeamento e prototipagem de um website passando por todas \
    as fases com exercícios interativos e divertidos.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-07-31',
    title: 'Workshop Git na vida real',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Exploração de como usar a ferramenta Git em ambiente \
    de colaboração e ver o que são pull requests, branches e merges, \
    como também aprender como lidar com conflitos.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-08-14',
    title: 'Workshop Cria o teu portfólio em Git',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Neste workshop exploramos a criação de um website de portfólio \
    com git e alojado através do GitHub Pages.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-02-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Exploração de conceitos básicos para o desenvolvimento de websites: \
    Estrutura e funcionamento de um ficheiro HTML, elementos e atributos HTML. \
    Definição de disposição dos elementos na página e estilos com CSS. \
    Javascript como ferramenta para adicionar interatividade ao ficheiro.',
    category: Constants.Categories.WORKSHOP,
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-02-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '2a Edição',
    image: '',
    alt: '',
    description: 'Exploração de conceitos básicos para o desenvolvimento de websites: \
    Estrutura e funcionamento de um ficheiro HTML, elementos e atributos HTML. \
    Definição de disposição dos elementos na página e estilos com CSS. \
    Javascript como ferramenta para adicionar interatividade ao ficheiro.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-11-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '3a Edição',
    image: '',
    alt: '',
    description: 'Exploração de conceitos básicos para o desenvolvimento de websites: \
    Estrutura e funcionamento de um ficheiro HTML, elementos e atributos HTML. \
    Definição de disposição dos elementos na página e estilos com CSS. \
    Javascript como ferramenta para adicionar interatividade ao ficheiro.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-07-24',
    title: 'Workshop de Introdução a Git e GitHub',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Neste workshop introduzimos às alunas a Git e GitHub \
    como ferramenta de controlo de versão e trabalho colaborativo.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-12-08',
    title: 'Workshop de Introdução a Figma',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Workshop introdutório de Figma, as suas funcionalidades básicas, \
    como manipulação de imagens e vetores, inserção e edição de texto.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-11-02',
    title: 'Workshop Git CSSBUC',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Neste workshop introduzimos às alunas a Git e GitHub \
    como ferramenta de controlo de versão e trabalho colaborativo.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-05-15',
    title: 'Workshop Introdução a Python',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Workshop de introdução à linguagem Python. \
    Exploração de conceitos básicos de lógica e programação, \
    assim como de estruturas de dados simples.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-10-30',
    title: 'Workshop Introdução a Python',
    subtitle: '2a Edição',
    image: '',
    alt: '',
    description: 'Workshop de introdução à linguagem Python. \
    Exploração de conceitos básicos de lógica e programação, \
    assim como de estruturas de dados simples.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-04-02',
    title: 'Workshop de Introdução a python para data science',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Workshop de introdução ao estudo de Data Science utilizando a linguagem Python. \
    Conceitos básicos de análise, interpretação e processamento de dados. \
    Utilização de modelos para processamento de dados.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-09-03',
    title: 'Workshop de Introdução a React',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Workshop de introdução ao desenvolvimento web utilizando React. \
    Construção de uma aplicação, construção e reutilização de componentes. \
    Páginas dinâmicas, dependências e inclusão de estilos.',
    category: Constants.Categories.WORKSHOP
  }
  {
    id: self.crypto.randomUUID(),
    date: '2022-09-01',
    title: 'Certificação Outsystems',
    subtitle: '',
    image: '',
    alt: '',
    description: 'Realização de uma Devschool e \
    respectivo exame de certificação, em parceria com a Outsystems. \
    Esta turma foi exclusivamente constituída por membros da comunidade.',
    category: Constants.Categories.WORKSHOP
  }
];

export default Workshops;
