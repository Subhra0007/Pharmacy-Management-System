import { Pill } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export default function TopMedicine() {
  return (
    <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow  p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Pill className="w-4 h-4 text-gray-600" />
          <h3 className="font-semibold text-sm">Top Selling <br/>Medicine</h3>
        </div>
         <button className="flex items-center gap-1 border hover:bg-gray-100 text-xs bg-gray-100 px-2 py-1 rounded-md">  
           This Month
             <IoIosArrowDown className="ml-3"/>
          </button>
     
      </div>

      {/* Colored strip */}
      {/* <div className="flex gap-1 mb-4">
        <div className="h-2 w-2 rounded mt-3 bg-blue-500" />
        <div className="h-2 w-2 rounded mt-3 bg-green-500" />
        <div className="h-2 w-2 rounded mt-3 bg-orange-500" />
        <div className="h-2 w-2 rounded mt-3 bg-purple-500" />
      </div> */}
        Colored bar strip
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-2 rounded mt-3 ${
              i < 8
                ? "bg-blue-500"
                : i < 15
                ? "bg-green-500"
                : i < 22
                ? "bg-orange-500"
                : "bg-purple-500"
            }`}
          />
        ))}
      </div>


      {/* Medicine rows */}
      <div className="space-y-4">
        <MedicineRow name="Dolo 650" value={54647} color="bg-blue-500" />
        <MedicineRow name="Crosin" value={12345} color="bg-green-500" />
        <MedicineRow name="Gelusil" value={16567} color="bg-orange-500" />
        <MedicineRow name="Benedryl" value={10412} color="bg-purple-500" />
      </div>
    </div>
  );
}

function MedicineRow({ name, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>${value.toLocaleString()}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${color}`}
          style={{ width: `${Math.min((value / 60000) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
