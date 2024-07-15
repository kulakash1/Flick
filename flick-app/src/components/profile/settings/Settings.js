import React, { useState } from 'react';
import axios from 'axios';

const Settings = ({ userId }) => {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/api/users/${userId}/password`, passwordData);
            setSuccessMessage(response.data.message);
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
        } catch (error) {
            setErrorMessage(error.response.data.error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Profile Settings</h1>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                {successMessage && <div className="bg-green-100 text-green-700 p-4 rounded mb-4">{successMessage}</div>}
                {errorMessage && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{errorMessage}</div>}
                <form onSubmit={handlePasswordChange} className="space-y-4">
                    <input
                        type="password"
                        name="currentPassword"
                        value={passwordData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Current Password"
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handleInputChange}
                        placeholder="New Password"
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        className="border p-2 w-full"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
