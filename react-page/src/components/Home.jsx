import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../Css/Home.css';

function Home() {

  const navigate = useNavigate();

  // Store data in the varible
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
    beneficial:"ทายาทตามกฏหมาย",
    OrderStatus:1
  });

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
  
  // When this function was used it will post varible to backend by use axios
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://tip.test/api/buyPdf',buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Thank you for purchase");

      // ALT way. use this function to go to another API
      // window.location.href="http://tip.test/api/buyPdf"
    })
    .catch((err)=>{
      console.log(err);
    alert("something error please contact our staff")
    console.log(buyData);
    })
  };

  // function to store varible
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

  // Change path. Go to another page
  const goToSignup = e => {
    navigate("/signup");
  };
  const goToLogin = e => {
    navigate("/login");
  };

  // After this some of the result will be visuallise
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
        <select type="option" name="packageId" value={buyData.packageId} onChange={handleChange}> 
        {packageData.map((pkg) => (   
            <option value={pkg.id} key={pkg.id}>
                {pkg.title}
            </option>
        ))}
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
            <input type="text" 
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
    <label>Start Dateh:
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
            defaultValue={"ทายาทตามกฏหมาย"}
            onChange={handleChange} />
        </label>
    <br/>
      <button type="submit">Buy</button>
      </form>
    </div>
  )
}
  export default Home;