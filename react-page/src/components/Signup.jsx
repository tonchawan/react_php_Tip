import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Css/Signup.css';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        prefix: '',
        name: '',
        lastname: '',
        sub_district: '',
        district: '',
        provience: '',
        phone: '',
        email: '',   
        govermentId: '',     
      });

      const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://tip.test/api/tip/register',formData)
        .then(()=>{
            setFormData(formData)
            navigate("/login");
        })
        .catch((err)=>{
            alert('Some thing error maybe You data is duplicate')
            console.log(err)
        })
      };

      const goToHome = e => {
        e.preventDefault();
        navigate("/");
      };
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  
    return (
<div className='bg-image' style={{display:"flex", justifyContent:"center"}}>

    <div className='container'>
        <form onSubmit={handleSubmit} style={{ width: "867px"}}>

        <div class="input-group mb-3" >
            <label class='input-containner form-label'>
      <mark className='star'>*</mark>Username:
                <input class="form-control text-center" type="text" 
                name="username"
                required
                value={formData.username} 
                onChange={handleChange} />
            </label>
        <br/>
            <label class='input-containner form-label'>
            <mark className='star'>*</mark>Password:
                <input class="form-control text-center" type="password" 
                name="password" 
                required
                value={formData.password} 
                onChange={handleChange} />
            </label>
        
            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Prefix:
                <select class="form-select" aria-label="Default select example"
                id="prefix" name="prefix" defaultValue={""} onChange={handleChange} required>
                    <option disabled value="">Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Mr. Boy">Mr. Boy</option>
                    <option value="Miss">Miss</option>
                    <option value="Girl">Girl</option>
                    <option value="Khun">Khun</option>
                </select>
            </label>
        </div>

        <br/>
        <div class="input-group mb-3" >
        
            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>First Name:
                <input class="form-control text-center" type="text" 
                name="name"
                required 
                value={formData.name} 
                onChange={handleChange} />
            </label>
        
            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Last Name:
                <input class="form-control text-center" type="text" 
                name="lastname"
                required 
                value={formData.lastname} 
                onChange={handleChange} />
            </label>
        </div>

        <div class="input-group mb-3" >
            <label class='input-containner form-label' >Phone Number:
                <input class="form-control text-center" type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                pattern="0[0-9]{9}" 
                />
            </label>

            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Email:
                <input class="form-control text-center" type="email" 
                name="email" 
                required
                value={formData.email} 
                onChange={handleChange} />
            </label>

            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Identity:
                    <input class="form-control text-center" type="text" 
                    name="govermentId" 
                    required
                    value={formData.govermentId}
                    pattern="[0-9]{13}"
                    onChange={handleChange} />
            </label>
        </div>
        
        <div class="input-group mb-3" >

            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Sub District:
                <input class="form-control text-center" type="text" 
                name="sub_district" 
                required
                value={formData.sub_district} 
                onChange={handleChange} />
            </label>
        
            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>District:
                <input class="form-control text-center" type="text" 
                name="district" 
                required
                value={formData.district} 
                onChange={handleChange} />
            </label>
        
            <label class='input-containner form-label'  >
            <mark className='star'>*</mark>Province:
                <input class="form-control text-center" type="text" 
                name="provience" 
                required
                value={formData.provience} 
                onChange={handleChange} />
            </label>

        </div>
        
            <button type="submit">Register</button>
            <button onClick={goToHome}>Cancle</button>
        </form>
    </div>
        </div>
    )
  }
    export default Signup;