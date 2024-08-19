import React, { useState } from 'react';
import Login from './login/Login';
import Signup from './signup/Signup';
import ForgotPassword from './forgotPassword/ForgotPassword';
import VerifyEmail from './verifyEmail/VerifyEmail';
import ResetPassword from './resetPassword/ResetPassword';
import { FaTimes } from 'react-icons/fa';

const AuthModal = ({ isModalOpen, onClose }) => {
  const [activeComponent, setActiveComponent] = useState('login');
  // const [activeComponent, setActiveComponent] = useState('signup');
  // const [activeComponent, setActiveComponent] = useState('forgotPassword');
  // const [activeComponent, setActiveComponent] = useState('verifyEmail');
  // const [activeComponent, setActiveComponent] = useState('resetPassword');
  const [emailForReset, setEmailForReset] = useState('');
  const [emailForVerification, setEmailForVerification] = useState('');
  
  if (!isModalOpen) return null;
  const renderComponent = () => {
    switch (activeComponent) {
      case 'login':
        return <Login onForgotPassword={() => setActiveComponent('forgotPassword')} onClose={onClose} />;
      case 'signup':
        return <Signup onClose={onClose} onProceed={(email) => {
          setEmailForVerification(email);
          setActiveComponent('verifyEmail');
        }}/>;
      case 'forgotPassword':
        return (
          <ForgotPassword
            onBack={() => setActiveComponent('login')}
            onProceed={(email) => {
              setEmailForReset(email);
              setActiveComponent('resetPassword');
            }}
          />
        );
      case 'verifyEmail':
        return <VerifyEmail onBack={() => setActiveComponent('login')} email={emailForVerification}/>;
      case 'resetPassword':
        return <ResetPassword onBack={() => setActiveComponent('login')} email={emailForReset} />;
      default:
        return <Login onForgotPassword={() => setActiveComponent('forgotPassword')} onClose={onClose} />;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
        <FaTimes />
        </button>
        {renderComponent()}
        <div className="flex justify-center mt-4 bottom-2 left-0 right-0">
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeComponent !== 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveComponent('login')}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 rounded-tl-lg rounded-tr-lg ${activeComponent === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveComponent('signup')}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;