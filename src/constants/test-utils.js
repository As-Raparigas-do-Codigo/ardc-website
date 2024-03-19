import { initReactI18next } from 'react-i18next';
import translationsEN from 'data/locales/translations_en.json';
import translationsPT from 'data/locales/translations_pt.json';
import i18n from 'i18next';

const DEFAULT_LANGUAGE = 'pt';
const DEFAULT_NAMESPACE = 'translations';

export function initI18n(
  translations = {
    pt: translationsPT,
    en: translationsEN
  }
) {
  i18n.use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: translations.pt },
      en: { translation: translations.en }
    }
  });
}

export function addI18nResources(
  resource = {
    pt: translationsPT,
    en: translationsEN
  },
  { ns = DEFAULT_NAMESPACE, lang = DEFAULT_LANGUAGE } = {}
) {
  i18n.addResourceBundle(lang, ns, resource, true, true);
}
