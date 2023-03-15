import React, { useState } from 'react';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import Product from './components/ProductForm';
import Signup from './components/Signup';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  
  const [userData, setUserData] = useState({});
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUserData={setUserData} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/product" element={<Product />}/>
        <Route path='/user' element={<UserProfile 
                                      setUserData={setUserData}
                                      userData={userData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;