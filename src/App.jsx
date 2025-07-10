import { useTranslation } from 'react-i18next'

export default function App() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t('titulo')}</h1>
      <button onClick={toggleLanguage} style={styles.button}>
        {t('cambiar_idioma')}
      </button>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}
