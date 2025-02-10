import React from "react";

const SignIn = () => {
  return (
    <div className="container min-h-screen mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign In</h2>
      <p className="text-lg text-gray-600 mb-4">
        Welcome back! Please enter your credentials.
      </p>
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
