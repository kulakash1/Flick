import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onForgotPassword, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });

      if (response.data.message === 'Login successful!') {
        console.log('Logged in successfully');
        onClose(); // Close the modal on successful login
      }
    } catch (error) {
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        const errorMessage = error.response.data.errors.map(err => err.msg).join('\n');
        alert(errorMessage);
      } else {
        alert(error.response.data.error || 'An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="text-blue-500 py-2 w-full"
        onClick={onForgotPassword}
      >
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
