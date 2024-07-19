import React from 'react';
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar';
import Header from '../../components/admin/adminNavbar/header/Header';
import { Outlet } from 'react-router-dom';

function AdminLayout({ children }) {
  return (
    <div className="flex flex-col">
      <AdminNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
