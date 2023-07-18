import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RootRouter } from './RootRouter';
import { FirestoreProvider } from './utils/firebase/databaseContext';
import { PortFolio } from './pages/portfolio';
import Main from './pages/main';
import { About } from './pages/about';


const router = createBrowserRouter([
  {
    element: <RootRouter />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "portfolio",
        element: <PortFolio />,
      },
      {
        path: "about",
        element: <About/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <FirestoreProvider>
      <RouterProvider router={router} />
    </FirestoreProvider>
  </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
