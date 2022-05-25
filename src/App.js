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
import Dashbord from './Pages/Dashbord/Dashbord';
import MyProfile from './Pages/Dashbord/MyProfile';
import AddReview from './Pages/Dashbord/AddReview';
import MyOrders from './Pages/Dashbord/MyOrders';
import ManagePorduct from './Pages/Dashbord/ManagePorduct';
import MakeAdmin from './Pages/Dashbord/MakeAdmin';
import AddProduct from './Pages/Dashbord/AddProduct';
import ProductDetail from './Pages/ProductDetail.js/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashbord' element={<RequireAuth>
          <Dashbord /> </RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='addreview' element={<AddReview />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='manageproduct' element={<ManagePorduct />} />
          <Route path='makeadmin' element={<MakeAdmin />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/product/:productId' element={<RequireAuth>
          <ProductDetail />
        </RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
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
