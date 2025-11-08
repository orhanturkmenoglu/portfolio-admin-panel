import DarkModeSwitch from './DarkModeSwitch';

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 dark:bg-[#0f0f0f] border-b border-gray-800 dark:border-gray-800 z-50 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <h1 className="text-xl font-bold text-white">
            Portfolio <span className="text-red-500">Service</span>
          </h1>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <div className="hidden md:flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-300 text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

