import React, { useState } from 'react';
import { useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import '../Css/Login.css';

function Login(props) {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
      });

      const handleChange = e => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };

      const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://tip.test/api/login',loginData)
        .then((res)=>{
          props.setUserData(res.data.data)
          console.log(res.data.data);
            navigate("/product");
        })
        .catch((err)=>{
            console.log(err)
        })
      };

      const goToSignup = e => {
        navigate("/signup");
      };
    

    return (
    <div>

      <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />



        <form onSubmit={handleSubmit}>
        <label>Username:
            <input type="text" 
            name="username"
            required
            value={loginData.username} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Password:
            <input type="password" 
            name="password" 
            required
            value={loginData.password} 
            onChange={handleChange} />
        </label>
    <br/>
        <button type="submit">Login</button>
    </form>
        <Link to={'/signup'}>Register</Link>
        
</div>
      )
}

export default Login;