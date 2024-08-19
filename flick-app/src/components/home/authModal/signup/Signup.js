import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onProceed }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        name,
        username,
        email,
        mobileNumber,
        password,
        confirmPassword,
      });

      if (response.data.message) {
        alert(response.data.message);
        if(response.data.message === "User registered successfully! Please verify your email to login.") {
          onProceed(email); // Pass the email to the parent component for the next step
        }
      }
    } catch (error) {
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        const errorMessage = error.response.data.errors.map(err => err.msg).join('\n');
        alert(errorMessage);
      } else {
        // console.error('Signup error:', error);
        alert(error.response.data.message || 'Signup failed. An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
