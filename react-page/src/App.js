import React, { useState } from 'react';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/LoginForm';
import Product from './components/ProductForm';
import Signup from './components/Signup';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import {
  MDBIcon,
  MDBBtn,
  MDBSideNav,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavMenu,
  MDBSideNavCollapse
} from 'mdb-react-ui-kit';

function App() {

  //Store Hamburger drop down
  const [rightOpen, setRightOpen] = useState(true);
  const [rightCollapse1, setRightCollapse1] = useState(true);
  const [rightCollapse2, setRightCollapse2] = useState(false);

  const [userData, setUserData] = useState({});
  

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUserData={setUserData} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/product" element={<Product  />}/>
        <Route path='/user' element={<UserProfile 
                                      setUserData={setUserData}
                                      userData={userData}/>}/>
      </Routes>
    </BrowserRouter>
    <button class="menu-btn">
      <span class="menu-btn__burger"></span>
    </button>
    <nav class="nav">
    <MDBSideNav right isOpen={rightOpen} absolute getOpenState={(e: any) => setRightOpen(e)}>
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink>
              <MDBIcon far icon='smile' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Link 1</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon='angle-down'
              shouldBeExpanded={rightCollapse1}
              onClick={() => setRightCollapse1(!rightCollapse1)}
            >
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Category 1</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={rightCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon='angle-down'
              shouldBeExpanded={rightCollapse2}
              onClick={() => setRightCollapse2(!rightCollapse2)}
            >
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              Category 1
            </MDBSideNavLink>
            <MDBSideNavCollapse show={rightCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: '20px' }} className='text-center'>
        <MDBBtn onClick={() => setRightOpen(!rightOpen)}>
          <MDBIcon fas icon='bars' />
        </MDBBtn>
      </div>
    </nav>

    <footer>

    </footer>

    </div>

  );
}

export default App;