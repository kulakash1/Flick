import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState({ imageUrl: '', title: '', byPerson: '', description: '', link: '' });
    const [editingArticle, setEditingArticle] = useState(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/articlelist`);
            setArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleAddArticle = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/articlelist`, newArticle);
            setArticles([...articles, response.data]);
            setNewArticle({ imageUrl: '', title: '', byPerson: '', description: '', link: '' });
        } catch (error) {
            console.error('Error adding article:', error);
        }
    };

    const handleUpdateArticle = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/users/articlelist/${editingArticle.id}`, editingArticle);
            setArticles(articles.map(article => (article.id === editingArticle.id ? editingArticle : article)));
            setEditingArticle(null);
        } catch (error) {
            console.error('Error updating article:', error);
        }
    };

    const handleDeleteArticle = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/articlelist/${id}`);
            setArticles(articles.filter(article => article.id !== id));
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Articles</h1>

            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Add New Article</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="border p-2 rounded"
                        value={newArticle.imageUrl}
                        onChange={(e) => setNewArticle({ ...newArticle, imageUrl: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="border p-2 rounded"
                        value={newArticle.title}
                        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="By Person"
                        className="border p-2 rounded"
                        value={newArticle.byPerson}
                        onChange={(e) => setNewArticle({ ...newArticle, byPerson: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="border p-2 rounded"
                        value={newArticle.description}
                        onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        className="border p-2 rounded"
                        value={newArticle.link}
                        onChange={(e) => setNewArticle({ ...newArticle, link: e.target.value })}
                    />
                    <button
                        className="bg-blue-500 text-white p-2 rounded flex items-center"
                        onClick={handleAddArticle}
                    >
                        <FaPlus className="mr-2" /> Add Article
                    </button>
                </div>
            </div>

            {editingArticle && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Edit Article</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="border p-2 rounded"
                            value={editingArticle.imageUrl}
                            onChange={(e) => setEditingArticle({ ...editingArticle, imageUrl: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            className="border p-2 rounded"
                            value={editingArticle.title}
                            onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="By Person"
                            className="border p-2 rounded"
                            value={editingArticle.byPerson}
                            onChange={(e) => setEditingArticle({ ...editingArticle, byPerson: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="border p-2 rounded"
                            value={editingArticle.description}
                            onChange={(e) => setEditingArticle({ ...editingArticle, description: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Link"
                            className="border p-2 rounded"
                            value={editingArticle.link}
                            onChange={(e) => setEditingArticle({ ...editingArticle, link: e.target.value })}
                        />
                        <button
                            className="bg-yellow-500 text-white p-2 rounded flex items-center"
                            onClick={handleUpdateArticle}
                        >
                            <FaEdit className="mr-2" /> Update Article
                        </button>
                    </div>
                </div>
            )}

            <div>
                <h2 className="text-xl font-semibold mb-2">Article List</h2>
                <div className="grid grid-cols-1 gap-4">
                    {articles.map((article) => (
                        <div key={article.id} className="border p-4 rounded shadow">
                            <img src={article.imageUrl} alt={article.title} className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="text-lg font-semibold">{article.title}</h3>
                            <p className="text-sm text-gray-600">By {article.byPerson}</p>
                            <p className="mt-2">{article.description}</p>
                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">Read more</a>
                            <button
                                className="bg-red-500 text-white p-2 rounded mt-2 flex items-center"
                                onClick={() => handleDeleteArticle(article.id)}
                            >
                                <FaTrash className="mr-2" /> Delete
                            </button>
                            <button
                                className="bg-green-500 text-white p-2 rounded mt-2 flex items-center"
                                onClick={() => setEditingArticle(article)}
                            >
                                <FaEdit className="mr-2" /> Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
