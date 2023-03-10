import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Css/Signup.css';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        lastname: '',
        prefix: '',
        address: '',
        phone: '',
        email: '',
        registerId: '',
        govermentId: '',
        dateRegister: '',
        packageId: '',
      });

      const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://tip.test/api/tip/register',formData)
        .then(()=>{
            setFormData(formData)
            console.log(formData);
            navigate("/product");
        })
        .catch((err)=>{
            console.log(err)
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
                value={formData.username} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Password:
                <input type="text" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>First Name:
                <input type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Last Name:
                <input type="text" 
                name="lastname" 
                value={formData.lastname} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Prefix:
                <input type="text" 
                name="prefix" 
                value={formData.prefix} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Address:
                <input type="text" 
                name="address" 
                value={formData.address} 
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
                <input type="text" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Register Id:
                <input type="text" 
                name="registerId" 
                value={formData.registerId} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Goverment id:
                <input type="text" 
                name="govermentId" 
                value={formData.govermentId} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Register Date:
                <input type="date" 
                name="dateRegister" 
                value={formData.dateRegister} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Package Id:
                <input type="text" 
                name="packageId" 
                value={formData.packageId} 
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