import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Iniciar from './routes/Iniciar.jsx'
import Entrar from './routes/Entrar.jsx'
import Cadastrar from './routes/Cadastrar.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Iniciar/>,
      },
      {
        path: "/entrar",
        element: <Entrar/>,
      },
      {
        path: "/cadastrar",
        element: <Cadastrar/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
