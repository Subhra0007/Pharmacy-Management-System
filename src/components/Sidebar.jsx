import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Truck,
  Users,
  ClipboardList,
  BarChart,
  Settings,
  HelpCircle,
  Pill,
  Stethoscope,
  ScrollText,
  BanknoteArrowDown,
  IdCardLanyard,
  Undo2,
  House
} from "lucide-react";

const Sidebar = ({ darkMode }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
      location.pathname === path
        ? "bg-blue-100 text-blue-700 font-semibold dark:bg-blue-900 dark:text-blue-200"
        : darkMode
        ? "text-gray-100 hover:bg-gray-700"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div
      className={`w-64 h-screen fixed top-0 left-0 shadow-md flex flex-col transition-colors duration-300 z-50 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="px-6 py-4 font-bold text-xl">Phermo</div>
      {/* 👇 Added styled scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-900">
        <nav className="p-4 space-y-4">
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Menu
            </p>
            <Link to="/" className={linkClass("/")}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/analytics" className={linkClass("/analytics")}>
              <BarChart size={20} />
              <span>Analytics</span>
            </Link>
            <Link to="/suppliers" className={linkClass("/suppliers")}>
              <Truck size={20} />
              <span>Suppliers</span>
            </Link>
          </div>
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Others
            </p>
            <Link to="/customer" className={linkClass("/customer")}>
              <Users size={20} />
              <span>Customer</span>
            </Link>
            <Link to="/products" className={linkClass("/products")}>
              <Pill size={20} />
              <span>Product</span>
            </Link>
            <Link to="/doctor" className={linkClass("/doctor")}>
              <Stethoscope size={20} />
              <span>Doctor</span>
            </Link>
            <Link to="/supplier-orders" className={linkClass("/supplier-orders")}>
              <ShoppingCart size={20} />
              <span>Supplier Orders</span>
            </Link>
            <Link to="/customer-orders" className={linkClass("/customer-orders")}>
              <ClipboardList size={20} />
              <span>Customer Orders</span>
            </Link>
            <Link to="/notes" className={linkClass("/notes")}>
              <ScrollText size={20} />
              <span>Notes</span>
            </Link>
            <Link to="/expenses" className={linkClass("/expenses")}>
              <BanknoteArrowDown size={20} />
              <span>Expenses</span>
            </Link>
            <Link to="/employee" className={linkClass("/employee")}>
              <IdCardLanyard size={20} />
              <span>Employee</span>
            </Link>
            <Link to="/return-product" className={linkClass("/return-product")}>
              <Undo2 size={20} />
              <span>Return Product</span>
            </Link>
            <Link to="/branch" className={linkClass("/branch")}>
              <House size={20} />
              <span>Branch</span>
            </Link>
          </div>
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Preferences
            </p>
            <Link to="/help-supports" className={linkClass("/help-supports")}>
              <HelpCircle size={20} />
              <span>Help & Supports</span>
            </Link>
            <Link to="/settings" className={linkClass("/settings")}>
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </nav>
      </div>
      <div className="p-4">
        <div
          className={`rounded-xl p-4 text-center shadow-sm transition-colors duration-300 ${
            darkMode 
              ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-100" 
              : "bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 text-gray-800"
          }`}
        >
          <p className="text-lg text-green-600 mt-1">234 days left</p>
          <button
            className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Get Lifetime Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
