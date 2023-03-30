import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../Css/BuyForm.css';

function BuyForm(props) {

  let user = props.userData ;

  if (!user) {  //if user don't have data all theses following value in user is equal to ''
    user={
      "id": '',
      "prefix" : '',
      "name" : '',
      "lastname" : '',
      "goverment_id" : '',
      "sub_district" : '',
      "district" : '',
      "provience" : '',
      "email" : '',
    }
  }

  const navigate = useNavigate();
  const [packageData, setPackage] = useState([""])
  const [buyData, setBuyData] = useState({
    user_id: user.id ,
    package_id:'',
    prefix: user.prefix,
    name: user.name,
    lastname: user.lastname,
    goverment_id: user.goverment_id,
    address:'',
    sub_district: user.sub_district,
    district: user.district,
    provience: user.provience,
    postcode:'',
    email: user.email,
    dob: '',
    start_date:'',
    end_date:'',
    beneficial:'ทายาทตามกฏหมาย',
    order_status:1,
  });


// get package API
useEffect(()=>{
  axios.get('http://tip.test/api/package')
  // sucess put data in to packageData by setBuyData, using useState
  .then(res=>{
    setPackage(res.data.data);
  })
  // eror alert
  .catch((err)=>{
    console.log(err);
  alert("something error please contact our staff")
  })
  //if user already have data use this API
  if (props.draftId) {
    axios.get('http://tip.test/api/getOrder/'+props.draftId)
      .then((res)=>{
        setBuyData(res.data.data)      
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
    if (name === "start_date") {
      const start_date = new Date(value);
      const end_date = new Date(start_date.getFullYear() + 1, start_date.getMonth(), start_date.getDate());
      setBuyData(prevBuyData => ({ ...prevBuyData, end_date: end_date.toISOString().split("T")[0] }));
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
        <select type="option" name="package_id" value={buyData.package_id} onChange={handleChange} required> 
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
        <mark className='star'>*</mark>First Name:
        <input class="form-control text-center" type="text" 
        name="name" 
        defaultValue={buyData.name} 
        onChange={handleChange} 
        required/>
      </label>
            
      <label class='input-containner'>
        <mark className='star'>*</mark>Last Name:
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
        name="goverment_id" 
        defaultValue={buyData.goverment_id} 
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
          name="start_date" 
          min={ new Date().toISOString().split('T')[0]}
          defaultValue={buyData.start_date} 
          onChange={handleChange} 
          required/>  
        </label>
  
      <label class='input-containner form-label'><mark className='star'>*</mark>End Date:
        <input class="form-control text-center" type="date"
          name="end_date" 
          defaultValue={buyData.end_date}
          min={buyData.start_date}
          readOnly
          onChange={handleChange} 
          required/>
      </label>
    </div>
    
    <h3 class='input-containner'>Premium:{!buyData.package_id?"":`${packageData[buyData.package_id -1].premium}`}</h3>
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
      <button onClick={toHome} class="btn btn-dark" >Cancel</button>
  </div>
</div>
  )
}
  export default BuyForm;

  