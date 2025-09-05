import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function RevenueExpense({ data, darkMode }) {
  return (
    <div
      className={`p-4 shadow rounded-md transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="font-bold mb-2">Over All Revenue vs Expense</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke={darkMode ? "#9ca3af" : "#6b7280"} />
          <YAxis stroke={darkMode ? "#9ca3af" : "#6b7280"} />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#374151" : "#fff",
              color: darkMode ? "#e5e7eb" : "#374151",
              border: darkMode ? "1px solid #4b5563" : "1px solid #e5e7eb",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={darkMode ? "#60a5fa" : "#2563eb"}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke={darkMode ? "#fb923c" : "#f97316"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}