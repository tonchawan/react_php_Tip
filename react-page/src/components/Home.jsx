import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Css/Home.css';

function Home() {

  const navigate = useNavigate();
  const [packageData, setPackage] = useState([""])
  const packageImg = ["./userProfile.png"];


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
    <div className='home-bg-img'>
      <div className="package-container d-flex justify-content-center"  >
    <div className="mx-auto package-container d-flex flex-wrap" > 
      {packageData.map((pkg) => (
      <div className="card " style={{width: "25rem"}}>
          <>
          {/* ex. myimage1.jpg, myimage2.jpg, myimage3.jpg */}
          <img src={`${"./myimage" + pkg.id + ".jpg"}`} class="card-img-top" alt="..." />
          <div class="card-title" key={pkg.id}>
            
            <h2>{pkg.title}</h2>
            <p class="card-text">{pkg.insurance_detail}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Premium: {pkg.premium}</li>
            </ul>
          </div>
          </>
      </div>
      ))}
      <br />
    </div>
      </div>
      <Link to="/buyForm">
      <button className='buy-btn'>Own your product</button> 
      </Link>
    </div>
  )
}
  export default Home;