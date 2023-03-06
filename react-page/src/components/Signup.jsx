import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        prefix: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
      });

      const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
      };
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  
    return (

    <div>
        <form onSubmit={handleSubmit}>
            <label>Prefix:
                <input type="text" 
                name="prefix" 
                value={formData.prefix} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>First Name:
                <input type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Last Name:
                <input type="text" 
                name="lastName" 
                value={formData.lastName} 
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
                name="phoneNumber" 
                value={formData.phoneNumber} 
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
            <button type="submit">Register</button>
        </form>
    </div>
    )
  }
    export default Signup;