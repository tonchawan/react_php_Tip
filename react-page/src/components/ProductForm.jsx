import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Css/Product.css';

function Product() {

  const navigate = useNavigate();

  const [packageData, setPackage] = useState([""])
  const [buyData, setBuyData] = useState({
    userId:'',
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

    // If the start date field changes, calculate the end date
    if (name === "startDate") {
      const startDate = new Date(value);
      const endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());
      setBuyData(prevBuyData => ({ ...prevBuyData, endDate: endDate.toISOString().split("T")[0] }));
    }
  };

  const goToLogOut = e => {
    navigate("/");
  };

  return (
    <div>
      <nav>
      <h1>Welcome</h1>
        <Link to = '/user'>User</Link> 
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
          <select id="prefix" name="prefix">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Mr. Boy">Mr. Boy</option>
            <option value="Miss">Miss</option>
            <option value="Girl">Girl</option>
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
            max={ new Date().toISOString().split('T')[0]}
            value={buyData.dob} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>Start Date:
            <input type="date"
            name="startDate" 
            min={ new Date().toISOString().split('T')[0]}
            value={buyData.startDate} 
            onChange={handleChange} />
        </label>
    <br/>
    <label>End Date:
            <input type="date"
            name="endDate" 
            value={buyData.endDate}
            readOnly
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