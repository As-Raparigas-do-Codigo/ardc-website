// import python from '../assets/workshops/workshop-python.png';
// import react from '../assets/workshops/workshop-react.png';
// import linkedin from '../assets/workshops/workshop-linkedin.jpeg';
// import gitportfolio from '../assets/workshops/workshop-gitportfolio.jpeg';
// import gitvidareal from '../assets/workshops/workshop-gitvidareal.jpeg';
// import web3ed from '../assets/workshops/workshop-web3ed.jpeg';
// import gestaocarreira1 from '../assets/workshops/workshop-gestao-carreira-1.jpeg';
// import gestaocarreira2 from '../assets/workshops/workshop-gestao-carreira-2.jpeg';

import wsCarreira1 from '../../assets/events/ws-carreira-1.png';
import wsCarreira2 from '../../assets/events/ws-carreira-2.png';
import uxiui from '../../assets/events/uxiui.png';
import wsGit1 from '../../assets/events/ws-git-1.png';
import wsGit2 from '../../assets/events/ws-git-2.png';
import wsGit3 from '../../assets/events/ws-git-3.png';

import wsTechWeb1 from '../../assets/events/ws-tec-web-1.png';
import wsTechWeb2 from '../../assets/events/ws-tec-web-2.png';
import wsTechWeb3 from '../../assets/events/ws-tec-web-3.png';
import wsFigma from '../../assets/events/figma.png';
import wsPython1 from '../../assets/events/ws-python-1.png';
import wsIntroPython from '../../assets/events/ws-intro-python.png';

import wsDataScience from '../../assets/events/ws-data-science-1.png';
import wsReact from '../../assets/events/ws-react-1.png';

import certOutsystems from '../../assets/events/outsystems.png';

import wsLinkedin1 from '../../assets/events/ws-linkedin-1.png';
import wsLinkedin2 from '../../assets/events/ws-linkedin-2.png';

import wsCybersecurity from '../../assets/events/women4cyber-workshop.jpg';

import Constants from 'constants';

const Workshops = [
  {
    id: self.crypto.randomUUID(),
    date: '2022-06-28',
    title: 'Workshop Gestão de Carreira',
    subtitle: '1a Edição',
    image: wsCarreira1,
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
    image: wsCarreira2,
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
    image: uxiui,
    alt: '',
    description:
      'Workshop sobre conceitos básicos relacionados com User Experience (UX) \
    e User Interface (UI). Planeamento e prototipagem de um website passando por todas \
    as fases com exercícios interativos e divertidos.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-07-31',
    title: 'Workshop Git na vida real',
    subtitle: '1a Edição',
    image: wsGit2,
    alt: '',
    description:
      'Exploração de como usar a ferramenta Git em ambiente \
    de colaboração e ver o que são pull requests, branches e merges, \
    como também aprender como lidar com conflitos.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-08-14',
    title: 'Workshop Cria o teu portfólio em Git',
    subtitle: '1a Edição',
    image: wsGit3,
    alt: '',
    description:
      'Neste workshop exploramos a criação de um website de portfólio \
    com git e alojado através do GitHub Pages.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-02-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '1a Edição',
    image: wsTechWeb1,
    alt: '',
    description:
      'Exploração de conceitos básicos para o desenvolvimento de websites: \
    Estrutura e funcionamento de um ficheiro HTML, elementos e atributos HTML. \
    Definição de disposição dos elementos na página e estilos com CSS. \
    Javascript como ferramenta para adicionar interatividade ao ficheiro.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-02-06',
    title: 'Workshop Introdução à tecnologia Web',
    subtitle: '2a Edição',
    image: wsTechWeb2,
    alt: '',
    description:
      'Exploração de conceitos básicos para o desenvolvimento de websites: \
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
    image: wsTechWeb3,
    alt: '',
    description:
      'Exploração de conceitos básicos para o desenvolvimento de websites: \
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
    image: wsGit1,
    alt: '',
    description:
      'Neste workshop introduzimos às alunas a Git e GitHub \
    como ferramenta de controlo de versão e trabalho colaborativo.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-12-08',
    title: 'Workshop de Introdução a Figma',
    subtitle: '1a Edição',
    image: wsFigma,
    alt: '',
    description:
      'Workshop introdutório de Figma, as suas funcionalidades básicas, \
    como manipulação de imagens e vetores, inserção e edição de texto.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-05-15',
    title: 'Workshop Introdução a Python',
    subtitle: '1a Edição',
    image: wsPython1,
    alt: '',
    description:
      'Workshop de introdução à linguagem Python. \
    Exploração de conceitos básicos de lógica e programação, \
    assim como de estruturas de dados simples.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-10-30',
    title: 'Workshop Introdução a Python',
    subtitle: '2a Edição',
    image: wsIntroPython,
    alt: '',
    description:
      'Workshop de introdução à linguagem Python. \
    Exploração de conceitos básicos de lógica e programação, \
    assim como de estruturas de dados simples.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-04-02',
    title: 'Workshop de Introdução a python para data science',
    subtitle: '1a Edição',
    image: wsDataScience,
    alt: '',
    description:
      'Workshop de introdução ao estudo de Data Science utilizando a linguagem Python. \
    Conceitos básicos de análise, interpretação e processamento de dados. \
    Utilização de modelos para processamento de dados.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-09-03',
    title: 'Workshop de Introdução a React',
    subtitle: '1a Edição',
    image: wsReact,
    alt: '',
    description:
      'Workshop de introdução ao desenvolvimento web utilizando React. \
    Construção de uma aplicação, construção e reutilização de componentes. \
    Páginas dinâmicas, dependências e inclusão de estilos.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-09-01',
    title: 'Certificação Outsystems',
    subtitle: '',
    image: certOutsystems,
    alt: '',
    description:
      'Realização de uma Devschool e \
    respectivo exame de certificação, em parceria com a Outsystems. \
    Esta turma foi exclusivamente constituída por membros da comunidade.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-08-05',
    title: 'Workshop LinkedIn',
    subtitle: '1a Edição',
    image: wsLinkedin1,
    alt: '',
    description:
      'Workshop composto de 2 sessões: uma sessão sobre como melhorar o perfil de LinkedIn \
    e a presença na plataforma; uma segunda sessão com revisão \
    e conselhos sobre como melhorar os perfis das participantes.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-12-09',
    title: 'Workshop LinkedIn',
    subtitle: '2a Edição',
    image: wsLinkedin2,
    alt: '',
    description:
      'Workshop composto de 2 sessões: uma sessão sobre como melhorar o perfil de LinkedIn \
    e a presença na plataforma; uma segunda sessão com revisão \
    e conselhos sobre como melhorar os perfis das participantes.',
    category: Constants.Categories.WORKSHOP
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-11-18',
    title: 'Workshop de Cybersecurity',
    subtitle: '1a edição',
    image: wsCybersecurity,
    alt: '',
    description:
      'As Raparigas do Código colaboraram com as Women4Cyber em 5 sessões sobre CiberSegurança \
      durante os meses de Outubro e Novembro.',
    category: Constants.Categories.WORKSHOP
  }
];

export default Workshops;
