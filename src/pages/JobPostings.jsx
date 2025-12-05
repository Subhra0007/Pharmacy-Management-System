import { useOutletContext } from "react-router-dom";
import { Megaphone, Briefcase, FileText, XCircle, Calendar, Plus, MapPin, DollarSign, Clock } from "lucide-react";
import { jobPostingsData } from "../data/jobPostingsData";

export default function JobPostings() {
      const { darkMode } = useOutletContext();
      const { metrics, postings } = jobPostingsData;

      return (
            <div
                  className={`p-6 ml-64 mt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
                        }`}
            >
                  <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                              <Megaphone /> Job Postings
                        </h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                              <Plus size={18} /> Create Job Posting
                        </button>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                              title="Active Postings"
                              value={metrics.active}
                              icon={<Megaphone size={24} className="text-blue-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Draft Postings"
                              value={metrics.draft}
                              icon={<FileText size={24} className="text-orange-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Closed Postings"
                              value={metrics.closed}
                              icon={<XCircle size={24} className="text-gray-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Total Applicants"
                              value={metrics.totalApplicants}
                              icon={<Briefcase size={24} className="text-green-500" />}
                              darkMode={darkMode}
                        />
                  </div>

                  {/* Job Postings List */}
                  <div className={`rounded-xl shadow-md overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                              <h2 className="font-bold text-lg">All Job Postings</h2>
                              <div className="flex gap-2">
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Status</option>
                                          <option>Active</option>
                                          <option>Draft</option>
                                          <option>Closed</option>
                                    </select>
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Departments</option>
                                          <option>Pharmacy Operations</option>
                                          <option>Human Resources</option>
                                          <option>Clinical Services</option>
                                          <option>IT</option>
                                    </select>
                              </div>
                        </div>

                        <div className="divide-y dark:divide-gray-700">
                              {postings.map((job) => (
                                    <div key={job.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                <div className="flex-1">
                                                      <div className="flex items-start justify-between gap-2">
                                                            <div>
                                                                  <h3 className="font-semibold text-lg">{job.title}</h3>
                                                                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                        {job.id} • {job.department}
                                                                  </p>
                                                            </div>
                                                      </div>

                                                      <p className={`text-sm mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                                            {job.description}
                                                      </p>

                                                      {/* Job Details */}
                                                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                  <MapPin size={14} />
                                                                  <span>{job.location}</span>
                                                            </div>
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                  <Briefcase size={14} />
                                                                  <span>{job.type}</span>
                                                            </div>
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                  <DollarSign size={14} />
                                                                  <span>{job.salary}</span>
                                                            </div>
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                  <Clock size={14} />
                                                                  <span>{job.experience}</span>
                                                            </div>
                                                      </div>

                                                      {/* Dates */}
                                                      <div className="flex flex-wrap gap-4 mt-2 text-xs">
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                                                  <Calendar size={12} />
                                                                  <span>Posted: {job.postedDate}</span>
                                                            </div>
                                                            <div className={`flex items-center gap-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                                                  <Calendar size={12} />
                                                                  <span>Closes: {job.closingDate}</span>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="flex flex-col gap-2 items-end min-w-[180px]">
                                                      <div className="flex gap-2 flex-wrap justify-end">
                                                            <div className={`px-3 py-1 rounded text-xs font-medium 
                                                                  ${job.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                                                        job.status === 'Draft' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                              'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'}
                                                            `}>
                                                                  {job.status}
                                                            </div>
                                                            <div className={`px-3 py-1 rounded text-xs font-medium 
                                                                  ${job.priority === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200' :
                                                                        job.priority === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                              job.priority === 'Medium' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                                                                                    'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'}
                                                            `}>
                                                                  {job.priority}
                                                            </div>
                                                      </div>

                                                      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"
                                                            }`}>
                                                            <Briefcase size={16} className="text-blue-500" />
                                                            <div className="text-right">
                                                                  <p className="text-xs text-gray-500 dark:text-gray-400">Applicants</p>
                                                                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{job.applicants}</p>
                                                            </div>
                                                      </div>

                                                      <button className={`text-xs px-3 py-1 rounded ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
                                                            } text-white transition-colors`}>
                                                            View Details
                                                      </button>
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
