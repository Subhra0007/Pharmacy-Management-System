import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddNew({ darkMode }) {
  const navigate = useNavigate();

  const handleAddOrder = () => {
     navigate("/add-customer-order");
  };

    const handleAddProduct = () => {
     navigate("/add-product");
  };

    const handleAddCustomer = () => {
     navigate("/add-customer");
  };

    const handleAddAppointment = () => {
     navigate("/add-appointment");
  };
  return (
    <div
      className={`col-span-12 md:col-span-2 rounded-xl shadow p-4 flex flex-col gap-3 w-[300px] space-y-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <button
      onClick={handleAddOrder}
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
      onClick={handleAddProduct}
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
      onClick={handleAddCustomer}
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
      onClick={handleAddAppointment}
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