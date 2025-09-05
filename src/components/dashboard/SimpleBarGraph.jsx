import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer
} from "recharts";

export default function SimpleBarGraph() {
  const chartData = [
    { name: "Total Purchase", value: 80, fill: "#2563eb" },
    { name: "Cash Received", value: 65, fill: "#22c55e" },
    { name: "Bank Receive", value: 55, fill: "#16a34a" },
    { name: "Total Service", value: 40, fill: "#f97316" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-md h-[312px]">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Today's Report</h2>
      </div>

      <p className="text-gray-500 mt-1">Total Earning</p>
      <div className="flex items-end gap-2 mb-4">
        <h3 className="text-2xl font-bold text-gray-900">$536.00</h3>
        <span className="text-green-500 text-sm font-semibold">+43%</span>
      </div>

      <div className="flex items-center">
        {/* Radial chart */}
        <div className="relative w-[140px] h-[140px]">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={8}
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                dataKey="value"
                cornerRadius={5}
                clockWise
                background
              />
            </RadialBarChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500">Total Earning</p>
            <p className="text-xl font-bold text-blue-600">80%</p>
          </div>
        </div>

        {/* Legend */}
        <div className="ml-4 space-y-2 ">
          {chartData.map((item, i) => (
            <div key={i} className="flex items-center gap-2 ">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              ></span>
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
