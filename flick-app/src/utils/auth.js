// src/utils/auth.js
// import jwtDecode from 'jwt-decode';
const { default: jwtDecode } = require("jwt-decode");

export const setToken = (token) => {
  localStorage.setItem('jwtToken', token);
};

export const getToken = () => {
  return localStorage.getItem('jwtToken');
};

export const removeToken = () => {
  localStorage.removeItem('jwtToken');
};

export const isAuthenticated = () => {
//   const token = getToken();
//   if (token) {
//     try {
//       const { exp } = jwtDecode(token);
//       if (exp < Date.now() / 1000) {
//         removeToken();
//         return false;
//       }
//       return true;
//     } catch (e) {
//       removeToken();
//       return false;
//     }
//   }
  return false;
};
