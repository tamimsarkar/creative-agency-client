import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../images/icons/google.png';
import firebaseConfig from './firebaseConfig';
import './Login.css'
import logo from '../../images/logos/logo.png'
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email,photoURL } = result.user;
      const signedInUser = { name: displayName, email ,photo:photoURL}
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div className="login-page container text-center">
      <Link to='/'> <img className="logo" src={logo} alt=""/></Link>
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-5 login_area m-auto shadow p-5">
         
          <h5>Please Sign In</h5>
          <div className="from-group google__sign__in ">
              <img src={google} alt=""/>
            <button className="btn buton" onClick={handleGoogleSignIn}>Continue with Google</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;