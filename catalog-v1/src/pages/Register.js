import React, { useState } from 'react';
import './pagesCSS/Login.css';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import FailedSignUp from '../components/componentsJS/SignUpFail.js';

const REGISTER_URL = '/registration';
const VERIFICATION_URL = '/verification';

const Register = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signUpError, setSignUpError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(REGISTER_URL, signUpData);
      console.log(response.data);
      navigate(VERIFICATION_URL);
    } catch (e) {
      setSignUpError(() => <FailedSignUp />);
      console.error("Problem Signing Up", e);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="input-group">
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
            {signUpError}
            <div className="btn-field">
              <button type="submit">Sign Up</button>
              <button type="button" onClick={() => navigate('/login')}>Go to Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
