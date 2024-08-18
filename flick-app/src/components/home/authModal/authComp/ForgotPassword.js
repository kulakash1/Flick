import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ onBack, onProceed }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, { email });

      if (response.data.message) {
        alert(response.data.message);
        onProceed(email); // Pass the email to the parent component for the next step
      }
    } catch (error) {
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        const errorMessage = error.response.data.errors.map(err => err.msg).join('\n');
        alert(errorMessage);
      } else {
        alert(error.response.data.message || 'An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        onClick={handleForgotPassword}
      >
        Send Reset Code
      </button>
      <button
        className="text-blue-500 py-2 w-full"
        onClick={onBack}
      >
        Back to Login
      </button>
    </div>
  );
};

export default ForgotPassword;
