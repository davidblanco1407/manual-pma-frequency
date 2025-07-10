import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header style={styles.header}>
        <h1 style={styles.title}>PMA Frequency</h1>
      </header>
      <Outlet />
      <footer style={styles.footer}>
        &copy;{new Date().getFullYear()} PMA Frequency. All rights reserved.
        </footer>
    </>
  )
}

const styles = {
  header: {
    background: '#001f3f',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
    footer: {
        background: '#001f3f',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
    },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  link: {
    color: '#fff',
    marginLeft: '1rem',
    textDecoration: 'none',
  }
}
