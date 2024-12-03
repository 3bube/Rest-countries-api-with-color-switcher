import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-white sticky z-10 top-0 left-0 right-0 dark:bg-elements-dark shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="font-bold md:text-2xl text-md text-text-light dark:text-white">
          Where in the world?
        </h1>
        <button
          onClick={toggleDarkMode}
          className="text-text-light dark:text-white flex items-center gap-2 hover:opacity-75 transition-opacity"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
