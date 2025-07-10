import { createHashRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ManualUsuario from './pages/ManualUsuario'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ManualUsuario /> },
    ]
  }
])
