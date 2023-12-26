// Import necessary dependencies
import React, { useState } from 'react';
import './CSS/LoginSignup.css'

// Component for Login
const Login = ({ onLogin, loginError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Pass the username and password to the onLogin handler
    onLogin(username, password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {loginError && <p className="error-message">Invalid username or password.</p>}
      <div>
        <label>Username:</label>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="action-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};


// Component for Signup
const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here (e.g., API call, validation)
    // For simplicity, just checking if both fields are filled
    if (username && password) {
      onSignup(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="action-button" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

// Parent component for managing login/signup state
const LoginSignupPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([
    // Hardcoded user data for demonstration purposes
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ]);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate authentication by checking hardcoded credentials
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setLoggedInUser(username);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleSignup = (username) => {
    // Perform signup logic here (e.g., create user, navigate to dashboard)
    setLoggedInUser(username);
  };

  return (
    <div className="page-container">
      {loggedInUser ? (
        <div className="welcome-container">
          <h2>Welcome, {loggedInUser}!</h2>
          {/* Display user dashboard or other content */}
        </div>
      ) : (
        <div className="form-container">
          <Login onLogin={handleLogin} loginError={loginError} />
          <Signup onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default LoginSignupPage;
