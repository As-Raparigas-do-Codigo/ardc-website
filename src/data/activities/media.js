import forbesPortugal from '../../assets/events/forbes.png';
import apdc from '../../assets/events/apdc.jpeg';

import Constants from 'constants';

const Events = [
  {
    id: self.crypto.randomUUID(),
    date: '2022-06-01',
    title: 'Entrevista com Forbes Portugal',
    subtitle: 'Raparigas do Código encoraja mulheres a ingressar no setor das TIC',
    image: forbesPortugal,
    alt: 'Entrevista com Forbes Portugal',
    description:
      'Entrevista com Forbes sobre a missão das Raparigas do Código de apoiar e dar ferramentas às mulheres para ingressar no setor TI.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.forbespt.com/raparigas-do-codigo-encoraja-raparigas-e-mulheres-a-ingressar-no-setor-das-tic/',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-03-01',
    title: 'Mulheres e Tecnologia: O match que se impõe',
    subtitle: '',
    image: apdc,
    alt: 'Entrevista com APDC',
    description:
      'Entrevista à revista "Comunicações" da APDC - Associação Portuguesa para o Desenvolvimento das Comunicações.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://comunicacoes.apdc.pt/comunicacoes-238-mulheres-e-tecnologia-o-namoro-que-acabara-em-casamento-2021/65590032',
      type: Constants.LinkType.ARTICLE
    }
  }
];

export default Events;
