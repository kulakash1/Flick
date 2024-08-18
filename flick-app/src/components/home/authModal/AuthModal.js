import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isVerifyEmail, setIsVerifyEmail] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');

  if (!isOpen) return null;

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setIsVerifyEmail(false);
    setIsResetPassword(false);
  };

  const handleTabSwitch = (isLogin) => {
    setIsLogin(isLogin);
    handleBackToLogin();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <div className="mb-4">
          {isVerifyEmail ? (
            <VerifyEmailTab onBack={handleBackToLogin} />
          ) : isForgotPassword ? (
            <ForgotPasswordTab
              onBack={handleBackToLogin}
              onProceed={(email) => {
                setEmailForReset(email);
                setIsVerifyEmail(true);
              }}
            />
          ) : isResetPassword ? (
            <ResetPasswordTab onBack={handleBackToLogin} email={emailForReset} />
          ) : isLogin ? (
            <LoginTab onForgotPassword={() => setIsForgotPassword(true)} onClose={onClose} />
          ) : (
            <SignupTab />
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabSwitch(true)}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabSwitch(false)}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginTab = ({ onForgotPassword, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });

      if (response.data.message === 'Login successful!') {
        // alert(response.data.message);
        console.log('Logged in successfully');
        onClose(); // Close the modal on successful login
      }
    } 
    catch (error) {
      // console.error('Login error:', error);
  
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        // If errors are an array, combine all error messages into one string
        const errorMessage = error.response.data.errors.map(err => err.msg).join('\n');
        alert(errorMessage);
      } else {
        // Fallback to a general error message
        alert(error.response.data.error || 'An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <>
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
    </>
  );
};

const SignupTab = () => {
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
      }
    } catch (error) {
      console.error('Signup error:', error);
      // alert('Signup failed. Please try again.');
      alert(error.response.data.message);
    }
  };

  return (
    <>
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
    </>
  );
};

const ForgotPasswordTab = ({ onBack, onProceed }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, { email });

      if (response.data.message) {
        alert(response.data.message);
        onProceed(email); // Pass the email to the parent component for the next step
      }
    } catch (error) {
      console.error('Forgot password error:', error);
  
      if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
        // If errors are an array, combine all error messages into one string
        const errorMessage = error.response.data.errors.map(err => err.msg).join('\n');
        alert(errorMessage);
      } else {
        // Fallback to a general error message
        alert(error.response.data.message || 'An unexpected error occurred');
      }
    }
  };

  return (
    <>
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
    </>
  );
};

const VerifyEmailTab = ({ onBack }) => {
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
    <>
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
    </>
  );
};

const ResetPasswordTab = ({ onBack, email }) => {
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
      console.error('Reset password error:', error);
      alert('Password reset failed. Please try again.');
    }
  };

  return (
    <>
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
    </>
  );
};

export default AuthModal;
