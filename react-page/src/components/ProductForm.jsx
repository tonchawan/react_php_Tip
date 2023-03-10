import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Product.css';

function Product() {

  const navigate = useNavigate();

  const [packageData, setPackage] = useState([])
  const [buyData, setBuyData] = useState({
    userId:'',
    name: '',
    lastname: '',
    prefix:'',
    govermentId: '',
    address: '',
    email: '',
    dob: '',
    startDate:'',
    endDate:'',
    beneficial:''
  });

// get package API
useEffect(()=>{
  axios.get('http://tip.test/api/package')
  // if sucess put data in to packageData by setBuyDat, using useState
  .then(res=>{
    setPackage(res.data.data)
  })
  // if fail alert
  .catch((err)=>{
    console.log(err);
  alert("something error please contact our staff")
  })
},[])
  
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://tip.test/api/buy',buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Thank you for purchase");
      window.location.href="http://tip.test/api/buyPdf"
    })
    .catch((err)=>{
      console.log(err);
    alert("something error please contact our staff")
    })
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBuyData({ ...buyData, [name]: value });
  };

  const goToLogOut = e => {
    navigate("/");
  };

  return (
    <div>
      <nav>
      <h1>Welcome</h1>
        <button onClick={goToLogOut}>Log Out</button>
      </nav>

      <div>
        {packageData.map((pkg) => (
          <div key={pkg.id}>
            <h1>{pkg.title}</h1>
            <p>Premium: {pkg.premium}</p>
            <p>Insurance Details: {pkg.insuranceDetail}</p>
          </div>
        ))}
      </div>
      <br />


      <form onSubmit={handleSubmit}>
      <label>Product Name:
        <select type="option"  name="userId" value={buyData.userId} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="Option 1" >Option 1</option>
          <option value="Option 2" >Option 2</option>
          <option value="Option 3" >Option 3</option>
          <option value="Option 4" >Option 4</option>
          <option value="Option 5" >Option 5</option>
          <option value="Option 6" >Option 6</option>
        </select>   
      </label>      
    <br/>
        <label>Firstname:
            <input type="text" 
            name="name" 
            value={buyData.name} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Lastname:
            <input type="text" 
            name="lastname" 
            value={buyData.lastname} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Prefix:
            <input type="text" 
            name="prefix" 
            value={buyData.prefix} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Identity:
            <input type="number" 
            name="govermentId" 
            value={buyData.govermentId} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Address:
            <input type="text"
            name="address" 
            value={buyData.address} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Email:
            <input type="email"
            name="email" 
            value={buyData.email} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Date of birth:
            <input type="date"
            name="dob" 
            value={buyData.dob} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>Start Dateh:
            <input type="date"
            name="startDate" 
            value={buyData.startDate} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>End Date:
            <input type="date"
            name="endDate" 
            value={buyData.endDate} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>Beneficial:
            <input type="text"
            name="beneficial" 
            value={buyData.beneficial} 
            onChange={handleChange} />
        </label>
    <br/>
      <button type="submit">Buy</button>
      </form>
    </div>
  )
}
  export default Product;