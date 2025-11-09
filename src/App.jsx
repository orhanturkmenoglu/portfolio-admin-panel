import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // sadece bunları import et
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AboutForm from "./components/About/AboutForm";
import ProjectForm from "./components/Project/ProjectForm";
import SkillForm from "./components/Skill/SkillForm";
import WorkForm from "./components/Work/WorkForm";
import SettingsDashboard from "./components/Setting/SettingsDashboard";
import Dashboard from "./components/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-200">
        <Navbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          <main className="flex-1 p-6">
            <Toaster/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/abouts" element={<AboutForm />} />
              <Route path="/projects" element={<ProjectForm />} />
                <Route path="/skills" element={<SkillForm />} />
              <Route path="/works" element={<WorkForm />} />
              <Route path="/settings" element={<SettingsDashboard />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
