const TeamData = [
  {
    id: 1,
    roles: ['founder', 'admin', 'mentor'],
    name: 'Miriam Santos',
    company: 'YData',
    job: 'Developer Advocate',
    social: [
      { linkedin: 'https://www.linkedin.com/in/miriamseoanesantos/' },
      { github: 'https://github.com/miriamspsantos' },
      { medium: 'https://medium.com/@miriam.santos' },
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
    company: 'University of Coimbra',
    job: 'Invited Teaching Assistant',
    social: [
      { linkedin: 'https://linkedin.com/in/josepamorim' },
      { github: 'https://github.com/jpamorim' },
      { instagram: 'https://www.instagram.com/jose.p.amorim/' },
      { other: 'https://linktr.ee/jpamorim' }
    ],
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
      { github: 'https://github.com/inesmartins' },
      { other: 'https://inesmartins.github.io/' }
    ],
    avatar: 'ines-martins.jpg'
  },
  {
    id: 7,
    roles: ['admin', 'mentor'],
    name: 'Isabel Costa',
    company: 'Deliveroo',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/isabelcmdcosta/' },
      { github: 'https://github.com/isabelcosta' },
      { other: 'https://isabelcosta.github.io/' }
    ],
    avatar: 'isabel.jpg'
  },
  {
    id: 8,
    roles: ['admin', 'mentor'],
    name: 'Joana Lopes',
    company: 'SIBS',
    job: 'Software Engineer',
    social: [],
    avatar: 'joana_lopes.jpg'
  },
  {
    id: 9,
    roles: ['admin', 'mentor'],
    name: 'Mónica Fidalgo',
    company: 'Mercedes-Benz.io',
    job: 'Frontend Developer',
    social: [{ linkedin: 'https://www.linkedin.com/in/monicafidalgo/' }],
    avatar: 'monica.jpg'
  },
  {
    id: 10,
    roles: ['admin', 'mentor'],
    name: 'Pedro Fonseca',
    company: 'KWAN',
    job: 'Frontend Developer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/pedromlfonseca/' },
      { instagram: 'https://www.instagram.com/thedrawingdev/' },
      { github: 'https://github.com/PMLF' },
      { other: 'https://thedrawingdev.com/' }
    ],
    avatar: 'pedro-fonseca.jpeg'
  },
  {
    id: 11,
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
    company: 'University of Coimbra ',
    job: 'Researcher',
    social: [
      { linkedin: 'https://www.linkedin.com/in/catarina-ns-silva/' },
      { github: 'https://github.com/CatarinaNSSilva' },
      { other: 'https://catarinasilva.weebly.com' }
    ],
    avatar: 'catarina-silva.png'
  },
  {
    id: 14,
    roles: ['mentor', 'collaborator'],
    name: 'Pedro Torres',
    company: 'Salsify',
    job: 'Senior Director of Engineering',
    social: [{ linkedin: 'https://www.linkedin.com/in/pedrogustavotorres/' }],
    avatar: 'pedro-torres.png'
  },
  {
    id: 15,
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
    id: 16,
    roles: ['mentor', 'collaborator'],
    name: 'Sérgio Silva',
    company: 'Microsoft',
    job: 'Principal Software Engineering Manager',
    social: [{ linkedin: 'https://www.linkedin.com/in/sergio-a-silva/' }],
    avatar: 'sergio.png'
  },
  {
    id: 17,
    roles: ['mentor', 'collaborator'],
    name: 'Inês de Matos',
    company: 'Web Summit',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/inesdematos/' },
      { instagram: 'https://instagram.com/nenas.shots' },
      { medium: 'https://inesdematos.medium.com/' },
      { github: 'https://github.com/toothlesspanda' }
    ],
    avatar: 'inesmatos.png'
  },
  {
    id: 18,
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
    id: 19,
    roles: ['mentor', 'collaborator'],
    name: 'Marta Dias',
    company: 'KWAN',
    job: 'Product Owner',
    social: [
      { linkedin: 'https://www.linkedin.com/in/marta-r-dias/' },
      { instagram: 'https://www.instagram.com/aanalista/' },
      { medium: 'https://medium.com/@markeldias' },
      { github: 'https://github.com/markeldias' },
      { other: 'https://aanalista.pt/' }
    ],
    avatar: 'marta.png'
  },
  {
    id: 20,
    roles: ['mentor', 'collaborator'],
    name: 'Inês Silvestre',
    company: 'LastPass',
    job: 'Talent Acquisition Manager',
    social: [{ linkedin: 'https://www.linkedin.com/in/inespsilvestre/' }],
    avatar: 'ines-silvestre.jpg'
  },
  {
    id: 21,
    roles: ['mentor', 'collaborator'],
    name: 'Jéssica Lemos',
    company: 'Talkdesk',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/jessicalemos9/' },
      { github: 'https://github.com/jessicalemos ' },
      { other: 'https://jessicalemos.github.io/' }
    ],
    avatar: 'jessica-lemos.png'
  },
  {
    id: 22,
    roles: ['mentor', 'collaborator'],
    name: 'Nuno Reis',
    company: 'Nuno Cubal Reis, Unipessoal Lda.',
    job: 'Outsystems MVP',
    social: [
      { linkedin: 'https://www.linkedin.com/in/nunocubal/' },
      { other: 'https://www.nunoreis.pt/' },
      { outsystems: 'https://www.outsystems.com/profile/psonomp8dh' }
    ],
    avatar: 'nuno-reis.png'
  },
  {
    id: 23,
    roles: ['mentor', 'collaborator'],
    name: 'Beatriz Sabino',
    company: 'Near Partner',
    job: 'OutSystems Developer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/beatriz-sabino96/' },
      { outsystems: 'https://www.outsystems.com/profile/5kda2s3k2u' }
    ],
    avatar: 'beatriz-sabino.jpg'
  },
  {
    id: 24,
    roles: ['mentor', 'collaborator'],
    name: 'Selmira Fernandes',
    company: '',
    job: '',
    social: [{ linkedin: 'https://www.linkedin.com/in/selmirafernandes/' }],
    avatar: 'selmira.jpg'
  },
  {
    id: 25,
    roles: ['mentor', 'collaborator'],
    name: 'Inês Calçôa',
    company: 'Volkswagen Group Services',
    job: 'Software Developer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/inescalcoa/' },
      { github: 'https://github.com/iscc92' }
    ],
    avatar: 'ines-calcoa.jpeg'
  },
  {
    id: 26,
    roles: ['mentor', 'collaborator'],
    name: 'Cristiane Fidelix',
    company: '',
    job: 'IT Consultant - Cybersecurity Specialist',
    social: [
      { linkedin: 'https://www.linkedin.com/in/cristianefidelix/' },
      { instagram: 'https://www.instagram.com/cristianefidelix.live' },
      { other: 'https://sites.google.com/view/cristianefidelix/home' }
    ],
    avatar: 'cristiane-fidelix.jpeg'
  },
  {
    id: 27,
    roles: ['mentor', 'collaborator'],
    name: 'Teresa Alves',
    company: 'Cloudflare',
    job: 'Systems Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/teresalves/' },
      { github: 'https://github.com/teresalves' }
    ],
    avatar: 'teresa-alves.jpg'
  },
  {
    id: 28,
    roles: ['mentor', 'collaborator'],
    name: 'Gustavo Rodrigues',
    company: 'KWAN',
    job: 'Full Stack Developer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/gustavocrodrigues/' },
      { github: 'https://github.com/gustavorodrigues19' },
      { other: 'https://www.gustavocrodrigues.com' }
    ],
    avatar: 'gustavo-rodrigues.png'
  }
];

export default TeamData;
