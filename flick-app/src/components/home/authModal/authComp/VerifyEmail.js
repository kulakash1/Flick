import React, { useState } from 'react';
import axios from 'axios';

const VerifyEmail = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleVerifyEmail = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/verify-email`, { email, otp });

      if (response.data.message) {
        alert(response.data.message);
        onBack();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Verify Email</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-2 mb-4 border rounded-lg"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        onClick={handleVerifyEmail}
      >
        Verify
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

export default VerifyEmail;
