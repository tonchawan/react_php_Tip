import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Css/Signup.css';

function UserProfile(props) {
    console.log(props.userData);

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
      const user = props.userData

    const handleSubmit = e => {
        e.preventDefault();
        axios.put('http://tip.test/api/tip/register/' + user.id,user)
        .then(()=>{
            setFormData(formData)
            console.log(formData);
            alert('Infomatio change')
        })
        .catch((err)=>{
            alert('Some thing error maybe You data is duplicate')
            console.log(err)
        })
      };

      const goToLogin = e => {
        e.preventDefault();
        navigate("/login");
      };

      
    
      const handleChange = e => {
        const { name, value } = e.target;
        props.setUserData({ ...user, [name]: value });
      };

return (

    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" 
                required
                name="username" 
                value={user.username}
                // defaultValue={user.username}
    
                />
            </label>
        <br/>
            <label>Prefix:
                <input type="text" 
                name="prefix" 
                defaultValue={user.prefix} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>First Name:
                <input type="text" 
                required
                name="name" 
                defaultValue={user.name} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Last Name:
                <input type="text"
                required 
                name="lastname" 
                defaultValue={user.lastname} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Sub District:
                <input type="text" 
                name="sub_district" 
                required
                defaultValue={user.sub_district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>District:
                <input type="text" 
                name="district"
                required
                defaultValue={user.district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Provience:
                <input type="text" 
                name="provience" 
                required
                defaultValue={user.provience} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Phone Number:
                <input type="text" 
                name="phone"
                required
                defaultValue={user.phone} 
                onChange={handleChange} />
            </label>
        <br/>
            <label>Email:
                <input type="email" 
                name="email"
                required 
                defaultValue={user.email} 
                onChange={handleChange} />
            </label>
        <br/>
        <label>Goverment id:
                <input type="text" 
                name="govermentId"
                required 
                value={user.govermentId} 
                onChange={handleChange} />
            </label>
        <br/>
            <button type="submit">Edit Profile</button>
            <button onClick={goToLogin}>Login</button>
        </form>
    </div>
    )
}
export default UserProfile;
