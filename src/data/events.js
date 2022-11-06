import aubay from '../assets/events/aubay-mulheres-tecnologia.jpeg';
import techCommunityGetTogether from '../assets/events/tech-community-get-together.jpeg';
import geekGirlsPortugalRumoIT from '../assets/events/g2pt93-geek-girls-portugal.jpeg';
import forbesPortugal from '../assets/events/forbes-portugal.png';
import apdc from '../assets/events/apdc.jpeg';
import we4change from '../assets/events/we4change.jpeg';

const Events = [
  {
    id: 1,
    title: 'Tech Community Get-Together',
    image: techCommunityGetTogether,
    alt: 'Evento presencial organizado por nós',
    description:
      'Um evento organizado por nós aberto à comunidade na escola 42 Lisboa que envolveu cerca de 60 pessoas.',
    link: '',
    url: ''
  },
  {
    id: 2,
    title: '93º Geek Girls Portugal - Rumo a uma carreira de TI',
    image: geekGirlsPortugalRumoIT,
    alt: 'Evento online organizado por Geek Girls Portugal',
    description:
      'Participamos no evento 93º Geek Girls Portugal para discutir sobre Rumo a uma carreira em TI.',
    link: 'Vê o apresentação no Youtube',
    url: 'https://www.youtube.com/watch?v=f7G9geDLWSw'
  },
  {
    id: 3,
    title: 'Webinar Aubay Portugal - Women in Tech',
    image: aubay,
    alt: 'Webinar Aubay Portugal - Women in Tech',
    description:
      'Estivemos presentes no webinar da Aubay Portugal sobre mulheres em tecnologia.',
    link: 'Vê o webinar no Youtube',
    url: 'https://www.youtube.com/watch?v=ccV9BrBjz2s'
  },
  {
    id: 4,
    title: 'Entrevista com Forbes Portugal',
    image: forbesPortugal,
    alt: 'Entrevista com Forbes Portugal',
    description:
      'Entrevista com Forbes sobre a missão das Raparigas do Código de apoiar e dar ferramentas às mulheres para ingressar no setor TI.',
    link: 'Lê o artigo',
    url: 'https://www.forbespt.com/raparigas-do-codigo-encoraja-raparigas-e-mulheres-a-ingressar-no-setor-das-tic/'
  },
  {
    id: 5,
    title: 'Participação no projeto We4Change',
    image: we4change,
    alt: 'Participação no projeto We4Change',
    description:
      'Participámos no evento Changemakers - hackathoon We4Change (presencial).',
    link: '',
    url: ''
  },
  {
    id: 6,
    title: 'Mulheres e Tecnologia: O match que se impõe',
    image: apdc,
    alt: 'Entrevista com APDC',
    description:
      'Entrevista à revista "Comunicações" da APDC - Associação Portuguesa para o Desenvolvimento das Comunicações.',
    link: 'Lê o artigo',
    url: 'https://comunicacoes.apdc.pt/comunicacoes-238-mulheres-e-tecnologia-o-namoro-que-acabara-em-casamento-2021/65590032'
  }
];

export default Events;
