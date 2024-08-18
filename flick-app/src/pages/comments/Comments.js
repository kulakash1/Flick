import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentComment, setCurrentComment] = useState({
    commentId: "",
    movieImage: "",
    profileImage: "",
    movieTitle: "",
    movieYear: "",
    movieRating: 0, // Ensure this is a number
    criticName: "",
    userComment: "",
    seeMoreLink: "",
  });

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/commentlist`);
      setComments(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/commentlist/${id}`);
      setComments(comments.filter(comment => comment.commentId !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/commentlist/${id}`, currentComment);
      setComments(comments.map(comment => comment.commentId === id ? response.data : comment));
      setIsEditing(false);
      setCurrentComment({
        commentId: "",
        movieImage: "",
        profileImage: "",
        movieTitle: "",
        movieYear: "",
        movieRating: 0,
        criticName: "",
        userComment: "",
        seeMoreLink: "",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreate = async () => {
    try {
      const newComment = { ...currentComment, commentId: uuidv4() }; // Generate a unique ID for the new comment
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/commentlist`, newComment);
      setComments([...comments, response.data]);
      setIsEditing(false);
      setCurrentComment({
        commentId: "",
        movieImage: "",
        profileImage: "",
        movieTitle: "",
        movieYear: "",
        movieRating: 0,
        criticName: "",
        userComment: "",
        seeMoreLink: "",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (comment) => {
    setCurrentComment(comment);
    setIsEditing(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4 bg-[#1c1c1e] text-white">
      <h1 className="text-2xl font-bold mb-4">Comments Admin Panel</h1>
      {isEditing ? (
        <div className="bg-gray-800 p-4 rounded mb-4 text-black">
          <h2 className="text-xl mb-4">Edit Comment</h2>
          <input
            type="text"
            value={currentComment.movieImage || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, movieImage: e.target.value })}
            placeholder="Movie Image URL"
            className="w-full p-2 mb-2 rounded "
          />
          <input
            type="text"
            value={currentComment.profileImage || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, profileImage: e.target.value })}
            placeholder="Profile Image URL"
            className="w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={currentComment.movieTitle || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, movieTitle: e.target.value })}
            placeholder="Movie Title"
            className="w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={currentComment.movieYear || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, movieYear: e.target.value })}
            placeholder="Movie Year"
            className="w-full p-2 mb-2 rounded"
          />
          <input
            type="number"
            value={currentComment.movieRating || 0} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, movieRating: parseInt(e.target.value) || 0 })} // Handle invalid input
            placeholder="Movie Rating"
            className="w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={currentComment.criticName || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, criticName: e.target.value })}
            placeholder="Critic Name"
            className="w-full p-2 mb-2 rounded"
          />
          <textarea
            value={currentComment.userComment || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, userComment: e.target.value })}
            placeholder="User Comment"
            className="w-full p-2 mb-2 rounded"
          />
          <input
            type="text"
            value={currentComment.seeMoreLink || ""} // Ensure default value is set
            onChange={(e) => setCurrentComment({ ...currentComment, seeMoreLink: e.target.value })}
            placeholder="See More Link"
            className="w-full p-2 mb-2 rounded"
          />
          <div className="flex mt-4">
            <button
              onClick={() => handleUpdate(currentComment.commentId)}
              className="bg-green-500 text-white p-2 rounded mr-2"
            >
              Update
            </button>
            <button
              onClick={() => handleCreate()}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Create
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentComment({
                  commentId: "",
                  movieImage: "",
                  profileImage: "",
                  movieTitle: "",
                  movieYear: "",
                  movieRating: 0,
                  criticName: "",
                  userComment: "",
                  seeMoreLink: "",
                });
              }}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white p-2 rounded mb-4"
        >
          Add New Comment
        </button>
      )}
      {comments.map((comment) => (
  <div key={comment.commentId} className="bg-gray-100 p-4 rounded mb-4 text-black">
    <div className="flex items-center">
      {/* Use a default image or placeholder if movieImage is missing */}
      <img
        src={comment.movieImage || "https://via.placeholder.com/64"}
        alt={comment.movieTitle || "No title"}
        className="w-16 h-16 mr-4"
      />
      <div>
        <h2 className="text-xl font-bold">
          {comment.movieTitle || "No title"} ({comment.movieYear || "N/A"})
        </h2>
        <p className="text-gray-700">Rating: {comment.movieRating || "N/A"}</p>
        <p className="text-gray-700">Critic: {comment.criticName || "Unknown"}</p>
        <p>{comment.userComment || "No comment"}</p>
        <a
          href={comment.seeMoreLink || "#"}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More
        </a>
      </div>
    </div>
    <div className="mt-4">
      <button
        onClick={() => handleEditClick(comment)}
        className="bg-yellow-500 text-white p-2 rounded mr-2"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(comment.commentId)}
        className="bg-red-500 text-white p-2 rounded"
      >
        Delete
      </button>
    </div>
  </div>
))}

    </div>
  );
};

export default Comments;
