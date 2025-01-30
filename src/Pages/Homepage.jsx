import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import CreatePost from "../Components/CreatePost";
import { getAllPosts } from "../Services/services";
import Spinner from "../Components/Spinner";

function Homepage() {
  const [posts, setPosts] = useState();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getAllPosts();
        console.log("Fetched posts:", data);
        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="">
      <div className="min-h-screen">
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Latest Blog Posts
        </h2> */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-8 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 mb-8 block mx-auto"
        >
          Create New Post
        </button>
        {loading ? (
          // loaded views
          <Spinner />
        ) : posts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts available.</p>
        )}
      </div>

      {/* Create Post Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 relative w-full max-w-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-red-500 text-2xl hover:text-red-700"
            >
              &times;
            </button>
            <CreatePost
              setPosts={setPosts}
              closeModal={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
