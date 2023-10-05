import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import WhoWeAre from './routes/WhoWeAre';
import Episodes from './routes/Episodes';
import PhotoGallery from './routes/PhotoGallery';
import Contacts from './routes/Contacts';
import Subscribers from './routes/Subscribers';

const router = createBrowserRouter([
  {
    path: "/pipocaagil",
    element: <App />
  },

  {
    path: "whoweare",
    element: <WhoWeAre />
  },

  {
    path: "episodes",
    element: <Episodes />
  },

  {
    path: "photogallery",
    element: <PhotoGallery />
  },

  {
    path: "contacts",
    element: <Contacts />
  },

  {
    path: "subscribers",
    element: <Subscribers />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
