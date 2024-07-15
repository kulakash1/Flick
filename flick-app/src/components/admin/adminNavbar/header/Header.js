// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <input type="text" placeholder="Search..." className="search-bar p-2 rounded" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </header>
  );
}

export default Header;
