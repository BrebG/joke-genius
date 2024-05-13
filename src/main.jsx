import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Kanye from './Kanye.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jokes from './Jokes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path: "jokes",
        element: (<Jokes />),
      },
      {
        path: "kanye",
        element: (<Kanye />),
        loader: () => {
          return fetch('https://api.kanye.rest/')
        }
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
