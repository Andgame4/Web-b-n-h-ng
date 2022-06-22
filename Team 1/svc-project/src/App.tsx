import React, {Component}  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Login from './components/login';
import {Register} from './components/register';
import ForgotPassword from './components/forgotpassword';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path ='/' element={<Login/>}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/register' element={<Register/>}/>
          <Route path ='/forgotpassword' element={<ForgotPassword/>}/>
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

export default App;
