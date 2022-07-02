import React, { Component, Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
import Profile from 'pages/profile';
import Admin from 'pages/admin';
import UserManagement from 'components/admin/userManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    );
  }
}

export default App;
