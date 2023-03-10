import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Home.css';

function Home() {

  const navigate = useNavigate();

  const [packageData, setPackage] = useState([])
  const [buyData, setBuyData] = useState({
    orderPackage:'',
    agent: '',
    customer: '',
    comment:''
  });

// get package API
useEffect(()=>{
  axios.get('http://localhost:8080/packages')
  // if sucess put data in to packageData by setBuyDat, using useState
  .then(res=>{
    console.log(res.data);
    setPackage(res.data)
  })
  // if fail alert
  .catch((err)=>{
    console.log(err);
  alert("something error please contact our staff")
  })
},[])
  
  const handleSubmit = e => {
    e.preventDefault();
    alert("Please Login")
    navigate("/login");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBuyData({ ...buyData, [name]: value });
  };

  const goToSignup = e => {
    navigate("/signup");
  };
  const goToLogin = e => {
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <h1>Hi There</h1>
        <div>
            <button onClick={goToSignup}>Signup</button>
            <button onClick={goToLogin}>Login</button>
        </div>
      </nav>

      <div className="package-container">
        {packageData.map((pkg) => (
          <div key={pkg.id}>
            <h2>{pkg.title}</h2>
            <p>Premium: {pkg.premium}</p>
            <p>Insurance Details: {pkg.insuranceDetail}</p>
          </div>
        ))}
      </div>
      <br />


      <form onSubmit={handleSubmit}>
      <label>Product Name:
        <select type="option"  name="orderPackage" value={buyData.orderPackage} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="1" >Option 1</option>
          <option value="2" >Option 2</option>
          <option value="3" >Option 3</option>
          <option value="4" >Option 4</option>
          <option value="5" >Option 5</option>
        </select>   
      </label>      
    <br/>
        <label>Agent ID:
            <input type="number"
            name="agent" 
            value={buyData.agent} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Customer ID:
            <input type="number"
            name="customer" 
            value={buyData.customer} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>Customer name :
            <input type="text"
            placeholder='Your Customer name'
            name="comment" 
            value={buyData.comment} 
            onChange={handleChange} />
        </label>
    <br/>
   
      <button type="submit">Buy</button>
      </form>

    </div>
  )
}
  export default Home;