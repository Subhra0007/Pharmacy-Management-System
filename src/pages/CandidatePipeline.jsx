import { useOutletContext } from "react-router-dom";
import { Filter, Users, Phone, Briefcase, CheckCircle, XCircle, Calendar, Plus, Mail, Star } from "lucide-react";
import { candidatePipelineData } from "../data/candidatePipelineData";

export default function CandidatePipeline() {
      const { darkMode } = useOutletContext();
      const { metrics, stages, candidates } = candidatePipelineData;

      return (
            <div
                  className={`p-6 ml-64 mt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
                        }`}
            >
                  <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                              <Filter /> Candidate Pipeline
                        </h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                              <Plus size={18} /> Add Candidate
                        </button>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                              title="Total Candidates"
                              value={metrics.totalCandidates}
                              icon={<Users size={24} className="text-blue-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="In Screening"
                              value={metrics.screening}
                              icon={<Filter size={24} className="text-purple-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Interviewing"
                              value={metrics.interviewing}
                              icon={<Phone size={24} className="text-orange-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Offers Extended"
                              value={metrics.offered}
                              icon={<CheckCircle size={24} className="text-green-500" />}
                              darkMode={darkMode}
                        />
                  </div>

                  {/* Pipeline Stages */}
                  <div className={`rounded-xl shadow-md p-4 mb-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                        <h2 className="font-bold text-lg mb-4">Pipeline Stages</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                              {stages.map((stage) => (
                                    <div
                                          key={stage.id}
                                          className={`p-4 rounded-lg text-center ${darkMode ? "bg-gray-700" : "bg-gray-50"
                                                }`}
                                    >
                                          <div className={`text-2xl font-bold text-${stage.color}-500`}>
                                                {stage.count}
                                          </div>
                                          <div className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                {stage.name}
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  {/* Candidates List */}
                  <div className={`rounded-xl shadow-md overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                              <h2 className="font-bold text-lg">All Candidates</h2>
                              <div className="flex gap-2">
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Stages</option>
                                          <option>Screening</option>
                                          <option>Phone Interview</option>
                                          <option>Technical Interview</option>
                                          <option>Final Interview</option>
                                          <option>Offer</option>
                                    </select>
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Positions</option>
                                          <option>Senior Pharmacist</option>
                                          <option>Pharmacy Technician</option>
                                          <option>HR Manager</option>
                                          <option>Clinical Pharmacist</option>
                                    </select>
                              </div>
                        </div>

                        <div className="divide-y dark:divide-gray-700">
                              {candidates.map((candidate) => (
                                    <div key={candidate.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                <div className="flex gap-4 items-start flex-1">
                                                      <img src={candidate.avatar} alt={candidate.name} className="w-12 h-12 rounded-full object-cover" />
                                                      <div className="flex-1">
                                                            <div className="flex items-start justify-between gap-2">
                                                                  <div>
                                                                        <h3 className="font-semibold text-base">{candidate.name}</h3>
                                                                        <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                              {candidate.id} • Applied for {candidate.position}
                                                                        </p>
                                                                  </div>
                                                            </div>

                                                            {/* Contact Info */}
                                                            <div className="flex flex-wrap gap-3 mt-2 text-xs">
                                                                  <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                        <Mail size={12} />
                                                                        <span>{candidate.email}</span>
                                                                  </div>
                                                                  <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                        <Phone size={12} />
                                                                        <span>{candidate.phone}</span>
                                                                  </div>
                                                                  <div className={`flex items-center gap-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                        <Briefcase size={12} />
                                                                        <span>{candidate.experience} experience</span>
                                                                  </div>
                                                            </div>

                                                            {/* Additional Info */}
                                                            <div className="flex flex-wrap gap-3 mt-2 text-xs">
                                                                  <div className={`flex items-center gap-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                                                        <Calendar size={12} />
                                                                        <span>Applied: {candidate.appliedDate}</span>
                                                                  </div>
                                                                  <div className={`flex items-center gap-1 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                                                        <span>Recruiter: {candidate.recruiter}</span>
                                                                  </div>
                                                            </div>

                                                            {/* Next Step */}
                                                            <div className={`mt-2 text-sm ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                                                                  <span className="font-medium">Next: </span>{candidate.nextStep}
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="flex flex-col gap-2 items-end min-w-[200px]">
                                                      {/* Rating */}
                                                      <div className="flex items-center gap-1">
                                                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                                            <span className="font-semibold">{candidate.rating}</span>
                                                            <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>/5.0</span>
                                                      </div>

                                                      {/* Stage Badge */}
                                                      <div className={`px-3 py-1 rounded text-xs font-medium 
                                                            ${candidate.stage === 'Offer' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                                                  candidate.stage === 'Final Interview' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                        candidate.stage === 'Technical Interview' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200' :
                                                                              candidate.stage === 'Phone Interview' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200' :
                                                                                    candidate.stage === 'Screening' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' :
                                                                                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'}
                                                      `}>
                                                            {candidate.stage}
                                                      </div>

                                                      {/* Status Badge */}
                                                      <div className={`px-3 py-1 rounded text-xs font-medium 
                                                            ${candidate.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                                                  'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'}
                                                      `}>
                                                            {candidate.status}
                                                      </div>

                                                      <button className={`text-xs px-3 py-1 rounded ${darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
                                                            } text-white transition-colors`}>
                                                            View Profile
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
