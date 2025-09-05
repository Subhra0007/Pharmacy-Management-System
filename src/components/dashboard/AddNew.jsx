import { Plus } from "lucide-react";

export default function AddNew({ darkMode }) {
  return (
    <div
      className={`col-span-12 md:col-span-2 rounded-xl shadow p-4 flex flex-col gap-3 w-[300px] space-y-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <button
        className={`flex items-center gap-2 px-4 py-4 rounded-lg transition ${
          darkMode
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <Plus size={18} />
        Add New Order
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-4 rounded-lg transition ${
          darkMode
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <Plus size={18} />
        Add New Product
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-4 rounded-lg transition ${
          darkMode
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <Plus size={18} />
        Add New Customer
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-4 rounded-lg transition ${
          darkMode
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <Plus size={18} />
        Add New Doctor Appt..
      </button>
    </div>
  );
}