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
//     id: 2,
//     title: 'Introdução à programação em Python',
//     image: python,
//     alt: 'Python workshop',
//     description:
//       'Temos o prazer de apresentar a primeira edição do ciclo de workshops de Python para Data Science. De acordo com a Havard Business Review Data Scientist é o trabalho mais sexy do seculo XXI. Não vais querer perder o workshop introdutório a nesta área (...)',
//     descriptiveDate: 'Próxima Edição: 10 de Março (Sábado) das 10h às 12h',
//     startingDate: '2022-03-10T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Longa Duração'
//   },
//   {
//     id: 3,
//     title: 'Como usar o GitHub como portfólio',
//     image: gitportfolio,
//     alt: 'GitHub como portfolio workshop',
//     description:
//       'Para muitos o perfil de GitHub é uma biblioteca de projetos pessoais. \
//       Podemos usar como ferramenta de versionamento e alojamento do nosso trabalho, \
//       mas também para publicar o código dos nossos projetos para outros developers e até possíveis empregadores poderem ver. \
//       Não precisas de ter projetos enormes nem de muita complexidade para impressionar quem os visita, \
//       por isso vamos ver como te podes destacar de entre os restantes developers!',
//     descriptiveDate: null,
//     startingDate: '2021-08-14T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
//   },
//   {
//     id: 4,
//     title: 'Workshop de LinkedIn',
//     image: linkedin,
//     alt: 'LinkedIn workshop',
//     description:
//       'Hoje em dia ter um perfil de LinkedIn de qualidade é meio caminho andado para conseguir o nosso emprego de sonho, ou simplesmente começar a nossa aventura como developer. Por isso, iremos ver como podemos melhorar o nosso perfil, explorando os casos concretos das participantes. \
//       Podes partilhar o teu perfil connosco e vamos-te dizer onde podes melhorá-lo de acordo com os teus objetivos.',
//     descriptiveDate: '...',
//     startingDate: '2021-08-05T10:00:00Z',
//     endingDate: '2021-08-05T10:00:00Z',
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
//   },
//   {
//     id: 5,
//     title: 'Workshop Git na vida real',
//     image: gitvidareal,
//     alt: 'Git na vida real, PRs e merge conflicts',
//     description:
//       'Vamos explorar o que são branches, como usar o Git em ambiente de cooperação e ver o que são pull requests e merges. \
//       O uso de Git é importante quando trabalhamos sozinhas, mas é quando o usamos em equipa que \
//       realmente começamos a ver todas as vantagens desta ferramenta. \
//       Vais também aprender como lidar com conflitos, que parecem causar tantas dores de cabeça aos developers \
//       quando aparecem.',
//     descriptiveDate: null,
//     startingDate: '2021-07-31T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
//   },
//   {
//     id: 6,
//     title: 'Introdução às Tecnologias Web (Edição 3)',
//     image: web3ed,
//     alt: 'Introdução às Tecnologias Web',
//     description:
//       'Ao longo de 7 semanas, vais poder aprender a desenvolver um website desde o início \
//       e publicá-lo online para que todos possamos ver o teu trabalho e teres o teu próprio cantinho na Internet. \
//       Vais ficar a saber HTML, CSS e JavaScript!',
//     descriptiveDate: null,
//     startingDate: '2021-07-31T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
//   },
//   {
//     id: 7,
//     title: 'Gestão de Carreira (Edição 1)',
//     image: gestaocarreira1,
//     alt: 'Workshop Gestão de Carreira (Edição 1)',
//     description:
//       'Uma carreira em Tech pode parecer algo assustador à primeira vista, \
//       mas este workshop é mesmo para as desmistificar! \
//       Vais perceber como procurar a vaga que pretendes, como te candidatares, \
//       como são as entrevistas os Recursos Humanos e até as entrevistas técnicas! \
//       Três sessões para esclareceres todas as tuas dúvidas.',
//     descriptiveDate: null,
//     startingDate: '2022-06-28T10:00:00Z',
//     endingDate: null,
//     linkUrl: 'https://raparigasdocodigo.pt/atividades/',
//     buttonUrl: 'https://raparigasdocodigo.pt/atividades/',
//     descriptiveDuration: 'Curta Duração'
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
    date: '2021-08-05',
    title: 'Gestao Carreira',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 
      'Workshop composto de 3 sessões, sobre partilha de ferramentas \
      e dicas para preparação para procura de emprego, \
      esclarecimento do processo de recrutamento e de entrevistas técnicas.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-12-01',
    title: 'Workshop de Introdução a UX/UI',
    subtitle: '2a Edição',
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
    description: 'Exploração de como usar a ferramenta Git em ambiente de colaboração \
     e ver o que são pull requests, branches e merges, \
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
    description: 'Neste workshop exploramos a criação de um website \
    de portfólio com git e alojado através do GitHub Pages.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-02-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Exploração de conceitos básicos para o desenvolvimento de websites: Estrutura e \
    funcionamento de um ficheiro HTML, elementos e atributos HTML. \
    Definição de disposição dos elementos na página e estilos com CSS. \
    Javascript como ferramenta para adicionar interatividade ao ficheiro.',
    category: Constants.Categories.WORKSHOP,
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-07-24',
    title: 'Workshop de Introdução a Git e GitHub',
    subtitle: '1a Edição',
    image: '',
    alt: '',
    description: 'Neste workshop introduzimos às alunas a Git e GitHub \
    como ferramenta de controlo de versão e colaboração.',
    category: Constants.Categories.WORKSHOP,
  }
];

export default Workshops;
