function Login() {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
      });

      const handleSubmit = e => {
        e.preventDefault();
        console.log(loginData);
      };
    
      const handleChange = e => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Username:
            <input type="text" 
            name="prefix" 
            value={loginData.username} 
            onChange={handleChange} />
        </label>
    <br/>
        <label>Password:
            <input type="text" 
            name="firstName" 
            value={loginData.password} 
            onChange={handleChange} />
        </label>
    <br/>
       
    
        <button type="submit">Register</button>
    </form>
</div>
      )
}

export default Login;
