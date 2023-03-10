import aubay from '../assets/events/aubay-mulheres-tecnologia.jpeg';
import techCommunityGetTogether from '../assets/events/tech-community-get-together.jpeg';
import geekGirlsPortugalRumoIT from '../assets/events/g2pt93-geek-girls-portugal.jpeg';
import forbesPortugal from '../assets/events/forbes-portugal.png';
import apdc from '../assets/events/apdc.jpeg';
import we4change from '../assets/events/we4change.jpeg';

const Categories = Object.freeze({
  EVENT: { label: 'event', color: 'dark-blue' },
  WORKSHOP: { label: 'workshop', color: 'dark-blue' },
  MEDIA: { label: 'media', color: 'dark-blue' }
});

const LinkType = Object.freeze({
  ARTICLE: { label: 'article', color: 'blue' },
  VIDEO: { label: 'video', color: 'blue' },
  FILE: { label: 'file', color: 'blue' }
});

const Events = [
  {
    id: 1,
    title: 'Tech Community Get-Together',
    subtitle: '42 lisboa',
    image: techCommunityGetTogether,
    category: Categories.EVENT,
    alt: 'Evento presencial organizado por nós',
    description:
      'Um evento organizado por nós aberto à comunidade na escola 42 Lisboa que envolveu cerca de 60 pessoas.'
  },
  {
    id: 2,
    title: '93º Geek Girls Portugal',
    subtitle: 'Rumo a uma carreira de TI',
    image: geekGirlsPortugalRumoIT,
    category: Categories.EVENT,
    alt: 'Evento online organizado por Geek Girls Portugal',
    description:
      'Participamos no evento 93º Geek Girls Portugal para discutir sobre Rumo a uma carreira em TI.',
    link: {
      url: 'https://www.youtube.com/watch?v=f7G9geDLWSw',
      type: LinkType.VIDEO
    }
  },
  {
    id: 3,
    title: 'Webinar Aubay Portugal',
    subtitle: 'Women in Tech',
    image: aubay,
    category: Categories.EVENT,
    alt: 'Webinar Aubay Portugal - Women in Tech',
    description: 'Estivemos presentes no webinar da Aubay Portugal sobre mulheres em tecnologia.',
    link: {
      url: 'https://www.youtube.com/watch?v=ccV9BrBjz2s',
      type: LinkType.VIDEO
    }
  },
  {
    id: 4,
    title: 'Entrevista com Forbes Portugal',
    subtitle: 'Raparigas do Código encoraja mulheres a ingressar no setor das TIC',
    image: forbesPortugal,
    alt: 'Entrevista com Forbes Portugal',
    description:
      'Entrevista com Forbes sobre a missão das Raparigas do Código de apoiar e dar ferramentas às mulheres para ingressar no setor TI.',
    category: Categories.MEDIA,
    link: {
      url: 'https://www.forbespt.com/raparigas-do-codigo-encoraja-raparigas-e-mulheres-a-ingressar-no-setor-das-tic/',
      type: LinkType.ARTICLE
    }
  },
  {
    id: 5,
    title: 'Participação no projeto We4Change',
    subtitle: '',
    image: we4change,
    alt: 'Participação no projeto We4Change',
    description: 'Participámos no evento Changemakers - hackathoon We4Change (presencial).',
    category: Categories.EVENT
  },
  {
    id: 6,
    title: 'Mulheres e Tecnologia: O match que se impõe',
    subtitle: '',
    image: apdc,
    alt: 'Entrevista com APDC',
    description:
      'Entrevista à revista "Comunicações" da APDC - Associação Portuguesa para o Desenvolvimento das Comunicações.',
    category: Categories.MEDIA,
    link: {
      url: 'https://comunicacoes.apdc.pt/comunicacoes-238-mulheres-e-tecnologia-o-namoro-que-acabara-em-casamento-2021/65590032',
      type: LinkType.ARTICLE
    }
  }
];

export default Events;
