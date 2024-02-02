import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

window.console.log(Router)

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
