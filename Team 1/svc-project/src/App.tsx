import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/login',
          element: <Login/>,
        },
        {
          path: '/register',
          element: <Register/>,
        },
        {
          path: '/forgotpassword',
          element: <ForgotPassword/>,
        },
      ],
    },
    {
      path: 'auth',
      element: '',
    }
  ]);
  return element;
};

export default App;
