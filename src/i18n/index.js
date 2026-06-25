import { createI18n } from 'vue-i18n'

import fr from './locales/fr.json'
import en from './locales/en.json'

const browserLocale = navigator.language.split('-')[0]

const i18n = createI18n({
  legacy: false,
  locale: ['fr', 'en'].includes(browserLocale)
    ? browserLocale
    : 'en',
  fallbackLocale: 'en',
  messages: {
    fr,
    en
  }
})

export default i18n