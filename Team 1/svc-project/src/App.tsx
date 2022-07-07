import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/user/register';
import ForgotPassword from './pages/user/forgotpassword';
import Footer from './components/layout/footer';
import Profile from 'pages/profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout'
import { DashboardAdmin, Categories, Products, Orders } from './components/admin/';
import "./App.css"
const App =()=> {
     let element = useRoutes([
       {
         path: '/',
         element: <Layout />,
         children: [
           {
             path: '/',
             element: <DashboardAdmin />,
           },
           {
             path: '/DashboardAdmin',
             element: <DashboardAdmin />,
           },
           {
             path: '/Categories',
             element: <Categories />,
           },
           {
             path: '/Products',
             element: <Products />,
           },
           {
             path: '/register',
             element: <Orders />,
           },

           {
             path: '/categories',
             element: <Categories />,
           },
           {
             path: '/products',
             element: <Products />,
           },
           {
             path: '/orders',
             element: <Orders />,
           },
           {
             path: '/register',
             element: <Register />,
           },
           {
             path: '/login',
             element: <Login />,
           },
         ],
       },
       { path: 'auth', element: '' },
     ]);
     return element;
}
export default App;
