import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Css/BuyForm.css';

function BuyForm(props) {

  let user = props.userData ;
  console.log(user);


  if (!user) {
    user={
      "id": '',
      "prefix" : '',
      "name" : '',
      "lastname" : '',
      "govermentId" : '',
      "sub_district" : '',
      "district" : '',
      "provience" : '',
      "email" : '',
    }
  }

  const navigate = useNavigate();

  const [packageData, setPackage] = useState([""])
  const [buyData, setBuyData] = useState({
    userId: user.id ,
    packageId:'',
    prefix: user.prefix,
    name: user.name,
    lastname: user.lastname,
    govermentId: user.govermentId,
    address:'',
    sub_district: user.sub_district,
    district: user.district,
    provience: user.provience,
    postcode:'',
    email: user.email,
    dob: '',
    startDate:'',
    endDate:'',
    beneficial:'ทายาทตามกฏหมาย',
    OrderStatus:1,
  });


// get package API
useEffect(()=>{
  axios.get('http://tip.test/api/package')
  // if sucess put data in to packageData by setBuyData, using useState
  .then(res=>{
    console.log(res.data.data);
    setPackage(res.data.data);
  })
  // if fail alert
  .catch((err)=>{
    console.log(err);
  alert("something error please contact our staff")
  })
  if (props.draftId) {
    axios.get('http://tip.test/api/getOrder/'+props.draftId)
      .then((res)=>{
        setBuyData(res.data.data)

        console.log(res.data.data)
      })
    
  }
},[])

  
  const handleSubmit = e => {
    e.preventDefault();
   
    if (props.draftId) {
      axios.put('http://tip.test/api/buy/'+ props.draftId, buyData)
      .then(()=>{
        alert("Thank you for purchase");
        navigate("/");
      })
      .catch((err)=>{
        console.log(err);
      alert("something error please contact our staff")
      })
      
    }else{
      axios.post('http://tip.test/api/buy',buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Thank you for purchase");
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    alert("something error please contact our staff")
    navigate("/");
    })
    }   
  };

  const saveDraf = e => {
    if (props.draftId) {
      axios.put('http://tip.test/api/updateDraf/' + props.draftId,buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Save draft complete");
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    alert("something error please contact our staff")
    navigate("/");
    })
 
    }else{
      axios.post( 'http://tip.test/api/saveDraf'  ,buyData)
    .then(()=>{
      setBuyData(buyData)
      alert("Save draft complete");
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    alert("something error please contact our staff")
    navigate("/");
    })
    }
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

  const toHome =()=> {
    navigate("/");
  };

  return (
 <div className='buy-bg-img' style={{display:"flex", justifyContent:"center"}} >
<div class="container" >
  <form onSubmit={handleSubmit}>
    <label class='input-containner form-label'  >
      <mark className='star'>*</mark>Product Name:
        <select type="option" name="packageId" value={buyData.packageId} onChange={handleChange} required> 
          <option disabled value="">Please Select Package</option>
          {packageData.map((pkg) => (  
            <option value={pkg.id} key={pkg.id}>
                {pkg.title}
            </option>
          ))}
      </select>   
    </label>      
    
    <div class="input-group mb-3" >
      <label class='input-containner form-label' >
        <mark className='star'>*</mark>Prefix:
          <select id="prefix" name="prefix"  value={buyData.prefix} onChange={handleChange}required>
          <option disabled value="">Title</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Mr. Boy">Mr. Boy</option>
          <option value="Miss">Miss</option>
          <option value="Girl">Girl</option>
          <option value="Khun">Khun</option>
        </select>
      </label>

      <label class='input-containner'>
        <mark className='star'>*</mark>Firstname:
        <input class="form-control text-center" type="text" 
        name="name" 
        defaultValue={buyData.name} 
        onChange={handleChange} 
        required/>
      </label>
            
      <label class='input-containner'>
        <mark className='star'>*</mark>Lastname:
        <input class="form-control text-center" type="text"
          name="lastname" 
          defaultValue={buyData.lastname} 
          onChange={handleChange} 
          required/>
      </label>
    </div>
        
    <label class='input-containner form-label'>
      <mark className='star'>*</mark>Identity:
      <input class="form-control text-center" type="text" 
        name="govermentId" 
        defaultValue={buyData.govermentId} 
        onChange={handleChange} 
        required/>
    </label>

    <div class="input-group mb-3" >
      <label class='input-containner form-label'>
        <mark className='star'>*</mark>Address:
        <input class="form-control text-center" type="text" 
          name="address" 
          defaultValue={buyData.address} 
          onChange={handleChange} 
          required/>
      </label>
      
      <label class='input-containner form-label'>
        <mark className='star'>*</mark>Sub District:
        <input class="form-control text-center" type="text" 
          name="sub_district" 
          defaultValue={buyData.sub_district} 
          onChange={handleChange} 
          required/>
      </label>  
    </div>

    <div class="input-group mb-3" >
      <label class='input-containner form-label'>
        <mark className='star'>*</mark>District:
        <input class="form-control text-center" type="text" 
          name="district" 
          defaultValue={buyData.district} 
          onChange={handleChange}
          required />
      </label>
      <label class='input-containner form-label'>
        <mark className='star'>*</mark>Province:
        <input class="form-control text-center" type="text" 
          name="provience" 
          defaultValue={buyData.provience} 
          onChange={handleChange} 
          required/>
      </label>  
      <label class='input-containner form-label'>
        <mark className='star'>*</mark>Zip Code:
        <input class="form-control text-center" type="text" 
          name="postcode" 
          defaultValue={buyData.postcode} 
          onChange={handleChange} 
          required/>
      </label>
    </div>
      
    <label class='input-containner form-label'>
      <mark className='star'>*</mark>Email:
      <input class="form-control text-center" type="email"
        name="email" 
        defaultValue={buyData.email} 
        onChange={handleChange} 
        required/>
    </label>
  
    <label class='input-containner form-label'>
      <mark className='star'>*</mark>Date of birth:
      <input class="form-control text-center" type="date"
        name="dob" 
        max={ new Date().toISOString().split('T')[0]}
        defaultValue={buyData.dob} 
        onChange={handleChange} 
        required/>
    </label>
  
    <div class="input-group mb-3" >
      <label class='input-containner form-label'>
        <mark className='star'  >*</mark>Start Date:
        <input class="form-control text-center" type="date"
          name="startDate" 
          min={ new Date().toISOString().split('T')[0]}
          defaultValue={buyData.startDate} 
          onChange={handleChange} 
          required/>  
        </label>
  
      <label class='input-containner form-label'><mark className='star'>*</mark>End Date:
        <input class="form-control text-center" type="date"
          name="endDate" 
          defaultValue={buyData.endDate}
          min={buyData.startDate}
          readOnly
          onChange={handleChange} 
          required/>
      </label>
    </div>
    
    <h3 class='input-containner'>Premium:{!buyData.packageId?"":`${packageData[buyData.packageId -1].premium}`}</h3>
    <br/>
  
    <label class='input-containner form-label'>
      <mark className='star'>*</mark>Beneficial:
      <input class="form-control text-center" type="text"
        name="beneficial" 
        defaultValue={!buyData.beneficial?"ทายาทตามกฏหมาย":`${buyData.beneficial}`} 
        required
        onChange={handleChange} />
    </label>
  
    <div class="d-grid gap-2 d-md-block">
    <button type="submit" class="btn btn-dark btn-lg" >Buy</button>
    </div>
  </form>
      {props.userData && <button onClick={saveDraf} class="btn btn-dark">Save Draft</button>}
      <button onClick={toHome} class="btn btn-dark" >Cancle</button>
  </div>
</div>
  )
}
  export default BuyForm;

  