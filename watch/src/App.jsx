import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './Signin';
import PrivateRoute from './PrivateRoute';
import Favorite from './FavoriteButton';
import Navbar from './Navbar';


function App() {
  const[cart,setCart] = useState([]);
  console.log(cart);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
       <Route path='/login' element={<Login />} />
        <Route path='/' element={<Products />} />
        <Route path="/dashboard" element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/fav' element={<Favorite/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
