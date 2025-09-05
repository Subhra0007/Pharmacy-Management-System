// pages/Dashboard.jsx
import { useOutletContext } from "react-router-dom";
import { Package, Users, AlertTriangle, Pill, Plus } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import TopMedicine from "../components/dashboard/TopMedicine";
import StackedReport from "../components/dashboard/StackedReport";
import RevenueExpense from "../components/dashboard/RevenueExpense";
import AddNew from "../components/dashboard/AddNew";
import PurchaseTable from "../components/dashboard/PurchaseTable";
import ClipboardList from "../components/dashboard/CustomerList";

const revenueData = [
  { month: "Jan", revenue: 12000, expense: 9000 },
  { month: "Feb", revenue: 8000, expense: 6000 },
  { month: "Mar", revenue: 14000, expense: 12000 },
  { month: "Apr", revenue: 10000, expense: 9000 },
  { month: "May", revenue: 16000, expense: 14000 },
  { month: "Jun", revenue: 17000, expense: 15000 },
  { month: "Jul", revenue: 18000, expense: 12000 },
  { month: "Aug", revenue: 19000, expense: 11000 },
  { month: "Sep", revenue: 16000, expense: 14000 },
  { month: "Oct", revenue: 15000, expense: 14000 },
  { month: "Nov", revenue: 10000, expense: 14000 },
  { month: "Dec", revenue: 19000, expense: 14000 },
];

const stackedData = [
  { name: "Purchases", green: 20, orange: 30, blue: 50 },
  { name: "Suppliers", green: 25, orange: 25, blue: 50 },
  { name: "Sales", green: 30, orange: 20, blue: 50 },
];

export default function Dashboard() {
  const { darkMode } = useOutletContext();

  return (
    <div
      className={`space-y-6 p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Stats */}
        <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-4">
          <StatCard
            icon={<Package className="text-blue-500" />}
            title="Total Supplier"
            value="120"
            change="+32%"
            color="blue"
            darkMode={darkMode}
          />
          <StatCard
            icon={<Users className="text-green-500" />}
            title="Total Customer"
            value="324"
            change="-12%"
            color="green"
            darkMode={darkMode}
          />
          <StatCard
            icon={<AlertTriangle className="text-yellow-500" />}
            title="Out of Stock"
            value="102"
            change="-09%"
            color="yellow"
            darkMode={darkMode}
          />
          <StatCard
            icon={<Pill className="text-purple-500" />}
            title="Total Medicine"
            value="150"
            change="+43%"
            color="purple"
            darkMode={darkMode}
          />
        </div>

        {/* Top Selling Medicine */}
        <TopMedicine darkMode={darkMode} />

        <AddNew darkMode={darkMode} />
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <RevenueExpense data={revenueData} darkMode={darkMode} />
        </div>
        <div className="col-span-1 max-h-[320px]">
          <StackedReport data={stackedData} darkMode={darkMode} />
        </div>
      </div>

      {/* Table */}
      <PurchaseTable darkMode={darkMode} />
      <ClipboardList darkMode={darkMode} />
    </div>
  );
}