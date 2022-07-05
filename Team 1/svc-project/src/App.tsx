import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Login from './pages/user/login';
import Register from './pages/user/register';
import ForgotPassword from './pages/user/forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout';
// import Cart from './pages/cart/cart';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        // {
        //   path: '/cart',
        //   element: <Cart/>,
        // },
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
