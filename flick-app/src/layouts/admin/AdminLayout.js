import React from 'react';
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar';
import Header from '../../components/admin/adminNavbar/header/Header';

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
