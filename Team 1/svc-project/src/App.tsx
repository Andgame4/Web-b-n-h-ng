import React from 'react';
import Header from './components/header';
import Login from './components/login';
import {Register} from './components/register';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
