import React, { Component, Profiler } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
import Profile from 'pages/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormOderList from 'components/profile/formOderList';
import Layout from 'components/layout/layout';
const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/formOderList',
          element: <FormOderList />,
        },
      ],
    },
    { path: 'auth', element: '' },
  ]);

  return element;
};

export default App;
