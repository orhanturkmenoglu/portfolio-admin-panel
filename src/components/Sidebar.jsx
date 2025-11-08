import { useState } from "react";
import { Link } from "react-router";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard",href:"/", icon: "📊" },
    { id: "about", label: "About", href: "/abouts",icon: "👤" },
    { id: "projects", label: "Projects",href: "/projects", icon: "💼" },
    { id: "skills", label: "Skills",href: "/skills", icon: "🎯" },
    { id: "experience", label: "Experience",href: "/works", icon: "📈" },
    { id: "settings", label: "Settings",href: "/settings", icon: "⚙️" },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.label);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] 
          bg-white dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-800
          w-64 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-y-auto
        `}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              onClick={() => handleItemClick(item)}
              to={item.href ?? "#"}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg
                transition-all duration-200
                ${
                  activeItem === item.label
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Portfolio Admin v1.0
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
