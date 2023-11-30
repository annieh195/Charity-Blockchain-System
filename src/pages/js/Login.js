import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        if (response.ok) {
          console.log('Registration successful');
          setIsRegistering(false);
        } else {
          console.log('Registration failed');
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    } else {
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        if (response.ok) {
          console.log('Login successful');
          navigate('/');
        } else {
          console.log('Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      {isRegistering ? (
        <p>Already have an account? <span onClick={() => setIsRegistering(false)}>Login here</span></p>
      ) : (
        <p>Don't have an account? <span onClick={() => setIsRegistering(true)}>Register here</span></p>
      )}
    </div>
  );
}

export default Login;
