import React, { useState } from 'react';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/LoginForm';
import BuyForm from './components/BuyForm';
import Signup from './components/Signup';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserPackageList from './components/UserPackageList';

function App() {

  const [userData, setUserData] = useState({});
  

  return (
  <html>
      
    <header>
        <nav class="nav">
          <div style={{ padding: '20px' }} className='text-center'>
            <h1>Nav in header</h1>
          </div>

          <select class="menu-selecter">
                    {/* <option ><Link to ="/login">Login</Link></option>
                    <option ><Link to ="/signup">Register</Link></option>
                    <option ><Link to ="/user">Profile</Link></option>
                    <option ><Link to ="/list">History</Link></option>
                    <option ><Link to ="/">Log Out</Link></option> */}
          </select>
        </nav>
    </header>

    <body>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setUserData={setUserData} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/buyForm" element={<BuyForm  />}/>
          <Route path='/list' element={<UserPackageList />}/>
          <Route path='/user' element={<UserProfile 
                                        setUserData={setUserData}
                                        userData={userData}/>}/>
        </Routes>
      </BrowserRouter>

    </body>

    <footer class='footer'>
      <h1>This is footer</h1>
    </footer>

  </html>

  );
}

export default App;