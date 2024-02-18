
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin_login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    // Check for the correct username and password
    if (username === 'fdfed31' && password === 'Fdfed#!') {
      // Redirect to the Admin page on successful login
      navigate('/Admin');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
