import { useState } from 'react'
import { manualUsuario } from '../data/manual'

export default function ManualUsuario() {
  const [idioma, setIdioma] = useState('es') // español por defecto
  const contenido = manualUsuario[idioma]

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.titulo}>
          {idioma === 'es' ? 'Manual de Usuario - PMA Frequency' : 'User Manual - PMA Frequency'}
        </h1>
        <select
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
          style={styles.selector}
          aria-label="Cambiar idioma / Change language"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </header>

      <section style={styles.secciones}>
        {contenido.map((seccion) => (
          <article key={seccion.id} style={styles.seccion}>
            <h2 style={styles.subtitulo}>{seccion.titulo}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: seccion.contenido }}
              style={styles.texto}
            />
          </article>
        ))}
      </section>
    </main>
  )
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  titulo: {
    fontSize: '1.8rem',
    margin: 0,
  },
  selector: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  secciones: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  seccion: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  subtitulo: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
  },
  texto: {
    lineHeight: 1.6,
  },
}
