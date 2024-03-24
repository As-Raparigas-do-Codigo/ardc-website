import { importAll } from '../utils';
const logos = importAll(require.context('../assets/sponsorlogos/', false, /\.(png|jpe?g|svg)$/));

const amountOfTiers = 3;

const sponsors = [
  {
    id: 1,
    image: logos['outsystems.png'],
    alt: 'Logo da Outsystems',
    tier: 1,
    link: 'https://www.outsystems.com/'
  },
  {
    id: 2,
    image: logos['icapital.png'],
    alt: 'Logo da iCapital',
    tier: 2,
    link: 'https://www.icapital.com/'
  },
  {
    id: 3,
    image: logos['unit4.png'],
    alt: 'Logo da Unit4',
    tier: 2,
    link: 'https://www.unit4.com/'
  },
  {
    image: logos['nunocubalreis.png'],
    alt: 'Logo da Nuno Cubal Reis',
    tier: 2,
    link: 'https://www.nunoreis.pt/'
  }
];

export { amountOfTiers, sponsors };
