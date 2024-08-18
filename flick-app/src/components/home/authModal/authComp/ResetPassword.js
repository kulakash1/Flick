import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ onBack, email }) => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/reset-password`, {
        email,
        otp,
        newPassword,
        confirmPassword,
      });

      if (response.data.message) {
        alert(response.data.message);
        onBack();
      }
    } catch (error) {
      // console.error('Reset errior:',error);
      alert(error.response.data.message || 'Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-2 mb-2 border rounded-lg"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
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
        onClick={handleResetPassword}
      >
        Reset Password
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

export default ResetPassword;
