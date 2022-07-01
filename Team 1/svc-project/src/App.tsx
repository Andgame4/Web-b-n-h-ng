import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotpassword';
import Footer from './components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    );
  }
}

export default App;
