import { useOutletContext } from "react-router-dom";
import { Package, Users, DollarSign } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import RevenueExpense from "../components/dashboard/RevenueExpense";
import AddNew from "../components/dashboard/AddNew";
import PurchaseTable from "../components/dashboard/PurchaseTable";
import ClipboardList from "../components/dashboard/CustomerList";
import EventPieChart from "../components/dashboard/EventPieChart";

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

export default function Dashboard() {
  const { darkMode } = useOutletContext();

  return (
    <div
      className={`space-y-6 p-6 ml-64 mt-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Stat Cards */}
        <div className="col-span-1 md:col-span-4 grid grid-cols-2 gap-4">
          {/* Employees */}
          <StatCard
            icon={<Users className="text-cyan-400" />}
            title="Total Employees"
            value="120"
            change="+32%"
            darkMode={darkMode}
          />

          {/* Total Asset */}
          <StatCard
            icon={<Package className="text-cyan-400" />}
            title="Total Asset"
            value="324"
            change="-12%"
            darkMode={darkMode}
          />

          <div className="col-span-2">
            {/* Total Expenses */}
            <StatCard
              icon={<DollarSign className="text-cyan-400" />}
              title="Total Expenses"
              value="$45,000"
              change="-2.5%"
              darkMode={darkMode}
            />
          </div>
        </div>

        {/* Event Chart */}
        <div className="col-span-1 md:col-span-4">
          <EventPieChart darkMode={darkMode} />
        </div>

        {/* Add New */}
        <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start w-full">
          <div className="w-full">
            <AddNew darkMode={darkMode} />
          </div>
        </div>
      </div>

      {/* Revenue Graph */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <RevenueExpense data={revenueData} darkMode={darkMode} />
        </div>
      </div>

      {/* Table Sections */}
      <div className="overflow-x-auto">
        <PurchaseTable darkMode={darkMode} />
      </div>
      <div className="overflow-x-auto">
        <ClipboardList darkMode={darkMode} />
      </div>
    </div>
  );
}
