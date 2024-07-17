import React from "react";
import "./../componentsCSS/LoginFail.css"

const FailedSignUp = () => {
    return (
      <section className="login-failed">
        Problem Signing Up are you already registered? 
        Check email for verification or try again with
        different credentials
      </section>
    );
  };
export default FailedSignUp