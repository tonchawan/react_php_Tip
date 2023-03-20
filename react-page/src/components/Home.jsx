import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Css/Home.css';

function Home() {

  const navigate = useNavigate();
  const [packageData, setPackage] = useState([""])

// get package API
useEffect(()=>{
  axios.get('http://tip.test/api/package')
  // if sucess put data in to packageData by setBuyDat, using useState
  .then(res=>{
    console.log(res.data.data);
    setPackage(res.data.data)
  })
  // if fail alert
  .catch((err)=>{
    console.log(err);
  alert("something error please contact our staff")
  })
},[]) 

  // Change path. Go to another page
  const goToSignup = e => {
    navigate("/signup");
  };
  const goToLogin = e => {
    navigate("/login");
  };
console.log(window.localStorage.getItem("user"));
  return (
    <div>

      {/* <nav>
        <h1>Hi There</h1>
        <div>
            <button onClick={goToSignup}>Signup</button>
            <button onClick={goToLogin}>Login</button>
        </div>
      </nav> */}

      <div className="package-container">
        {packageData.map((pkg) => (
          <div key={pkg.id}>
            <Link to="/buyForm">
            <h2>{pkg.title}</h2>
            <p>Premium: {pkg.premium}</p>
            <p>Insurance Details: {pkg.insuranceDetail}</p>

            </Link>
          </div>
        ))}
      </div>
      <br />
    </div>
  )
}
  export default Home;