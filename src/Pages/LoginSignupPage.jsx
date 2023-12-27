import React from "react";
import "./CSS/LoginSignupPage.css";

const LoginSignupPage = () => {
  return (
    <div>
      <div className="login-signup">
        <div className="login-signup-container">
          <h1>Sign Up</h1>
          <div className="login-signup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Continue</button>
          <p className="login-signup-login">
            Already have an account?<span>Login here</span>
          </p>
          <div className="login-signup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of Use & Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
