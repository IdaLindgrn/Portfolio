import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { GalleryPage } from './pages/GalleryPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/gallery",
    element: <GalleryPage></GalleryPage>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
