import React from 'react'
import { useState } from 'react';

// Component for Login
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call, validation)
    // For simplicity, just checking if both fields are filled
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
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
    <div>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

// Parent component for managing login/signup state
const LoginSignUpPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // Perform login logic here (e.g., set user in state, navigate to dashboard)
    setLoggedInUser(username);
  };

  const handleSignup = (username) => {
    // Perform signup logic here (e.g., create user, navigate to dashboard)
    setLoggedInUser(username);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser}!</h2>
          {/* Display user dashboard or other content */}
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default LoginSignUpPage;
