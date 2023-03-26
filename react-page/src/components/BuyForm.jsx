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
    <div>
      <form onSubmit={handleSubmit}>
       <label class='input-containner'  >
        <span>*</span>Product Name:
        <select type="option" name="packageId" value={buyData.packageId} onChange={handleChange} required> 
          <option disabled value="">Please Select Package</option>
          {packageData.map((pkg) => (  
              <option value={pkg.id} key={pkg.id}>
                  {pkg.title}
              </option>
          ))}
        </select>   
      </label>      
     <label class='input-containner' > <span>*</span>Prefix:
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

    <div class="input-group mb-3" >
      <div class='input-containner'> <span>*</span>Firstname:
          <input type="text" class="form-control"
          name="name" 
          defaultValue={buyData.name} 
          onChange={handleChange} 
          required
          />
      </div>
            
      <div class='input-containner'> <span>*</span>Lastname:
          <input type="text" class="form-control"
          name="lastname" 
          defaultValue={buyData.lastname} 
          onChange={handleChange} 
          required
          />
      </div>
    </div>
        
   
         <label class='input-containner'><span>*</span>Identity:
            <input type="text" 
            name="govermentId" 
            defaultValue={buyData.govermentId} 
            onChange={handleChange} 
            required
            />
        </label>
    <br/>
     <label class='input-containner'><span>*</span>Address:
                <input type="text" 
                name="address" 
                defaultValue={buyData.address} 
                onChange={handleChange} 
                required/>
            </label>
        <br/>
     <label class='input-containner'><span>*</span>Sub District:
                <input type="text" 
                name="sub_district" 
                defaultValue={buyData.sub_district} 
                onChange={handleChange} 
                required/>
            </label>
        <br/>
         <label class='input-containner'><span>*</span>District:
                <input type="text" 
                name="district" 
                defaultValue={buyData.district} 
                onChange={handleChange}
                required />
            </label>
        <br/>
         <label class='input-containner'><span>*</span>Province:
                <input type="text" 
                name="provience" 
                defaultValue={buyData.provience} 
                onChange={handleChange} 
                required/>
            </label>
        <br/>
         <label class='input-containner'><span>*</span>Zip Code:
                <input type="text" 
                name="postcode" 
                defaultValue={buyData.postcode} 
                onChange={handleChange} 
                required/>
            </label>
        <br/>
         <label class='input-containner'><span>*</span>Email:
            <input type="email"
            name="email" 
            defaultValue={buyData.email} 
            onChange={handleChange} 
            required/>
        </label>
    <br/>
         <label class='input-containner'><span>*</span>Date of birth:
            <input type="date"
            name="dob" 
            max={ new Date().toISOString().split('T')[0]}
            defaultValue={buyData.dob} 
            onChange={handleChange} 
            required/>
        </label>
    <br/>
     <label class='input-containner'><span>*</span>Start Date:
            <input type="date"
            name="startDate" 
            min={ new Date().toISOString().split('T')[0]}
            defaultValue={buyData.startDate} 
            onChange={handleChange} 
            required
            />
            
        </label>
    <br/>
     <label class='input-containner'><span>*</span>End Date:
            <input type="date"
            name="endDate" 
            defaultValue={buyData.endDate}
            min={buyData.startDate}
            readOnly
            onChange={handleChange} 
            required/>
        </label>
    <br/>
    <h5 class='input-containner'>Premium:{!buyData.packageId?"":`${packageData[buyData.packageId -1].premium}`}</h5>
    <br/>

     <label class='input-containner'><span>*</span>Beneficial:
            <input type="text"
            name="beneficial" 
            defaultValue={!buyData.beneficial?"ทายาทตามกฏหมาย":`${buyData.beneficial}`} 
            required
            onChange={handleChange} />
        </label>
    <br/>
      <button type="submit">Buy</button>
      </form>
      {props.userData && <button onClick={saveDraf}>Save Draft</button>}
      <button onClick={toHome}>Cancle</button>


    </div>
  )
}
  export default BuyForm;

  