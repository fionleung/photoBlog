//jshint esversion:6

import React, {useState} from "react";
import {
  Redirect,

} from 'react-router-dom';

import {GoogleLogin} from 'react-google-login';

require('dotenv').config();

 function Login(props){
   const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = useState(false);

   const onSuccess=async data=>{
     const res = await props.handleLogin(data);
     if(res) setRedirectToReferrer(true);
   }

   if (redirectToReferrer === true) {
    return <Redirect to='/compose' />
  }

   const onFailure=(res)=>{
     console.log(res);
   }

  return (
    <div>
  <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'} />
</div>
)
}

export default Login;
