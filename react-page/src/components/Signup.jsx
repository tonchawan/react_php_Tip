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
            console.log(formData);
            navigate("/login");
        })
        .catch((err)=>{
            alert('Some thing error maybe You data is duplicate')
            console.log(err)
            console.log(formData);
        })
      };

      const goToLogin = e => {
        e.preventDefault();
        navigate("/login");
      };

      
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  
    return (

    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" 
                name="username"
                required
                value={formData.username} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Password:
                <input type="text" 
                name="password" 
                required
                value={formData.password} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Prefix:
                <select id="prefix" name="prefix" defaultValue={""} onChange={handleChange}>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Mr. Boy">Mr. Boy</option>
                    <option value="Miss">Miss</option>
                    <option value="Girl">Girl</option>
                </select>
            </label>
        <br/>
            <label>First Name:
                <input type="text" 
                name="name"
                required 
                value={formData.name} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Last Name:
                <input type="text" 
                name="lastname"
                required 
                value={formData.lastname} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Sub District:
                <input type="text" 
                name="sub_district" 
                required
                value={formData.sub_district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>District:
                <input type="text" 
                name="district" 
                required
                value={formData.district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Provience:
                <input type="text" 
                name="provience" 
                required
                value={formData.provience} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Phone Number:
                <input type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Email:
                <input type="email" 
                name="email" 
                required
                value={formData.email} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Goverment id:
                <input type="text" 
                name="govermentId" 
                required
                value={formData.govermentId} 
                onChange={handleChange} />
            </label>
        <br/>
            <button type="submit">Register</button>
            <button onClick={goToLogin}>Login</button>
        </form>
    </div>
    )
  }
    export default Signup;