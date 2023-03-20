import React, { useEffect, useState } from 'react';

import {Routes, Route} from 'react-router-dom';
import Login from './components/LoginForm';
import BuyForm from './components/BuyForm';
import Signup from './components/Signup';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserPackageList from './components/UserPackageList';
// import Preview from './components/Preview';
import Navbar from './components/Navbar';

function App() {

  const [userData, setUserData] = useState();
  const [draftId, setDraftId] = useState();

  
  
  useEffect(()=>{

    setUserData(JSON.parse(window.localStorage.getItem("user")))
  },[]
  )


  return (
  <html>
      
    <header>
      <Navbar userData={userData} />
    </header>

    <body style={{height:"100vh"}}>
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preview' element={<Home />} />
          <Route path='/login' element={<Login setUserData={setUserData} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/buyForm" element={<BuyForm userData={userData} draftId ={draftId}/>}/>
          <Route path='/list' element={<UserPackageList userData={userData} setDraftId={setDraftId} />}/>
          <Route path='/user' element={<UserProfile 
                                        setUserData={setUserData}
                                        userData={userData}/>}/>

        </Routes>
      

    </body>

    <footer class="blockquote-footer">For more infomation please contact : tonchawan@hotmail.com <cite title="Source Title"></cite></footer>

  </html>

  );
}

export default App;