import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  Users,
  FileText,
  ClipboardList,
  BarChart,
  Settings,
  HelpCircle,
  Pill,
  DollarSign,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 ${
      location.pathname === path ? "bg-gray-200 font-semibold" : ""
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col overflow-y-auto">
      {/* Logo / Title */}
      <div className="px-6 py-4 font-bold text-xl">Phermo</div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 text-gray-700">
        {/* MENU */}
        <p className="px-3 text-xs font-semibold text-gray-500 uppercase">
          Menu
        </p>
        <Link to="/" className={linkClass("/")}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/purchase" className={linkClass("/purchase")}>
          <ShoppingCart size={20} />
          <span>Purchase</span>
        </Link>
        <Link to="/sale" className={linkClass("/sale")}>
          <DollarSign size={20} />
          <span>Sale</span>
        </Link>
        <Link to="/product" className={linkClass("/product")}>
          <Package size={20} />
          <span>Product</span>
        </Link>
        <Link to="/suppliers" className={linkClass("/suppliers")}>
          <Truck size={20} />
          <span>Suppliers</span>
        </Link>

        {/* Others */}
        <p className="mt-4 px-3 text-xs font-semibold text-gray-500 uppercase">
          Others
        </p>
        <Link to="/customer" className={linkClass("/customer")}>
          <Users size={20} />
          <span>Customer</span>
        </Link>
        <Link to="/medicine" className={linkClass("/medicine")}>
          <Pill size={20} />
          <span>Medicine</span>
        </Link>
        <Link to="/invoice" className={linkClass("/invoice")}>
          <FileText size={20} />
          <span>Invoice</span>
        </Link>
        <Link to="/orders" className={linkClass("/orders")}>
          <ClipboardList size={20} />
          <span>Orders</span>
        </Link>

        {/* Preferences */}
        <p className="mt-4 px-3 text-xs font-semibold text-gray-500 uppercase">
          Preferences
        </p>
        <Link to="/sales-report" className={linkClass("/sales-report")}>
          <BarChart size={20} />
          <span>Sales Report</span>
        </Link>
        <Link to="/help-support" className={linkClass("/help-support")}>
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </Link>
        <Link to="/settings" className={linkClass("/settings")}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      {/* Upgrade Pro Card */}
      <div className="p-4">
        <div className="bg-blue-50 rounded-xl p-4 text-center shadow-sm">
          <p className="text-sm font-semibold text-gray-800">Upgrade Pro</p>
          <p className="text-xs text-gray-500 mt-1">
            Master your pharmacy with detailed analytics and clear graphs.
          </p>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
