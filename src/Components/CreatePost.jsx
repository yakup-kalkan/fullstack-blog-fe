import React, { useState } from "react";
import { createPost } from "../Services/services"; // Import createPost from services
import Spinner from "./Spinner";

function CreatePost({ setPosts, closeModal }) {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    cover: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { title, content, author, cover } = newPost;
    try {
      // Call the createPost service function
      const createdPost = await createPost(author, title, content, cover);

      if (createdPost) {
        // If the post was successfully created, update the posts list
        setPosts((prev) => [createdPost, ...prev]);
        closeModal(); // Close the modal after creating the post
      } else {
        console.error("Failed to create post.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm bg-opacity-50 z-50">
          <Spinner />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Content</label>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={newPost.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Cover URL</label>
            <input
              type="text"
              name="cover"
              value={newPost.cover}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 mt-8"
          >
            Create Post
          </button>
        </form>
      )}
    </div>
  );
}

export default CreatePost;
