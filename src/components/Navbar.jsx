import { Search, Bell, Sun, Moon } from "lucide-react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex items-center justify-between shadow-md px-6 py-3 sticky top-0 z-50 transition-colors duration-300
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
      `}
    >
      {/* Left greeting */}
      <div className="gap-4 flex mx-2 items-center">
        <h2 className="text-lg font-semibold">👋 Hello, Tahsan Khan!</h2>

        {/* Dark mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg transition-colors duration-300 cursor-pointer
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}
          `}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Middle search */}
      <div className="flex-1 max-w-lg">
        <div className="relative">
          <Search
            className={`absolute left-3 top-2.5 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
            size={18}
          />
          <input
            type="text"
            placeholder="Search anything"
            className={`w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none
              ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }
            `}
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 mx-2">
        <IoChatboxEllipsesOutline
          className={`size-8 p-2 rounded-lg ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
        />

        {/* Notifications */}
        <button
          className={`size-8 relative p-2 rounded-lg ${
            darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
          }`}
        >
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            4
          </span>
        </button>

        {/* Profile */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <img src="" alt="profile" className="w-8 h-8 rounded-full" />
            <div className="flex">
              <div>
                <p className="text-sm font-medium">Tahsan Khan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  tahsankhan@gmail.com
                </p>
              </div>
              <IoIosArrowDown />
            </div>
            <div>
              <p className="text-xs">Login Time: 9:00</p>
              <span className="text-xs">Suggested Logout Time: 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
