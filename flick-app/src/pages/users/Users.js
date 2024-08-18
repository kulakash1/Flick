import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', username: '', email: '', mobileNumber: '', password: '', confirmPassword: '' });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users.');
    }
  };

  const handleCreateUser = async () => {
    if (newUser.password !== newUser.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      fetchUsers();
      setNewUser({ name: '', username: '', email: '', mobileNumber: '', password: '', confirmPassword: '' });
      setError(null);
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Failed to create user.');
    }
  };

  const handleUpdateUser = async () => {
    if (!selectedUser) return;
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/auth/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUser),
      });
      fetchUsers();
      setSelectedUser(null);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user.');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/auth/users/${id}`, {
        method: 'DELETE',
      });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditing(true);
  };

  const handleSelectedUserChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Create New User</h2>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="border rounded p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          name="mobileNumber"
          value={newUser.mobileNumber}
          onChange={handleInputChange}
          placeholder="Mobile Number"
          className="border rounded p-2 mr-2"
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="border rounded p-2 mr-2"
        />
        <input
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
          className="border rounded p-2 mr-2"
        />
        <button
          onClick={handleCreateUser}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>
      {editing && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={handleSelectedUserChange}
            placeholder="Name"
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="username"
            value={selectedUser.username}
            onChange={handleSelectedUserChange}
            placeholder="Username"
            className="border rounded p-2 mr-2"
          />
          <input
            type="email"
            name="email"
            value={selectedUser.email}
            onChange={handleSelectedUserChange}
            placeholder="Email"
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="mobileNumber"
            value={selectedUser.mobileNumber}
            onChange={handleSelectedUserChange}
            placeholder="Mobile Number"
            className="border rounded p-2 mr-2"
          />
          <button
            onClick={handleUpdateUser}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      )}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by name or email"
          className="border rounded p-2"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEditClick(user)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
