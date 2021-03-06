import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../../App';
import logo from '../../../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
  <Link className="navbar-brand"to='/'><img  src={logo} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Our Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Our Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Contact Us</Link>
      </li>
      {
        loggedInUser.name ? <li className="nav-item">
        <Button className="nav-link login-btn" onClick={()=>setLoggedInUser({})}>LOGOUT</Button>
      </li> : <li className="nav-item">
        <Link className="nav-link login-btn" to='/login'>Login</Link>
      </li>
      }
      <li className="nav-item">
        <Link className="nav-link login-btn ml-2" to='/admin-dashboard'>Admin</Link>
      </li>
     
   
    </ul>
   
  </div>
</div>
</nav>
    );
};

export default Navbar;