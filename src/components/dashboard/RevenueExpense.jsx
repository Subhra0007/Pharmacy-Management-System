import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function RevenueExpense({ data }) {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="font-bold mb-2">Over All Revenue vs Expense</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
          <Line type="monotone" dataKey="expense" stroke="#f97316" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
