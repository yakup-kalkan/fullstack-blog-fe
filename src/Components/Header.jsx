import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Blog</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signin" className="hover:underline">
              SignIn
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
