import {Link, useNavigate} from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar(props) {

    const navigate = useNavigate();

    const logOut = ()=>{
        window.localStorage.removeItem("user");
        // navigate("/");
        window.location.href="/login";
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark test-nav">
      
  <Link class="navbar-brand nav-link text-white"  to="/">Dhipaya</Link>
  <button class="navbar-toggler hamburger " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style={{color : "white"}}></span>
  </button>
  <div class="collapse p-2 navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav  mr-auto">  
            <Link to="/" class="dropdown-item">Home </Link>
    
            {props.userData &&<Link to="/user" class="dropdown-item" >Profile</Link>}
            {props.userData &&<Link to="/list" class="dropdown-item" >History</Link>}
            {props.userData &&<Link to="/login" class="dropdown-item" onClick={logOut} >Log Out</Link>}     
            {!props.userData && <Link to="/login" class="dropdown-item" >Login</Link>}
            {!props.userData && <Link to="/signup" class="dropdown-item" >Register</Link>}     
    </ul>
  </div>
    
  
</nav>

    )
}
export default Navbar;