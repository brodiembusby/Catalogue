import React, { useState } from 'react';
import './Login.css';
import api from '../api/axiosConfig';

/**
 * Login Component
 * This component handles both sign-in and sign-up forms.
 */
const Login = () => {
  // State to track if the form is for sign-up or sign-in
  const [isSignUp, setIsSignUp] = useState(false);

  // State to store form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * handleSubmit function
   * Sends the form data to the backend API for registration.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/v1/registration", formData);
      
      // TODO: If this post works then goto link for registration succesful.
      console.log(response.data);
    } catch (error) {
      console.error("Problem with registration", error);
    }
  };

  /**
   * toggleSignUp function
   * This function toggles the form between sign-up and sign-in mode.
   */
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main>
      <div className="container">
        <div className="form-box">
          <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              {/* Conditionally render the Name input fields only for sign-up */}
              {isSignUp && (
                <>
                  <div className="input-field" id="nameField">
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field" id="nameField">
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
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
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p>Lost password <a href="#">Click Here!</a></p>
            </div>
            <div className="btn-field">
              {/* Toggle sign-up/sign-in button */}
              <button
                type="button"
                id="toggleBtn"
                onClick={toggleSignUp}
              >
                {isSignUp ? 'Go to Sign In' : 'Go to Sign Up'}
              </button>
              {/* Submit button */}
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
