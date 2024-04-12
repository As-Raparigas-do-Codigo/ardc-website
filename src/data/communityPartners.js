import { importAll } from '../utils';

const logos = importAll(require.context('../assets/partnerlogos/', false, /\.(png|jpe?g|svg)$/));

const communityPartners = [
  {
    image: logos['wit.png'],
    alt: 'Logo das Women In Tech',
    tier: 1,
    link: 'https://women-in-tech.org/'
  },
  {
    image: logos['42lisboa.png'],
    alt: 'Logo da 42 Lisboa',
    tier: 1,
    link: 'https://42lisboa.com/'
  },
  {
    image: logos['42porto.png'],
    alt: 'Logo da 42 Porto',
    tier: 1,
    link: 'https://42porto.com/'
  },
  {
    image: logos['dspa.png'],
    alt: 'Logo da DSPA',
    tier: 1,
    link: 'https://dspa.pt/'
  }
];
export { communityPartners };
