import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ProjectDetails from './Components/Projects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/project/:id",
    element: <ProjectDetails></ProjectDetails>
  },
  {
    path: "*",
    element: (
      <div className="w-1/2 font-bold mx-auto text-black text-3xl text-center bg-green-200 my-10 py-10 rounded-full opacity-90">
        Page not Found <br />
        <a href="/" className="text-blue-500 underline mt-4 block">
          Go back to Home
        </a>
      </div>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
