export default function StatCard({ icon, title, value, change, color }) {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="bg-white rounded-xl  p-4 flex flex-col shadow ">
      <div className="flex items-center gap-2 mb-2 text-gray-600 text-sm">
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <span
        className={`text-xs ${
          change.startsWith("+") ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </span>
      <div className="w-full h-1 mt-2 rounded bg-gray-200">
        <div
          className={`h-1 rounded ${colorMap[color]}`}
          style={{ width: "70%" }}
        />
      </div>
    </div>
  );
}
