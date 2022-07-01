<<<<<<< HEAD
import React, { Component, Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 793652dd5a3b866a5b45e7916af1d80f1c9cc82f
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
import Profile from 'pages/auth/profile';
import Admin from 'pages/admin';
import UserManagement from 'components/admin/userManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
class App extends Component {
  render() {
    return (
      // <Router>
      //   <Header />
      //   <Routes>
      //     <Route path="/" element={<Login />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/profile" element={<Profile />} />
      //     <Route path="/admin" element={<Admin />} />
      //   </Routes>
      //   <Footer />
      // </Router>

      <Admin />
=======

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
>>>>>>> 793652dd5a3b866a5b45e7916af1d80f1c9cc82f
    );
  }
}

export default App;
