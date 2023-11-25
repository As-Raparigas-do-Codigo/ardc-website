import techCommunityGetTogether from '../../assets/events/get-together.png';
import we4changeResende from '../../assets/events/we4change1.png';
import we4changeAlmada from '../../assets/events/we4change2.png';
import profissoes from '../../assets/events/profissoes.png';
import hacktober from '../../assets/events/hacktober.png';
import nei from '../../assets/events/nei.png';
import iscap from '../../assets/events/iscap.png';
import witSummit from '../../assets/events/women_in_tech_summit.png';
import hacktober2023 from '../../assets/events/HacktoberFest2023.png';

import Constants from 'constants';

const Events = [
  {
    id: self.crypto.randomUUID(),
    date: '2022-03-26',
    title: 'Tech Community Get-Together',
    subtitle: '42 Lisboa',
    image: techCommunityGetTogether,
    category: Constants.Categories.EVENT,
    alt: 'Evento presencial organizado por nós',
    description:
      'Primeiro encontro realizado pelo projeto, aberto ao público e \
      com o apoio de várias entidades.  Realizou-se na escola 42 Lisboa, \
      com sessões com oradores e uma tertúlia entre várias comunidades portuguesas \
      com foco em desmistificar a presença de mulheres nas áreas tecnológicas.'
  },
  // {
  //   id: self.crypto.randomUUID(),
  //   date: '2021-05-11',
  //   title: '93º Geek Girls Portugal',
  //   subtitle: 'Rumo a uma carreira de TI',
  //   image: geekGirlsPortugalRumoIT,
  //   category: Constants.Categories.EVENT,
  //   alt: 'Evento online organizado por Geek Girls Portugal',
  //   description:
  //     'Participamos no evento 93º Geek Girls Portugal para discutir sobre Rumo a uma carreira em TI.',
  //   link: {
  //     url: 'https://www.youtube.com/watch?v=f7G9geDLWSw',
  //     type: Constants.LinkType.VIDEO
  //   }
  // },
  // {
  //   id: self.crypto.randomUUID(),
  //   date: '2021-03-09',
  //   title: 'Webinar Aubay Portugal',
  //   subtitle: 'Women in Tech',
  //   image: aubay,
  //   category: Constants.Categories.EVENT,
  //   alt: 'Webinar Aubay Portugal - Women in Tech',
  //   description: 'Estivemos presentes no webinar da Aubay Portugal sobre mulheres em tecnologia.',
  //   link: {
  //     url: 'https://www.youtube.com/watch?v=ccV9BrBjz2s',
  //     type: Constants.LinkType.VIDEO
  //   }
  // },
  {
    id: self.crypto.randomUUID(),
    date: '2022-07-23',
    title: 'Hackathon WE4CHANGE',
    subtitle: 'Resende',
    image: we4changeResende,
    alt: 'Participação no projeto We4Change',
    description:
      'Evento no qual os participantes trabalham para resolver problemas num curto espaço de tempo. \
      Durante dois dias, os participantes realizaram vários workshops \
      que os dotaram de conhecimentos para desenvolverem projetos \
      com uma forte componente tecnológica, na temática das Alterações Climáticas.',
    category: Constants.Categories.EVENT,
    link: {
      url: 'https://www.cm-almada.pt/viver/juventude/changemakers-almada-2a-edicao',
      type: Constants.LinkType.ARTICLE
    }
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-11-19',
    title: 'Hackathon WE4CHANGE',
    subtitle: 'Almada',
    link: {
      url: 'https://www.cm-almada.pt/viver/juventude/changemakers-almada-2a-edicao',
      type: Constants.LinkType.ARTICLE
    },
    image: we4changeAlmada,
    alt: 'Participação no projeto We4Change',
    description:
      'Evento no qual os participantes trabalham para resolver \
    problemas num curto espaço de tempo. Durante dois dias, os participantes \
    realizaram vários workshops que os dotaram de conhecimentos para desenvolverem projetos \
    com uma forte componente tecnológica, na temática da Energia.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-06-01',
    title: 'Jogo das Profissões',
    subtitle: 'dia da criança',
    link: {
      url: 'https://www.womenintech.pt/o-jogo-das-profissoes',
      type: Constants.LinkType.ARTICLE
    },
    image: profissoes,
    alt: 'Participação no projeto We4Change',
    description:
      'Evento no qual os participantes trabalham para resolver \
    problemas num curto espaço de tempo. Durante dois dias, os participantes \
    realizaram vários workshops que os dotaram de conhecimentos para desenvolverem projetos \
    com uma forte componente tecnológica, na temática da Energia.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-10-01',
    title: 'Hacktoberfest 2021',
    subtitle: '',
    link: {
      url: 'https://hacktoberfest.com/',
      type: Constants.LinkType.ARTICLE
    },
    image: hacktober,
    alt: 'Participação no projeto We4Change',
    description:
      'Participação no evento Hacktoberfest, que decorre durante o mês de Outubro. \
    Criação de tarefas associadas ao “Jogo das profissões” que os membros da comunidade foram desafiadas \
    a completar com a orientação de mentores da equipa.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2021-09-01',
    title: 'Noite dos Investigadores',
    subtitle: 'Coimbra',
    link: {
      url: 'https://www.uc.pt/iii/nei/nei-2021/',
      type: Constants.LinkType.ARTICLE
    },
    image: nei,
    alt: '',
    description:
      'Membros da nossa equipa participaram na “A Noite Europeia dos Investigadores (NEI)” Coimbra 2021, \
    que foi mais uma vez organizada pelo Instituto de Investigação Interdisciplinar da Universidade de Coimbra (IIIUC). \
    Esta edição contou com cerca de 1800 visitantes.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2022-04-01',
    title: 'Webinar ISCAP',
    subtitle: 'Mulheres na tecnologia',
    link: {
      url: 'https://directionemployment.org/en/about-the-organisations',
      type: Constants.LinkType.ARTICLE
    },
    image: iscap,
    alt: '',
    description:
      'Webinars integrados no projecto “Direction Employment” \
    cujo objectivo é promover a formação a grupos de cidadãos \
    vulneráveis de forma a melhorar as suas competências profissionais \
    para facilitar o seu crescimento a nível profissional.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-05-23',
    title: 'Women in Tech Summit',
    subtitle: '',
    image: witSummit,
    link: {
      url: 'https://www.instagram.com/p/CsRyWXJszQ9/',
      type: Constants.LinkType.SOCIAL
    },
    alt: '',
    description:
      'Evento organizado pela comunidade Women In Tech em que mães e filhas foram convidadas a participar de uma série de apresentações e actividades com o objectivo de introduzir os mais novos ao mundo das tecnologias. As “Raparigas do Código” fizeram parte deste evento com um workshop onde estiveram presentes crianças entre os 4 e os 15 anos.',
    category: Constants.Categories.EVENT
  },
  {
    id: self.crypto.randomUUID(),
    date: '2023-10-01',
    title: 'Hacktoberfest 2023',
    subtitle: '',
    link: {
      url: 'https://hacktoberfest.com/',
      type: Constants.LinkType.ARTICLE
    },
    image: hacktober2023,
    alt: '',
    description: 'Participação no evento Hacktoberfest, que decorre durante o mês de Outubro.',
    category: Constants.Categories.EVENT
  }
];

export default Events;
