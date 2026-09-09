import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          ALGORYX
        </h1>

        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>

          <a href="#services" className="hover:text-blue-600">
            Services
          </a>

          <a href="#timeline" className="hover:text-blue-600">
            Timeline
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#timeline" onClick={() => setOpen(false)}>
            Timeline
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 w-fit"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      )}
    </nav>
  );
}