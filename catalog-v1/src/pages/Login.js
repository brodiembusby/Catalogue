import React, { useState } from 'react';
import './Login.css';
import api from '../api/axiosConfig';
import {  useNavigate } from 'react-router-dom';

/**
 * Login Component
 * This component handles both sign-in and sign-up forms.
 */
const Login = () => {
  const navigate = useNavigate();
  const handleVerificationClick = () =>{
    if(isSignUp)
      navigate('/verification');
    else{
      navigate('/UserCollection');
    }
  }

  const [isSignUp, setIsSignUp] = useState(true);
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
      const response = await api.post('/registration', signUpData);
      console.log(response.data);
      handleVerificationClick();
    }
    catch (e){
      console.error("Problem Signing Up", e);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post('/auth/signin', {
        email: signUpData.email,
        password: signUpData.password
      });
      console.log(response.data);
      // toggleSignUp(!isSignUp);
      // handleVerificationClick();
    }
    catch (e){
      console.error("Problem Logging in", e);
    }
  }

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

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
          onChange={handleChange}
        />
      </div>
      <p>Lost password <a href="#">Click Here!</a></p>
    </div>
    {/* Toggle sign-up/sign-in button */}
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
