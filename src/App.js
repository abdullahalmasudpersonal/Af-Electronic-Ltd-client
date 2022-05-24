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
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Reviews from './Pages/Reviews/Reviews';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blogs' element={<RequireAuth>
          <Blogs />
        </RequireAuth>} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
