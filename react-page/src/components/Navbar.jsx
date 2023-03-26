import {Link, useNavigate} from 'react-router-dom';


function Navbar(props) {

    const navigate = useNavigate();

    const logOut = ()=>{
        window.localStorage.removeItem("user");
        // navigate("/");
        window.location.href="/login";
    }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
  <Link class="navbar-brand nav-link" to="/">Logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
        </a>
        <div class="dropdown-menu " aria-labelledby="navbarDropdown">
            <Link to="/" class="dropdown-item">Home </Link>
            {props.userData &&<Link to="/user" class="dropdown-item" >Profile</Link>}
            {props.userData &&<Link to="/list" class="dropdown-item" >History</Link>}
            {props.userData &&<Link to="/login" class="dropdown-item" onClick={logOut} >Log Out</Link>}     
            {!props.userData && <Link to="/login" class="dropdown-item" >Login</Link>}
            {!props.userData && <Link to="/signup" class="dropdown-item" >Register</Link>}
        </div>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar;