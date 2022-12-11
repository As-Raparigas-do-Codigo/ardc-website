const TeamData = [
  {
    id: 1,
    roles: ['founder', 'admin', 'mentor'],
    name: 'Miriam Santos',
    company: 'Univ. de Coimbra',
    job: 'PhD Candidate',
    social: [
      { linkedin: 'https://www.linkedin.com/in/miriamseoanesantos/' },
      { other: 'https://miriamspsantos.github.io/' }
    ],
    avatar: 'miriam.jpg'
  },
  {
    id: 2,
    roles: ['admin', 'mentor'],
    name: 'Ricardo Pereira',
    company: 'Univ. de Coimbra',
    job: 'Machine Learning Researcher',
    social: [
      { linkedin: 'https://www.linkedin.com/in/ricardo-dc-pereira' },
      { other: 'https://ricardodcpereira.com/' }
    ],
    avatar: 'ricardo.png'
  },
  {
    id: 3,
    roles: ['admin', 'mentor'],
    name: 'José Amorim',
    company: 'Univ. de Coimbra',
    job: 'Invited Teaching Assistant',
    social: [{ linkedin: 'https://linkedin.com/in/josepamorim' }],
    avatar: 'jose.jpg'
  },
  {
    id: 4,
    roles: ['admin', 'mentor'],
    name: 'Bárbara Amorim',
    company: 'i3S UPorto',
    job: 'Software Engineer',
    social: [{ linkedin: 'https://www.linkedin.com/in/barbaramorim7' }],
    avatar: 'barbara.jpeg'
  },
  {
    id: 5,
    roles: ['admin', 'mentor'],
    name: 'Daniela Pereira',
    company: 'Aubay Portugal',
    job: 'Information Systems Consultant',
    social: [{ linkedin: 'https://www.linkedin.com/in/danielasmpereira' }],
    avatar: 'daniela-pereira.jpg'
  },
  {
    id: 6,
    roles: ['admin', 'mentor'],
    name: 'Inês Martins',
    company: 'SWORD Health',
    job: 'Application Security Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/ines-af-martins/' },
      { other: 'https://inesmartins.github.io/' }
    ],
    avatar: 'ines-martins.jpeg'
  },
  {
    id: 6,
    roles: ['admin', 'mentor'],
    name: 'Isabel Costa',
    company: 'Deliveroo',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/isabelcmdcosta/' },
      { other: 'https://isabelcosta.github.io/' }
    ],
    avatar: 'isabel.jpg'
  },
  {
    id: 7,
    roles: ['admin', 'mentor'],
    name: 'Joana Lopes',
    company: 'IDMind',
    job: 'Robotics Software Development',
    social: [{ linkedin: 'https://www.linkedin.com/in/joana-g-lopes/' }],
    avatar: 'joana.png'
  },
  {
    id: 8,
    roles: ['admin', 'mentor'],
    name: 'Mónica Fidalgo',
    company: 'Mercedes-Benz.io',
    job: 'Frontend Developer',
    social: [{ linkedin: 'https://www.linkedin.com/in/monicafidalgo/' }],
    avatar: 'monica.jpg'
  },
  {
    id: 9,
    roles: ['admin', 'mentor'],
    name: 'Pedro Fonseca',
    company: 'KWAN',
    job: 'Software Engineer',
    social: [
      { linkedin: 'http://linkedin.com/in/pedromlfonseca' },
      { instagram: 'https://instagram.com/thedrawingdev' },
      { github: 'https://github.com/PMLF' },
      { other: 'https://pmlf.github.io/' }
    ],
    avatar: 'pedro-fonseca.png'
  },
  {
    id: 10,
    roles: ['admin', 'mentor'],
    name: 'Sara Vieira',
    company: 'ISCTE - Eng. Informática',
    job: 'Estudante',
    social: [{ linkedin: 'https://www.linkedin.com/in/sarapvieira/' }],
    avatar: 'sara.jpg'
  },
  {
    id: 12,
    roles: ['mentor', 'collaborator'],
    name: 'Adolfo Ferreira',
    company: 'Spider AF',
    job: 'Designer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/iamadolfo/' },
      { instagram: 'https://instagram.com/fromadolfo' }
    ],
    avatar: 'adolfo.png'
  },
  {
    id: 13,
    roles: ['mentor', 'collaborator'],
    name: 'Catarina Silva',
    company: 'Nature Research Centre',
    job: 'Chief Researcher',
    social: [{ linkedin: 'https://www.linkedin.com/in/catarina-ns-silva/' }],
    avatar: 'catarina-silva.png'
  },
  {
    id: 14,
    roles: ['mentor', 'collaborator'],
    name: 'Daniela Domingues',
    company: 'Critical Software',
    job: 'Software Engineer',
    social: [{ linkedin: 'https://www.linkedin.com/in/daniela-domingues-04b72645/' }],
    avatar: 'daniela-domingues.jpg'
  },
  {
    id: 15,
    roles: ['mentor', 'collaborator'],
    name: 'Flávia Ribeiro',
    company: 'InvoiceXpress',
    job: 'Software Engineer',
    social: [{ linkedin: 'https://www.linkedin.com/in/daniela-domingues-04b72645/' }],
    avatar: 'flavia.png'
  },
  {
    id: 16,
    roles: ['mentor', 'collaborator'],
    name: 'Marina Baltar',
    company: 'UAb - Eng. Informática',
    job: 'Account Manager',
    social: [
      { linkedin: 'https://www.linkedin.com/in/flaviamribeiro/' },
      { instagram: 'https://www.instagram.com/flavia_ribeiro_18/' }
    ],
    avatar: 'marina.jpg'
  },
  {
    id: 17,
    roles: ['mentor', 'collaborator'],
    name: 'Pedro Torres',
    company: 'Salsify',
    job: 'Senior Director of Engineering',
    social: [{ linkedin: 'https://www.linkedin.com/in/pedrogustavotorres/' }],
    avatar: 'pedro-torres.png'
  },
  {
    id: 18,
    roles: ['mentor', 'collaborator'],
    name: 'Rita Pereira',
    company: 'Tibber',
    job: 'Product Manager',
    social: [
      { linkedin: 'https://www.linkedin.com/in/ritasousapereira/' },
      { github: 'https://github.com/ritapereira10' }
    ],
    avatar: 'rita.jpg'
  },
  {
    id: 19,
    roles: ['mentor', 'collaborator'],
    name: 'Sérgio Silva',
    company: 'Microsoft',
    job: 'Principal Software Engineering Manager',
    social: [{ linkedin: 'https://www.linkedin.com/in/sergio-a-silva/' }],
    avatar: 'sergio.png'
  },
  {
    id: 20,
    roles: ['mentor', 'collaborator'],
    name: 'Ines de Matos',
    company: 'Talkdesk',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/itmm92/' },
      { instagram: 'https://instagram.com/nenas.analog' },
      { medium: 'https://ines-matos.medium.com/' },
      { github: 'https://github.com/toothlesspanda' }
    ],
    avatar: 'inesmatos.png'
  },
  {
    id: 21,
    roles: ['mentor', 'collaborator'],
    name: 'Rita Peixoto',
    company: 'UM - Eng. Informática',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/anaritapeixoto/' },
      { github: 'https://github.com/rita-peixoto' }
    ],
    avatar: 'ritapeixoto.png'
  },
  {
    id: 22,
    roles: ['mentor', 'collaborator'],
    name: 'Marta Dias',
    company: 'Talkdesk',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/marta-r-dias/' },
      { instagram: 'https://www.instagram.com/aanalista/' }
    ],
    avatar: 'marta.png'
  }
];

export default TeamData;
