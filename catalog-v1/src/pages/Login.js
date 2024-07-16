import React, { useState , useContext} from 'react';
import './Login.css';
import api from '../api/axiosConfig';
import {  useNavigate } from 'react-router-dom';
import "../components/failedItems/LoginFail.js"
import FailedLogin from '../components/failedItems/LoginFail.js';
import FailedSignUp from '../components/failedItems/SignUpFail.js';

import AuthContext from '../context/AuthProvider.js';

const LOGIN_URL = '/auth/login';
const REGISTER_URL = '/registration';
const VERFICATION_URL = '/verification';
const USER_URL = '/profile';

/**
 * Login Component
 * This component handles both sign-in and sign-up forms.
 */
const Login = () => {
  
  const navigate = useNavigate();
  const[caughtComponent, setCaughtComponent] = useState(null);
  const [isSignUp, setIsSignUp] = useState(true);
  const {setAuth} = useContext(AuthContext);
  
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const handleVerificationClick = () =>{
    if(isSignUp)
      navigate(VERFICATION_URL);
    else{
      navigate(USER_URL);
    }
  }
  
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post(REGISTER_URL, signUpData);
      console.log(response.data);
      handleVerificationClick();
    }
    catch (e){
      setCaughtComponent(() => <FailedSignUp />)
      console.error("Problem Signing Up", e);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(LOGIN_URL, 
        JSON.stringify({
          email: signUpData.email,
          password: signUpData.password
        }), {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
            maxRedirects: 0
          }
        }
      );
      console.log(response.data);
      // const accessToken = response?.data.accessToken;
      // const roles = response?.data.roles;
      // setAuth({
      //   email: signUpData.email, 
      //   password: signUpData.password, 
      //   name: signUpData.firstName + " " + signUpData.lastName,
      // });

      toggleSignUp(!isSignUp);
      // handleVerificationClick();
    } catch (e) {
      if(!isSignUp){
        setCaughtComponent(() => <FailedLogin />)
      }
      console.error("Problem Logging in", e);
    }
  }

  return (
    <main>
  <div className="container">
    <div className="form-box">
      <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
    <div className="input-group">
      {/* Conditionally render the Name input fields only for sign-up */}
      {isSignUp && (
        <>
          {/* First Name input field */}
          <div className="input-field" id="nameField">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={signUpData.firstName}
              required
              onChange={handleChange}
            />
          </div>
          {/* Last Name input field */}
          <div className="input-field" id="nameField">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={signUpData.lastName}
              required
              onChange={handleChange}
            />
          </div>
        </>
      )}
      {/* Email input field */}
      <div className="input-field">
        <i className="fa-solid fa-envelope"></i>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpData.email}
          required
          onChange={handleChange}
        />
      </div>
      {/* Password input field */}
      <div className="input-field">
        <i className="fa-solid fa-lock"></i>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpData.password}
          required
          onChange={handleChange}
        />
      </div>
    </div>
    {/* Toggle sign-up/sign-in button */}
    {caughtComponent}
    <div className="btn-field">
      <button
        type="button"
        id="toggleBtn"
        onClick={toggleSignUp}
      >
        {isSignUp ? 'Go to Sign In' : 'Go to Sign Up'}
      </button>
      <button type="submit">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
      </form>
    </div>
  </div>
    </main>
  );
};

export default Login;
