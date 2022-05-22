import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
