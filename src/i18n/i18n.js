import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      settings: {
        changeLanguage: 'Change Language',
      },
    },
  },
  ar: {
    translation: {
      settings: {
        changeLanguage: 'غير اللغة',
      },
    },
  },
  fr: {
    translation: {
      settings: {
        changeLanguage: 'Changer de langue',
      },
    },
  },
  he: {
    translation: {
      settings: {
        changeLanguage: 'שנה שפה',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
