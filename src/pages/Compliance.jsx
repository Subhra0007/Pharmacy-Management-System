import { useOutletContext } from "react-router-dom";
import { ShieldCheck, CheckCircle, AlertTriangle, XCircle, Calendar, Plus, FileText, AlertOctagon, Clock } from "lucide-react";
import { complianceData } from "../data/complianceData";

export default function Compliance() {
      const { darkMode } = useOutletContext();
      const { metrics, requirements } = complianceData;

      return (
            <div
                  className={`p-6 ml-64 mt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
                        }`}
            >
                  <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                              <ShieldCheck /> Compliance Management
                        </h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                              <Plus size={18} /> Add Requirement
                        </button>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                              title="Total Requirements"
                              value={metrics.totalRequirements}
                              icon={<FileText size={24} className="text-blue-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Compliant"
                              value={metrics.compliant}
                              icon={<CheckCircle size={24} className="text-green-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Pending Review"
                              value={metrics.pending}
                              icon={<AlertTriangle size={24} className="text-orange-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Non-Compliant"
                              value={metrics.nonCompliant}
                              icon={<XCircle size={24} className="text-red-500" />}
                              darkMode={darkMode}
                        />
                  </div>

                  {/* Next Audit Alert */}
                  <div className={`mb-8 p-4 rounded-lg flex items-center justify-between border ${darkMode ? "bg-blue-900/20 border-blue-800 text-blue-200" : "bg-blue-50 border-blue-200 text-blue-800"
                        }`}>
                        <div className="flex items-center gap-3">
                              <AlertOctagon size={24} />
                              <div>
                                    <h3 className="font-bold">Upcoming Audit Scheduled</h3>
                                    <p className="text-sm">The next internal compliance audit is scheduled for {metrics.nextAudit}.</p>
                              </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              View Schedule
                        </button>
                  </div>

                  {/* Compliance List */}
                  <div className={`rounded-xl shadow-md overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                              <h2 className="font-bold text-lg">Requirements & Standards</h2>
                              <div className="flex gap-2">
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Categories</option>
                                          <option>Regulatory</option>
                                          <option>Safety</option>
                                          <option>Operations</option>
                                    </select>
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Status</option>
                                          <option>Compliant</option>
                                          <option>Pending</option>
                                          <option>Non-Compliant</option>
                                    </select>
                              </div>
                        </div>

                        <div className="divide-y dark:divide-gray-700">
                              {requirements.map((req) => (
                                    <div key={req.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                          <div className="flex flex-col gap-4">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                      <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                  <h3 className="font-semibold text-base">{req.title}</h3>
                                                                  <span className={`px-2 py-0.5 rounded text-xs ${req.priority === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                                                                        req.priority === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                              'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                                                                        }`}>
                                                                        {req.priority}
                                                                  </span>
                                                            </div>
                                                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-2`}>
                                                                  {req.description}
                                                            </p>

                                                            <div className="flex flex-wrap gap-4 text-xs">
                                                                  <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                        <FileText size={12} /> Category: {req.category}
                                                                  </span>
                                                                  <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                        <Clock size={12} /> Frequency: {req.frequency}
                                                                  </span>
                                                                  <span className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                        Assignee: {req.assignee}
                                                                  </span>
                                                            </div>
                                                      </div>

                                                      <div className="flex flex-col items-end gap-2 min-w-[140px]">
                                                            <div className={`px-3 py-1.5 rounded text-sm font-medium ${req.status === 'Compliant' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                                                  req.status === 'Pending' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                                                                  }`}>
                                                                  {req.status}
                                                            </div>
                                                            <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                  Goal: 100%
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Audit details box */}
                                                <div className={`p-3 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3 ${darkMode ? "bg-gray-700" : "bg-gray-50"
                                                      }`}>
                                                      <div className="flex flex-wrap gap-4 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                  <Calendar size={14} className="text-gray-400" />
                                                                  <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                                                                        Last Audit: {req.lastAuditDate}
                                                                  </span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                  <Calendar size={14} className={req.status === 'Non-Compliant' ? "text-red-500" : "text-gray-400"} />
                                                                  <span className={`${req.status === 'Non-Compliant' ? "text-red-600 dark:text-red-400 font-medium" :
                                                                        darkMode ? "text-gray-300" : "text-gray-700"
                                                                        }`}>
                                                                        Next Due: {req.nextDueDate}
                                                                  </span>
                                                            </div>
                                                      </div>

                                                      <div className="flex items-center gap-3 w-full sm:w-auto">
                                                            <div className="flex-1 sm:w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                                                                  <div
                                                                        className={`h-full rounded-full ${req.complianceRate >= 98 ? 'bg-green-500' :
                                                                              req.complianceRate >= 80 ? 'bg-orange-500' :
                                                                                    'bg-red-500'
                                                                              }`}
                                                                        style={{ width: `${req.complianceRate}%` }}
                                                                  ></div>
                                                            </div>
                                                            <span className="text-sm font-bold w-12 text-right">{req.complianceRate}%</span>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      );
}

function StatCard({ title, value, icon, darkMode }) {
      return (
            <div
                  className={`flex items-center p-4 rounded-xl shadow-sm ${darkMode ? "bg-gray-800" : "bg-white"
                        }`}
            >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">{icon}</div>
                  <div>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{title}</p>
                        <h3 className="text-xl font-bold">{value}</h3>
                  </div>
            </div>
      );
}
