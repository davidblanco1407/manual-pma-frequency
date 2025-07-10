import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  lng: 'es',
  resources: {
    es: {
      translation: {
        titulo: 'Manual de Usuario - PMA Frequency',
        inicio: 'Inicio',
        secciones: 'Secciones',
        cambiar_idioma: 'Cambiar a Inglés',
      },
    },
    en: {
      translation: {
        titulo: 'User Manual - PMA Frequency',
        inicio: 'Home',
        secciones: 'Sections',
        cambiar_idioma: 'Switch to Spanish',
      },
    },
  },
})

export default i18n
