import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
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
         ],
       },
       { path: 'auth', element: '' },
     ]);
     return element;
}
export default App;
