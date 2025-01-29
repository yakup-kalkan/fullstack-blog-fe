import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
      <img
        src={post.cover}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.content.slice(0, 100)}...</p>

      <Link to={`/post/${post.id}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
      <div className="flex justify-between item-center mt-4 text-gray-500 text-sm">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>{post.author}</span>
      </div>
    </div>
  );
}

export default BlogCard;
