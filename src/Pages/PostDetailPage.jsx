// import React, { useState } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";

// function PostDetails() {
//   const { id } = useParams(); // URL'den ID'yi al
//   const navigate = useNavigate();
//   const location = useLocation();

//   // HERE, USELOCATION IS NOT REQUIRED EXACTLY , BUT IT'S USED TO DEMONSTRATE HOW TO ACCESS THE PREVIOUS LOCATION.
//   // YOU HAVE TO FETCH THE DATA VIA id FROM THE API OR DATABASE IN THE COMPONENT DID MOUNT OR IN A HOOK LIKE USEEFFECT

//   const post = location.state?.post; // state içindeki post nesnesini al

//   // Eğer post objesi yoksa hata mesajı göster
//   if (!post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-red-100">
//         <div className="text-center text-red-500 font-bold text-2xl">
//           Post not found
//         </div>
//       </div>
//     );
//   }

//   // State ile form alanlarını yönet
//   const [post.author, setpost.author] = useState(post.post.author);
//   const [post.title, setpost.Title] = useState(post.post.title);
//   const [post.content, setpost.Content] = useState(post.post.content);
//   const [post.cover, setpost.Cover] = useState(post.post.cover);
//   const [date, setDate] = useState(post.date);

//   const handleSave = () => {
//     if (!post.author || !post.title || !post.content || !post.cover || !date) {
//       alert("All fields are required");
//       return;
//     }
//     alert("Post updated successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-4xl font-bold mb-6 text-gray-800">Edit Post</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">post.author</label>
//           <input
//             type="text"
//             value={post.author}
//             onChange={(e) => setpost.author(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">post.Title</label>
//           <input
//             type="text"
//             value={post.title}
//             onChange={(e) => setpost.Title(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             post.Content
//           </label>
//           <textarea
//             value={post.content}
//             onChange={(e) => setpost.Content(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             post.Cover URL
//           </label>
//           <input
//             type="text"
//             value={post.cover}
//             onChange={(e) => setpost.Cover(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Date</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handleSave}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
//           >
//             Save
//           </button>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostDetails;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost, deletePost } from "../Services/services"; // Import the required services

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
    date: "",
  });

  // Fetch the post data when the component mounts
  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPostById({ id });
      if (fetchedPost) {
        console.log("fetching data: ", fetchedPost);
        setPost(fetchedPost);
      } else {
        alert("Post not found!");
        navigate("/");
      }
    };

    fetchPost();
  }, [id, navigate]);

  // If the post is still being fetched, show a loading message
  if (post === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    );
  }

  const handleSave = async () => {
    if (
      !post.author ||
      !post.title ||
      !post.content ||
      !post.cover ||
      !post.date
    ) {
      alert("All fields are required");
      return;
    }

    const updatedPost = await updatePost(
      id,
      post.author,
      post.title,
      post.content,
      post.cover
    );
    if (updatedPost) {
      alert("Post updated successfully!");
      navigate("/");
    } else {
      alert("Failed to update post.");
    }
  };

  const handleDelete = async () => {
    const deletedPost = await deletePost(id);
    if (deletedPost) {
      alert("Post deleted successfully!");
      navigate("/");
    } else {
      alert("Failed to delete post.");
    }
  };

  // Handle input change dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value, // Dynamically update the correct property based on the name attribute
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Edit Post</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Author</label>
          <input
            type="text"
            name="author" // Set the name attribute to match the state property
            value={post.author}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Cover URL
          </label>
          <input
            type="text"
            name="cover"
            value={post.cover}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            Delete
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
