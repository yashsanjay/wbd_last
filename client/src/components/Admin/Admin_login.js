
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin_login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  // const history = useHistory();
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Check for the correct username and password
    if (username === 'fdfed31' && password === 'Fdfed#!') {
      // Check if the password and confirm password match
      if (password === confirmPassword) {
        // Redirect to the Admin page on successful login
        navigate('/Admin');
      } else {
        setError('Password and confirm password do not match');
      }
    } else {
      setError('Invalid username or password');
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
        <div className="form-group">
  <label htmlFor="confirmPassword">Confirm Password:</label>
  <input
    type="password"
    id="confirmPassword"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="confirm-password-input"
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
