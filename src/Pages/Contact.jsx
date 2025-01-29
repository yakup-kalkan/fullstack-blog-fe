const Contact = () => {
  return (
    <div className="container min-h-screen mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-4">
        Have questions? Feel free to reach out to us!
      </p>
      <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
