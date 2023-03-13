import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Product.css';

function Product() {

  const navigate = useNavigate();

  const [packageData, setPackage] = useState([""])
  const [buyData, setBuyData] = useState({
    userId:'98',
    packageId:'',
    prefix:'',
    name: '',
    lastname: '',
    govermentId: '',
    sub_district: '',
    district: '',
    provience: '',
    email: '',
    dob: '',
    startDate:'',
    endDate:'',
    beneficial:'',
    OrderStatus:1,
  });

// get package API
useEffect(()=>{
  axios.get('http://tip.test/api/package')
  // if sucess put data in to packageData by setBuyData, using useState
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
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(buyData);
    axios.post('http://tip.test/api/buyPdf',buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Thank you for purchase");
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
        <select type="option" name="packageId" value={buyData.packageId} onChange={handleChange}> 
        {packageData.map((pkg) => (   
            <option value={pkg.title} key={pkg.id}>
                {pkg.title}
            </option>
        ))}
        </select>   
      </label>      
    <br/>
        <label>Prefix:
            <input type="text" 
            name="prefix" 
            value={buyData.prefix} 
            onChange={handleChange} />
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
        <label>Identity:
            <input type="number" 
            name="govermentId" 
            value={buyData.govermentId} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>Sub District:
                <input type="text" 
                name="sub_district" 
                value={buyData.sub_district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>District:
                <input type="text" 
                name="district" 
                value={buyData.district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Provience:
                <input type="text" 
                name="provience" 
                value={buyData.provience} 
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
      {/* <button onClick={safeDraf}>Safe Draf</button> */}
      </form>
    </div>
  )
}
  export default Product;