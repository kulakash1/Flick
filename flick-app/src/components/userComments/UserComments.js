import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

const UserComments = () => {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        commentId: '',
        criticName: '',
        profileImage: '',
        movieTitle: '',
        movieImage: '',
        movieYear: '',
        movieRatings: '',
        userComment: '',
        seeMoreLink: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/users/commentlist');
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
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
            if (editMode) {
                await axios.put(`http://localhost:3001/api/users/commentlist/${formData.commentId}`, formData);
            } else {
                await axios.post('http://localhost:3001/api/users/commentlist', formData);
            }
            fetchComments();
            setFormData({
                commentId: '',
                criticName: '',
                profileImage: '',
                movieTitle: '',
                movieImage: '',
                movieYear: '',
                movieRatings: '',
                userComment: '',
                seeMoreLink: ''
            });
            setEditMode(false);
        } catch (error) {
            console.error(`Error ${editMode ? 'updating' : 'creating'} comment:`, error);
        }
    };

    const handleEdit = (comment) => {
        setFormData(comment);
        setEditMode(true);
    };

    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3001/api/users/commentlist/${commentId}`);
            fetchComments();
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const handleSort = () => {
        const sortedComments = [...comments].sort((a, b) => {
            const nameA = a.criticName.toLowerCase();
            const nameB = b.criticName.toLowerCase();
            if (sortOrder === 'asc') {
                return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
            } else {
                return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
            }
        });
        setComments(sortedComments);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredComments = comments.filter(comment =>
        comment.criticName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = filteredComments.slice(indexOfFirstComment, indexOfLastComment);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">User Comments</h1>

            <div className="mb-8">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by critic name or movie title"
                    className="border p-2 w-full mb-4 text-black"
                />
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="commentId"
                        value={formData.commentId}
                        onChange={handleInputChange}
                        placeholder="Comment ID"
                        className="border p-2 text-black"
                        required
                    />
                    <input
                        type="text"
                        name="criticName"
                        value={formData.criticName}
                        onChange={handleInputChange}
                        placeholder="Critic Name"
                        className="border p-2 text-black"
                    />
                    <input
                        type="text"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleInputChange}
                        placeholder="Profile Image"
                        className="border p-2 text-black"
                    />
                    <input
                        type="text"
                        name="movieTitle"
                        value={formData.movieTitle}
                        onChange={handleInputChange}
                        placeholder="Movie Title"
                        className="border p-2 text-black"
                    />
                    <input
                        type="text"
                        name="movieImage"
                        value={formData.movieImage}
                        onChange={handleInputChange}
                        placeholder="Movie Image"
                        className="border p-2 text-black"
                    />
                    <input
                        type="text"
                        name="movieYear"
                        value={formData.movieYear}
                        onChange={handleInputChange}
                        placeholder="Movie Year"
                        className="border p-2 text-black"
                    />
                    <input
                        type="text"
                        name="movieRatings"
                        value={formData.movieRatings}
                        onChange={handleInputChange}
                        placeholder="Movie Ratings"
                        className="border p-2 text-black"
                    />
                    <textarea
                        name="userComment"
                        value={formData.userComment}
                        onChange={handleInputChange}
                        placeholder="User Comment"
                        className="border p-2 text-black"
                    ></textarea>
                    <input
                        type="text"
                        name="seeMoreLink"
                        value={formData.seeMoreLink}
                        onChange={handleInputChange}
                        placeholder="See More Link"
                        className="border p-2 text-black"
                    />
                    <button type="submit" className="mt-4 bg-blue-500 text-white p-2 w-full">
                        {editMode ? 'Update Comment' : 'Add Comment'}
                    </button>
                </form>
            </div>

            <div className="mb-4 flex justify-end">
                <button onClick={handleSort} className="bg-gray-500 text-white p-2 rounded flex items-center">
                    Sort by Critic Name {sortOrder === 'asc' ? <FaSortAlphaDown className="ml-2" /> : <FaSortAlphaUp className="ml-2" />}
                </button>
            </div>

            <div>
                {currentComments.map(comment => (
                    <div key={comment.commentId} className="border p-4 mb-4 rounded-lg shadow-md bg-gray-100">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">{comment.criticName}</h2>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleEdit(comment)}
                                    className="bg-yellow-500 text-white p-2 rounded"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(comment.commentId)}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                        <img
                            src={comment.profileImage}
                            alt={`${comment.criticName}'s profile`}
                            className="w-16 h-16 rounded-full mt-2"
                        />
                        <h3 className="text-lg mt-4">{comment.movieTitle} ({comment.movieYear})</h3>
                        <img
                            src={comment.movieImage}
                            alt={comment.movieTitle}
                            className="w-32 h-48 mt-2"
                        />
                        <p className="mt-2">Rating: {comment.movieRatings}</p>
                        <p className="mt-2">{comment.userComment}</p>
                        <a
                            href={comment.seeMoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 mt-2 inline-block"
                        >
                            See More
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-500 text-white p-2 rounded mx-2"
                >
                    Previous
                </button>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={indexOfLastComment >= filteredComments.length}
                    className="bg-gray-500 text-white p-2 rounded mx-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserComments;
