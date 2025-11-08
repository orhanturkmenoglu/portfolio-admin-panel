const Footer = () => {
  return (
    <footer className="ml-0 md:ml-64 mt-auto bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Portfolio Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

