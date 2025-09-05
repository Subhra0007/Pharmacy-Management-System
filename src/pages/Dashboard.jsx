// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
//   LineChart, Line
// } from "recharts";
import { Package, Users, AlertTriangle, Pill,Plus } from "lucide-react";

import StatCard from "../components/dashboard/StatCard";
import TopMedicine from "../components/dashboard/TopMedicine";
import StackedReport from "../components/dashboard/StackedReport";
import RevenueExpense from "../components/dashboard/RevenueExpense";
import SimpleBarGraph from "../components/dashboard/SimpleBarGraph";
import PurchaseTable from "../components/dashboard/PurchaseTable";

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

//  const chartData = [
//     { name: "Total Purchase", value: 80, fill: "#2563eb" },
//     { name: "Cash Received", value: 65, fill: "#22c55e" },
//     { name: "Bank Receive", value: 55, fill: "#16a34a" },
//     { name: "Total Service", value: 40, fill: "#f97316" },
//   ];

export default function Dashboard() {
  return (
    <div>
      {/* Button aligned left */}
      <div className="flex justify-end p-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add New Order
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Stats */}
          <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-4">
            <StatCard 
              icon={<Package className="text-blue-500" />}
              title="Total Supplier"
              value="120"
              change="+32%"
              color="blue"
            />
            <StatCard
              icon={<Users className="text-green-500" />}
              title="Total Customer"
              value="324"
              change="-12%"
              color="green"
            />
            <StatCard
              icon={<AlertTriangle className="text-yellow-500" />}
              title="Out of Stock"
              value="102"
              change="-09%"
              color="yellow"
            />
            <StatCard
              icon={<Pill className="text-purple-500" />}
              title="Total Medicine"
              value="150"
              change="+43%"
              color="purple"
            />
          </div>

          {/* Top Selling Medicine */}
          <TopMedicine />

          {/* Graph Report Today */}
          <StackedReport data={stackedData} />
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <RevenueExpense data={revenueData} />
          </div>
          <div className="col-span-1">
            <SimpleBarGraph />
          </div>
        </div>

        {/* Table */}
        <PurchaseTable />
      </div>
    </div>
  );
}