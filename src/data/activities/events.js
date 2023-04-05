import aubay from '../../assets/events/aubay-mulheres-tecnologia.jpeg';
import techCommunityGetTogether from '../../assets/events/tech-community-get-together.jpeg';
import geekGirlsPortugalRumoIT from '../../assets/events/g2pt93-geek-girls-portugal.jpeg';
import we4changeResende from '../../assets/events/we4changeResende.jpeg';
import we4changeAlmada from '../../assets/events/we4changeAlmada.jpeg';

import Constants from 'constants';

const Events = [
  {
    id: self.crypto.randomUUID(),
    date: '2022-03-26',
    title: 'Tech Community Get-Together',
    subtitle: '42 lisboa',
    image: techCommunityGetTogether,
    category: Constants.Categories.EVENT,
    alt: 'Evento presencial organizado por nós',
    description:
      'Um evento organizado por nós aberto à comunidade na escola 42 Lisboa que envolveu cerca de 60 pessoas.'
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-05-11',
    title: '93º Geek Girls Portugal',
    subtitle: 'Rumo a uma carreira de TI',
    image: geekGirlsPortugalRumoIT,
    category: Constants.Categories.EVENT,
    alt: 'Evento online organizado por Geek Girls Portugal',
    description:
      'Participamos no evento 93º Geek Girls Portugal para discutir sobre Rumo a uma carreira em TI.',
    link: {
      url: 'https://www.youtube.com/watch?v=f7G9geDLWSw',
      type: Constants.LinkType.VIDEO
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-03-09',
    title: 'Webinar Aubay Portugal',
    subtitle: 'Women in Tech',
    image: aubay,
    category: Constants.Categories.EVENT,
    alt: 'Webinar Aubay Portugal - Women in Tech',
    description: 'Estivemos presentes no webinar da Aubay Portugal sobre mulheres em tecnologia.',
    link: {
      url: 'https://www.youtube.com/watch?v=ccV9BrBjz2s',
      type: Constants.LinkType.VIDEO
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-10-01',
    title: 'Evento Changemakers 1a Edição',
    subtitle: 'Hackathon we4change em parceria com Zero em Resende',
    image: we4changeResende,
    alt: 'Participação no projeto We4Change',
    description:
      'Participámos no evento Changemakers - hackathoon We4Change (presencial) - juntamente com Zero',
    category: Constants.Categories.EVENT,
    link: {
      url: 'https://www.cm-almada.pt/viver/juventude/changemakers-almada-2a-edicao',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-07-23',
    title: 'Changemakers 2a Edição',
    subtitle: 'Hackathon we4change em parceria com Zero em Almada',
    link: {
      url: 'https://cm-resende.pt/noticias/evento-changemakers-23-e-24-de-julho/',
      type: Constants.LinkType.ARTICLE
    },
    image: we4changeAlmada,
    alt: 'Participação no projeto We4Change',
    description: 'Participámos no evento Changemakers - hackathoon We4Change (presencial).',
    category: Constants.Categories.EVENT
  }
];

export default Events;
