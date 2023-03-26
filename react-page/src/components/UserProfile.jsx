import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Css/Signup.css';

function UserProfile(props) {

    const navigate = useNavigate();

    const user = JSON.parse(window.localStorage.getItem("user"));
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

        console.log(props.userData, "X");
        e.preventDefault();
        axios.put('http://tip.test/api/tip/register/' + user.id,props.userData)
        .then((res)=>{
            setFormData(formData)
            window.localStorage.setItem("user", JSON.stringify(props.userData))
            alert('Information change')
        })
        .catch((err)=>{
            alert('Some thing error maybe You data is duplicate')
            console.log(err)
        })
      };

    
      const handleChange = e => {
        const { name, value } = e.target;
        props.setUserData({ ...user, [name]: value });
      };

return (

    <div>
        <div>
        <p>Username :{user.username}</p>   
        <br/>
        <p>Register Date :{user.created_at.toString().split("T")[0]}</p>   
        </div>
        <form onSubmit={handleSubmit}>
            
            <label> <span>*</span>Prefix:
                    <input type="text" 
                    name="prefix" 
                    defaultValue={user.prefix} 
                    onChange={handleChange} />
            </label>
        <br/>
            <label><span>*</span>First Name:
                <input type="text" 
                required
                name="name" 
                defaultValue={user.name} 
                onChange={handleChange} />
            </label>
        <br/>
            <label><span>*</span>Last Name:
                <input type="text"
                required 
                name="lastname" 
                defaultValue={user.lastname} 
                onChange={handleChange} />
            </label>
        <br/>
        <label><span>*</span>Sub District:
                <input type="text" 
                name="sub_district" 
                required
                defaultValue={user.sub_district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label><span>*</span>District:
                <input type="text" 
                name="district"
                required
                defaultValue={user.district} 
                onChange={handleChange} />
            </label>
        <br/>
        <label><span>*</span>Province:
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
                defaultValue={user.phone}
                pattern="0[0-9]{9}" 
                onChange={handleChange} />
            </label>
        <br/>
            <label><span>*</span>Email:
                <input type="email" 
                name="email"
                required 
                defaultValue={user.email} 
                onChange={handleChange} />
            </label>
        <br/>
        <label><span>*</span>Identity:
                <input type="text" 
                name="govermentId"
                required 
                defaultValue={user.govermentId}
                pattern="[0-9]{13}"
                onChange={handleChange} />
            </label>
        <br/>
            <button type="submit">Edit Profile</button>
        </form>
    </div>
    )
}
export default UserProfile;
