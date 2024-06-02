import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { routerApp } from './routes-app.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerApp} key={'21651d91c9'} />
  </React.StrictMode>,
)
