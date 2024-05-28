// Hopefully claude did this right
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main>
      <div className="container">
        <div className="form-box">
          <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <form>
            <div className="input-group">
              {isSignUp && (
                <div className="input-field" id="nameField">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
              )}
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p>Lost password <a href="#">Click Here!</a></p>
            </div>
            <div className="btn-field">
              <button type="button" id="signupBtn" className={isSignUp ? '' : 'disable'} onClick={toggleSignUp}>
                Sign up
              </button>
              <button type="button" id="signinBtn" className={isSignUp ? 'disable' : ''} onClick={toggleSignUp}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;