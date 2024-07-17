import React, { useState } from 'react';
import './pagesCSS/Login.css';
import api from '../api/axiosConfig';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import FailedLogin from '../components/componentsJS/LoginFail.js';
import useAuth from '../hooks/useAuth.js';

const LOGIN_URL = '/auth/login';
const USER_URL = '/profile';

const Login = () => {
  
  const { setAuth } = useAuth();
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(LOGIN_URL, 
        JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }), {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true,
            maxRedirects: 0,
          }
        }
      );
      console.log(response.data);
      const accessToken = response?.data.accessToken;
      const role = response?.data.role;
      // Handle authentication and navigate to user profile
      setAuth({
        email: loginData.email,
        password: loginData.password,
        accessToken: accessToken,
        role: role
      });
      setLoginData({
        email: "",
        password: ""
      });

      navigate(USER_URL);
    } catch (e) {
      setLoginError(() => <FailedLogin />);
      console.error("Problem Logging in", e);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="form-box">
          <h1 id="title">Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
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
                  value={loginData.password}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            {loginError}
            <div className="btn-field">
              <button type="submit">Sign In</button>
              <button type="button" onClick={() => navigate('/register')}>Go to Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
