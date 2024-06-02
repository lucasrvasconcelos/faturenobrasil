import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Initial } from './pages/initial/page'

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <Initial />,
  },
  {
    path: '/app',
    element: <App />,
  },
])
