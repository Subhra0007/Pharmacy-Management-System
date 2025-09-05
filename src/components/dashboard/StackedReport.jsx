import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { PiDotsThree } from "react-icons/pi";

export default function StackedReport({ data }) {
  return (
    <div className="col-span-12 md:col-span-4 bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Graph Report Today</h3>
        <PiDotsThree className="size-10 p-2 shadow"/>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={4} barCategoryGap="20%">
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip /> 
           <Bar dataKey="green" stackId="a" fill="#22c55e" name="Crosin" />
           <Bar dataKey="orange" stackId="a" fill="#f97316" name="Gelusil" />
           <Bar dataKey="blue" stackId="a" fill="#3b82f6" name="Dolo 650" />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
