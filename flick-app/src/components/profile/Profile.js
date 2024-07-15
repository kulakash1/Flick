import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: ''
        // Add more fields as needed
    });

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
            setUser(response.data);
            setFormData({
                name: response.data.name,
                email: response.data.email,
                bio: response.data.bio
                // Initialize more fields from response as needed
            });
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/api/users/${userId}`, formData);
            fetchUser();
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {user ? (
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold">{user.name}'s Profile</h1>
                        <button
                            onClick={() => setEditMode(!editMode)}
                            className="bg-blue-500 text-white p-2 rounded"
                        >
                            <FaEdit /> Edit
                        </button>
                    </div>
                    <div className="mb-4">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Bio:</strong> {user.bio}</p>
                        {/* Add more profile fields as needed */}
                    </div>
                    {editMode && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="border p-2 w-full"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="border p-2 w-full"
                                required
                            />
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleInputChange}
                                placeholder="Bio"
                                className="border p-2 w-full h-32"
                            ></textarea>
                            {/* Add more fields for editing */}
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                                Save Changes
                            </button>
                        </form>
                    )}
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
};

export default Profile;
