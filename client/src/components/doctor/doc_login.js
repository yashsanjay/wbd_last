// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUserName } from '../../action/action'; // Replace with the correct path
// import { useNavigate } from 'react-router-dom';
// import './doc_login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [doctorId, setDoctorId] = useState('');
//   const [email, setEmail] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const handleLogin = () => {
//     // Simple password validation (customize as needed)
//     const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
//       password
//     );

//     if (!isValidPassword) {
//       setPasswordError(
//         'Password should contain at least 6 characters, including a number, a capital letter, a small letter, and a special character.'
//       );
//       return;
//     }

//     // Clear password error if valid
//     setPasswordError('');

//     // Email validation
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//     if (!isValidEmail) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     // Clear email error if valid
//     setEmailError('');

//     // Perform authentication logic here
//     console.log(`Name: ${name}, Password: ${password}, Doctor ID: ${doctorId}, Email: ${email}`);

//     // Dispatch the setUserName action with the entered name
//     dispatch(setUserName(name));

//     // Redirect to /doc_profile using useNavigate
//     navigate('/doc_profile');
//   };

//   return (
//     <div className="login">
//       <h1>Login Here!!</h1>
//       <form className="login__form">
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//           {emailError && <p className="error-message">{emailError}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && <p className="error-message">{passwordError}</p>}
//         </div>
//         {/* <div>
//           <label>Doctor ID:</label>
//           <input
//             type="text"
//             value={doctorId}
//             onChange={(e) => setDoctorId(e.target.value)}
//           />
//         </div> */}
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { login } from '../../action/authAction';
import { setUserName } from '../../action/action';
// import { setUserName } from '../../action/action';
import './doc_login.css'

const Login = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch login action with username
        dispatch(login(username));

        // Dispatch setUserName action to update the userName in the Redux state
        dispatch(setUserName(username));
    // history.push('/home');
    navigate('/doc_profile');
  };

  return (
    <div class="login-container">
  <h1 class="login-title">Login</h1>
  <form onSubmit={handleSubmit} class="login-form">
    <label class="username-label">Username:</label>
    <input required
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      class="username-input"
    />
    <br />
    <label class="password-label">Password:</label>
    <input required
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      class="password-input"
    />
    <br />
    <button type="submit" class="submit-button">Submit</button>
  </form>
</div>

  );
};

export default Login;
