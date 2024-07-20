import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import cancel icon

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
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

const LoginTab = ({ onForgotPassword }) => (
  <div>
    <h2 className="text-2xl mb-4">Login</h2>
    <form>
      <input
        type="email"
        placeholder="Email"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Login
      </button>
      <div className="text-center mt-4">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onForgotPassword();
        }} className="text-blue-500">Forgot password?</a>
      </div>
    </form>
  </div>
);

const SignupTab = () => (
  <div>
    <h2 className="text-2xl mb-4">Signup</h2>
    <form>
      <input
        type="text"
        placeholder="Name"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
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

const ForgotPasswordTab = ({ onBack }) => (
  <div>
    <h2 className="text-2xl mb-4">Forgot Password</h2>
    <form>
      <input
        type="email"
        placeholder="Enter your email"
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

export default AuthModal;
