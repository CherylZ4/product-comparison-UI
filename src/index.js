import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Login from './Login';
import History from './History';
import SignUp from './SignUp';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen1/>
  },
  {
    path: "/compare",
    element: <Screen2/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/history",
    element: <History/>
  },
  {
    path: "/signUp",
    element: <SignUp/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);



