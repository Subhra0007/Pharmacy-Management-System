import { Eye, Edit, Trash2 } from "lucide-react";

export default function PurchaseTable() {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Purchase List</h2>
        <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View All
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm shadow">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-2 ">
              <input type="checkbox" />
            </th>
            <th className="p-2 ">Invoice ID</th>
            <th className="p-2 ">Date</th>
            <th className="p-2 ">Supplier</th>
            <th className="p-2 ">Payable Amount</th>
            <th className="p-2 ">Paid Amount</th>
            <th className="p-2 ">Due</th>
            <th className="p-2 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className="shadow hover:bg-gray-50">
            <td className="p-2  text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2 ">#P-00270</td>
            <td className="p-2 ">Feb 19, 2025</td>
            <td className="p-2 ">Square</td>
            <td className="p-2 ">2500</td>
            <td className="p-2 ">2,500.00</td>
            <td className="p-2 ">660.00</td>
            <td className="p-2  flex gap-2 justify-center">
              <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                <Eye size={16} />
              </button>
              <button className="p-1 bg-green-500 text-white rounded hover:bg-green-600">
                <Edit size={16} />
              </button>
              <button className="p-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                <Trash2 size={16} />
              </button>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="shadow hover:bg-gray-50">
            <td className="p-2  text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2 ">#P-00268</td>
            <td className="p-2 ">Feb 20, 2025</td>
            <td className="p-2 ">Beximco</td>
            <td className="p-2 ">660</td>
            <td className="p-2 ">5,000.00</td>
            <td className="p-2 ">3,647.10</td>
            <td className="p-2  flex gap-2 justify-center">
              <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                <Eye size={16} />
              </button>
              <button className="p-1 bg-green-500 text-white rounded hover:bg-green-600">
                <Edit size={16} />
              </button>
              <button className="p-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                <Trash2 size={16} />
              </button>
            </td>
          </tr>

          {/* Row 3 */}
          <tr className="shadow hover:bg-gray-50">
            <td className="p-2  text-center">
              <input type="checkbox" />
            </td>
            <td className="p-2 ">#P-00267</td>
            <td className="p-2 ">Feb 21, 2025</td>
            <td className="p-2 ">Renata</td>
            <td className="p-2 ">3,763</td>
            <td className="p-2 ">5,000.00</td>
            <td className="p-2 ">5,754.95</td>
            <td className="p-2  flex gap-2 justify-center">
              <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                <Eye size={16} />
              </button>
              <button className="p-1 bg-green-500 text-white rounded hover:bg-green-600">
                <Edit size={16} />
              </button>
              <button className="p-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
