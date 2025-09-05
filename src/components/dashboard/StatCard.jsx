export default function StatCard({ icon, title, value, change, color, darkMode }) {
  const colorMap = {
    blue: darkMode ? "bg-blue-400" : "bg-blue-500",
    green: darkMode ? "bg-green-400" : "bg-green-500",
    yellow: darkMode ? "bg-yellow-400" : "bg-yellow-500",
    purple: darkMode ? "bg-purple-400" : "bg-purple-500",
  };

  return (
    <div
      className={`rounded-xl p-4 flex flex-col shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`flex items-center gap-2 mb-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        } text-sm`}
      >
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
      <div
        className={`w-full h-1 mt-2 rounded ${
          darkMode ? "bg-gray-600" : "bg-gray-200"
        }`}
      >
        <div className={`h-1 rounded ${colorMap[color]}`} style={{ width: "70%" }} />
      </div>
    </div>
  );
}