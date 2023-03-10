import React from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Product from './components/ProductForm';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/product" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;