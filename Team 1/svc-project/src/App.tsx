import React, { Component, Profiler } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import Header from './components/layout/header';
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
          path: '/profile',
          element: <Profile />,
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
