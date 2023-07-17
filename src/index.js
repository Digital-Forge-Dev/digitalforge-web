import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RootRouter, PortfolioRouter } from './RootRouter';
import { FirestoreProvider } from './utils/firebase/databaseContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
  },
  {
    path: '/portfolio',
    element: <PortfolioRouter />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirestoreProvider>
      <RouterProvider router={router} />
    </FirestoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
