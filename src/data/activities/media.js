import forbesPortugal from '../../assets/events/forbes.png';
import apdc from '../../assets/events/apdc.jpeg';
import pwitAwards2021 from '../../assets/events/best_digital_inclusion_project.png';
import mercedesMoveTogether from '../../assets/events/move_together_challenge.png';
import widsPortugal from '../../assets/events/wids.png';
import valtechPadel from '../../assets/events/torneio_padel.png';
import aubayPodcast from '../../assets/events/ouves_me_aubay.jpg';
import premiosAPDC from '../../assets/events/premio_territorios_cidades.jpg';
import diretorioTic from '../../assets/events/diretorio_tic.png';
import teleperformanceWebinar from '../../assets/events/webinar_teleperformance.png';
import technovationGirls from '../../assets/events/technovation_girls.png';
import incode2023 from '../../assets/events/incode_2030.jpg';
import webinarAubay from '../../assets/events/webinar_aubay.jpg';
import comunicacoesSet2023 from '../../assets/events/comunicacoes_Set_2023.png';
import digitalWithPurpose2023 from '../../assets/events/digital_with_purpose_2023.jpg'

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
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-11-21',
    title: 'Ouves-me Aubay?',
    subtitle: 'Podcast',
    image: aubayPodcast,
    alt: '',
    description:
      'Participação no podcast “Ouves-me Aubay?”. Discussão sobre o papel das mulheres nas áreas tecnológicas, os desafios que encontram e o que ainda podemos melhorar nessa área.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.youtube.com/watch?v=xvunLnzk9O0',
      type: Constants.LinkType.VIDEO
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-03-08',
    title: 'Webinar Aubay Portugal',
    subtitle: 'Women in Tech ',
    image: webinarAubay,
    alt: '',
    description:
      'Participação no webinar promovido pela Aubay Portugal no âmbito da comemoração do Dia da Mulher.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.instagram.com/p/CL6YsLNBaoI/',
      type: Constants.LinkType.SOCIAL
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-06-06',
    title: 'WIDS Portugal',
    subtitle: 'Women in Data Science 2022',
    image: widsPortugal,
    alt: '',
    description:
      'Conferência WiDS Portugal 2022, contando com a presença d’ As Raparigas do Código.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.iscap.ipp.pt/destaques-1/noticias/wids-portugal-2022-women-in-data-science ',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-12-01',
    title: 'Move Together Challenge',
    subtitle: 'Mercedes-benz.io',
    image: mercedesMoveTogether,
    alt: '',
    description:
      'A empresa Mercedes-benz.io apoiou o projeto através de um donativo obtido com a sua iniciativa interna de promoção de bem-estar e saúde para os seus colaboradores “Move Together Challenge”.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.instagram.com/p/Cmb3KSQg-aO/ ',
      type: Constants.LinkType.SOCIAL
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-10-19',
    title: 'Torneio de Pádel',
    subtitle: 'Valtech',
    image: valtechPadel,
    alt: '',
    description:
      'Evento desportivo promovido pela empresa Valtech que estendeu o desafio a outras empresas a participar num torneio de padel. O valor das inscrições reverteu para As Raparigas do Código.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.instagram.com/p/Cj5HVINoTM6/',
      type: Constants.LinkType.SOCIAL
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-01-01',
    title: 'TECHNOVATION GIRLS',
    subtitle: 'Challenge 2022',
    image: technovationGirls,
    alt: '',
    description:
      'Mais de 270 alunas em território nacional trabalharam em equipa selecionando um problema na sua comunidade e criando uma aplicação para dispositivos móveis para ajudar a resolvê-lo, seguindo um currículo que as formou e orientou ao longo de quatro meses.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.dge.mec.pt/noticias/technovation-girls-challenge-2023',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-07-17',
    title: 'Best Digital Inclusion Project Started by a Woman',
    subtitle: 'PWIT Awards 2021',
    image: pwitAwards2021,
    alt: '',
    description:
      'As Raparigas do Código sagram-se vencedoras do melhor projeto de inclusão digital na primeira edição em que a categoria é considerada',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.youtube.com/watch?v=5ku99qSbZOI',
      type: Constants.LinkType.VIDEO
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-02-01',
    title: 'Webinar “Diversidade e Inclusão”',
    subtitle: 'Teleperformance',
    image: teleperformanceWebinar,
    alt: '',
    description:
      'Realização de um webinar para os colaboradores da empresa Teleperformance no âmbito de uma parceria estabelecida para o ano 2022-2023.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.instagram.com/p/CpqkVx0P-Dp/',
      type: Constants.LinkType.SOCIAL
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-11-01',
    title: 'As Raparigas do Código no Programa INCoDe.2030',
    subtitle: 'INCoDe 2030',
    image: incode2023,
    alt: '',
    description:
      'As Raparigas do Código integram as atividades desenvolvidas no âmbito do programa INCoDe 2030 na vertente “Igualdade de Género”. ',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.incode2030.gov.pt/igualdade-de-genero/  ',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-05-01',
    title: 'Prémio Cidades e Territórios do Futuro ',
    subtitle: 'APDC 2023',
    image: premiosAPDC,
    alt: '',
    description:
      'As Raparigas do Código foram vencedoras da 2ª edição do Prémios Cidades e Territórios do Futuro nas categorias “Igualdade e Inclusão” e “Qualificações”.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://www.youtube.com/watch?v=8VHslZ4dYWM&t=532s',
      type: Constants.LinkType.VIDEO
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-09-10',
    title: 'Entrevista à Revista Comunicações',
    subtitle: 'Inovação para a Sustentabilidade',
    image: comunicacoesSet2023,
    alt: '',
    description:
      '"Ainda há pouca visibilidade para as mulheres na ciência, em especial nas áreas das engenharias." Descobre como As Raparigas do Código estão a quebrar o ciclo da invisibilidade na tecnologia.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://comunicacoes.apdc.pt/comunicacoes-247-pedro-dominguinhos-o-guardiao-do-prr/68477243/48',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-10-01',
    title: 'Menção no Directório Global das TIC',
    subtitle: 'Iniciativas APDC',
    image: diretorioTic,
    alt: '',
    description:
      'Na Edição Especial da Revista Comunicações, As Raparigas do Código são incluídas no Directório Global das TIC nas categorias Inclusão Digital e Qualificações.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://comunicacoes.apdc.pt/diretorio-global-das-tic-global-ict-directory-2022-2023/68477896/22',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-10-30',
    title: '2ª Edição do Digital with Purpose Global Summit 2023',
    subtitle: 'DwP 2023',
    image: digitalWithPurpose2023,
    alt: '',
    description:
      'As Raparigas do Código marcaram presença na 2ª edição do Digital with Purpose Global Summit 2023.',
    category: Constants.Categories.MEDIA,
    link: {
      url: 'https://digitalwithpurpose.org/',
      type: Constants.LinkType.ARTICLE
    }
  }
];

export default Events;
