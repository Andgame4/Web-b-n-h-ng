import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/layout'
import { DashboardAdmin, Categories, Products, Orders } from './components/admin';
const App =()=> {
 
    // return (
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="login" element={<Login />} />
    //       <Route path="register" element={<Register />} />
    //       <Route path="forgotpassword" element={<ForgotPassword />} />
    //     </Routes>
    //     <Footer />
    //   </Router>

      
    // );
     let element = useRoutes([
       {
         path: '/',
         element: <DashboardAdmin />,
         children: [
           {
             path: '/login',
             element: <Login />,
           },
           {
             path: '/register',
             element: <DashboardAdmin />,
           },
         ],
       },
       { path: 'auth', element: '' },
     ]);

     return element;
}

export default App;
