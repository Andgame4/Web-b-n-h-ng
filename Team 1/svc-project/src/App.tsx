import React, {Component}  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/layout/header';
import Login from './pages/login';
import Footer from './components/layout/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path ='/' element={<Login/>}/>
          <Route path ='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    );
  }
}

export default App;
