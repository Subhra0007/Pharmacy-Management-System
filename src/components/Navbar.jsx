import { useState } from "react";
import { Search, Bell, Sun, Moon, ScrollText } from "lucide-react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import navbar from "../assets/navbar.jpg";

export default function Navbar({ darkMode, setDarkMode }) {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [showNotificationsPopup, setShowNotificationsPopup] = useState(false);

  const profileData = {
    imageUrl: navbar,
    name: "Tahsan Khan",
    mobile: "01893531209",
    email: "tahsankhan@gmail.com",
    aadhaar: "1234-5678-9012",
    address: "Kolkata, 710000",
    role: "Employee",
  };

  return (
    <>
      <div
        className={`flex items-center justify-between shadow-md px-6 py-3 sticky top-0 z-50 transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        {/* Left greeting */}
        <div className="gap-4 flex mx-2 items-center">
          <h2 className="text-lg font-semibold">👋 Hello, Tahsan Khan!</h2>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors duration-300 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
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
              className={`w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 mx-2">
          <button
            onClick={() => setShowMessagesPopup(true)}
            className={`size-8 p-2 rounded-lg ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <IoChatboxEllipsesOutline size={18} />
          </button>
          <button
            onClick={() => setShowNotesPopup(true)}
            className={`size-8 p-2 rounded-lg ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <ScrollText size={18} />
          </button>
          <button
            onClick={() => setShowNotificationsPopup(true)}
            className={`size-8 relative p-2 rounded-lg ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              4
            </span>
          </button>

          {/* Profile Section */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowProfilePopup(true)}
          >
            <img
              src={profileData.imageUrl}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Tahsan Khan</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                tahsankhan@gmail.com
              </p>
            </div>
            <div>
              <p className="text-xs">Login Time: 9:00</p>
              <span className="text-xs">Suggested Logout Time: 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Popup Modal */}
      {showProfilePopup && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg p-6 w-96 relative ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => setShowProfilePopup(false)}
              className="absolute top-3 right-3 text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={profileData.imageUrl}
                alt="profile"
                className="w-24 h-24 rounded-full"
              />
              <div className="text-center space-y-1">
                <p className="font-semibold text-lg">{profileData.name}</p>
                <p className="text-sm text-gray-400">{profileData.mobile}</p>
                <p className="text-sm text-gray-400">{profileData.email}</p>
                <p className="text-sm text-gray-400">
                  Aadhaar No.: {profileData.aadhaar}
                </p>
                <p className="text-sm text-gray-400">
                  Address: {profileData.address}
                </p>
                <p className="text-sm text-gray-400">Role: {profileData.role}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => alert("Logging out...")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages Popup Modal */}
      {showMessagesPopup && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg p-6 w-96 relative ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => setShowMessagesPopup(false)}
              className="absolute top-3 right-3 text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Messages</h3>
              <div className="space-y-2">
                <p className="text-sm">No new messages.</p>
                {/* Placeholder for messages content */}
                <p className="text-sm text-gray-400">
                  (Add your messages list or content here)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notes Popup Modal */}
      {showNotesPopup && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg p-6 w-96 relative ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => setShowNotesPopup(false)}
              className="absolute top-3 right-3 text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Notes</h3>
              <div className="space-y-2">
                <p className="text-sm">No notes available.</p>
                {/* Placeholder for notes content */}
                <p className="text-sm text-gray-400">
                  (Add your notes list or content here)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Popup Modal */}
      {showNotificationsPopup && (
        <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50">
          <div
            className={`rounded-lg p-6 w-96 relative ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <button
              onClick={() => setShowNotificationsPopup(false)}
              className="absolute top-3 right-3 text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <div className="space-y-2">
                <p className="text-sm">4 new notifications.</p>
                {/* Placeholder for notifications content */}
                <p className="text-sm text-gray-400">
                  (Add your notifications list or content here)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}