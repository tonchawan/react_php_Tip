import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Product() {

  const navigate = useNavigate();

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

  // const [packageData, setPackage] = useState({
  //   title:'',
  //   premium:'',
  //   insuranceDetail:'',
  // })
// useEffect(()=>{
//   axios.get('http://tip.test/api/package')
//   .then(res=>{
//     const packageData = res.data
//     setPackage(packageData)
//     console.log(packageData);
//   })
//   .catch((err)=>{
//     console.log(err);
//   alert("something error please contact our staff")
//   })
// },[])
  

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://tip.test/api/buy',buyData)
    .then(()=>{
      setBuyData(buyData)
      console.log(buyData);
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

  const goToSignup = e => {
    navigate("/signup");
  };
  const goToLogin = e => {
    navigate("/login");
  };
  
  return (
    <div>
      <nav>
        <button onClick={goToSignup}>Signup</button>
        <button onClick={goToLogin}>Login</button>
      </nav>

      <div>this is product
        <h3>Product name</h3>
        <br />
        <div>Product Detail</div>
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