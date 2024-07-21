import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  if (!isOpen) return null;

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
          {isForgotPassword ? (
            <ForgotPasswordTab onBack={() => setIsForgotPassword(false)} />
          ) : isLogin ? (
            <LoginTab onForgotPassword={() => setIsForgotPassword(true)} />
          ) : (
            <SignupTab />
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${
              isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => {
              setIsLogin(true);
              setIsForgotPassword(false);
            }}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${
              !isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => {
              setIsLogin(false);
              setIsForgotPassword(false);
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginTab = ({ onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // console.log('email:', email,  'password:',  password);
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      alert(response.data.message);
      // handle successful login (e.g., set user context, close modal, etc.)
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onForgotPassword();
            }}
            className="text-blue-500"
          >
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

const SignupTab = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/signup', {
        name,
        username,
        email,
        mobileNumber,
        password,
        confirmPassword,
      });
      alert(response.data.message);
      // handle successful signup (e.g., set user context, close modal, etc.)
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

const ForgotPasswordTab = ({ onBack }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/forgot-password', { email });
      alert(response.data.message);
      onBack(); // Go back to login tab after sending the email
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Send Password Reset Link
        </button>
        <div className="text-center mt-4">
          <button onClick={onBack} className="text-blue-500">Back to Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthModal;
