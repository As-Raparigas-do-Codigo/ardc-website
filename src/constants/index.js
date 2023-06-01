import Contacts from './contacts';
import Routes from './routes';
import FeatureFlags from './featureflags';

const Categories = Object.freeze({
  EVENT: { label: 'evento', color: 'dark-blue' },
  WORKSHOP: { label: 'workshop', color: 'dark-blue' },
  MEDIA: { label: 'media', color: 'dark-blue' }
});

const LinkType = Object.freeze({
  ARTICLE: { label: 'artigo', color: 'blue' },
  VIDEO: { label: 'video', color: 'blue' },
  FILE: { label: 'ficheiro', color: 'blue' },
  SOCIAL: { label: 'social', color: 'blue' }
});

export default {
  Contacts,
  Routes,
  FeatureFlags,
  Categories,
  LinkType
};
