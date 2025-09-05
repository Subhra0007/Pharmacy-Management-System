import { Search, Bell, Sun, Moon } from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-3 sticky top-0 z-50">
      {/* Left greeting */}
      <div className="gap-2 flex">
      <h2 className="text-lg font-semibold">👋 Hello, Tahsan Khan!</h2>      
             {/* Dark mode toggle */}
    
         <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        </div>
      {/* Middle search */}
      <div className="flex-1 max-w-lg mx-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search anything"
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-5">
    
        <FaRegCalendarAlt className="size-8 p-2 rounded-lg hover:bg-gray-100"/>
        <IoChatboxEllipsesOutline className="size-8 p-2 rounded-lg hover:bg-gray-100"/>
        {/* Notifications */}
        <button className=" size-8 relative p-2 rounded-lg hover:bg-gray-100">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            4
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src=""
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Tahsan Khan</p>
            <p className="text-xs text-gray-500">tahsankhan@gmail.com</p>
          </div>
            <IoIosArrowDown/>
        </div>
      </div>
    </div>
  );
}
