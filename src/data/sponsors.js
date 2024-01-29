import wit from '../assets/sponsorlogos/wit.png';
import microsoft from '../assets/sponsorlogos/microsoft.png';
import outsystems from '../assets/sponsorlogos/outsystems.png';
import nunocubalreis from '../assets/sponsorlogos/nunocubalreis.png';

const amountOfTiers = 3;

const sponsors = [
  {
    id: 1,
    image: outsystems,
    alt: 'Logo da Outsystems',
    tier: 1,
    link: 'https://www.outsystems.com/'
  },
  {
    id: 2,
    image: microsoft,
    alt: 'Logo da Microsoft',
    tier: 2,
    link: 'https://www.microsoft.com/pt-pt/'
  },
  {
    id: 3,
    image: wit,
    alt: 'Logo das Women In Tech',
    tier: 2,
    link: 'https://women-in-tech.org/'
  },
  {
    id: 4,
    image: nunocubalreis,
    alt: 'Logo da Nuno Cubal Reis',
    tier: 2,
    link: 'https://www.nunoreis.pt/'
  }
];

export { amountOfTiers, sponsors };
