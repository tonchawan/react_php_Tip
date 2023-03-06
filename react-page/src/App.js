import React, { useState } from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Product from './components/ProductForm';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;