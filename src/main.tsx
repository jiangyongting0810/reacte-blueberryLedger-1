import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import 'uno.css'
import './global.scss'

window.console.log(Router)

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
