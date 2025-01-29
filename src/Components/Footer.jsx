const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
