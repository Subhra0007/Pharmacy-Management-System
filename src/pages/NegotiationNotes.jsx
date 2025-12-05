import { useOutletContext } from "react-router-dom";
import { MessageCircle, CheckCircle, Clock, XCircle, Calendar, Plus, DollarSign, User } from "lucide-react";
import { negotiationNotesData } from "../data/negotiationNotesData";

export default function NegotiationNotes() {
      const { darkMode } = useOutletContext();
      const { metrics, negotiations } = negotiationNotesData;

      return (
            <div
                  className={`p-6 ml-64 mt-16 min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
                        }`}
            >
                  <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                              <MessageCircle /> Negotiation Notes & Approvals
                        </h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                              <Plus size={18} /> Add Note
                        </button>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                              title="Total Negotiations"
                              value={metrics.totalNegotiations}
                              icon={<MessageCircle size={24} className="text-blue-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Active"
                              value={metrics.active}
                              icon={<Clock size={24} className="text-orange-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Approved"
                              value={metrics.approved}
                              icon={<CheckCircle size={24} className="text-green-500" />}
                              darkMode={darkMode}
                        />
                        <StatCard
                              title="Rejected"
                              value={metrics.rejected}
                              icon={<XCircle size={24} className="text-red-500" />}
                              darkMode={darkMode}
                        />
                  </div>

                  {/* Negotiations List */}
                  <div className={`rounded-xl shadow-md overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                              <h2 className="font-bold text-lg">All Negotiations</h2>
                              <div className="flex gap-2">
                                    <select className={`text-sm rounded-md px-2 py-1 border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}>
                                          <option>All Status</option>
                                          <option>Active</option>
                                          <option>Approved</option>
                                          <option>Rejected</option>
                                    </select>
                              </div>
                        </div>

                        <div className="divide-y dark:divide-gray-700">
                              {negotiations.map((negotiation) => (
                                    <div key={negotiation.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                                          <div className="flex flex-col gap-4">
                                                {/* Header */}
                                                <div className="flex items-start justify-between">
                                                      <div className="flex gap-4 items-start">
                                                            <img src={negotiation.candidateAvatar} alt={negotiation.candidateName} className="w-12 h-12 rounded-full object-cover" />
                                                            <div>
                                                                  <h3 className="font-semibold text-base">{negotiation.candidateName}</h3>
                                                                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                                                        {negotiation.id} • {negotiation.position}
                                                                  </p>
                                                            </div>
                                                      </div>

                                                      <div className="flex flex-col gap-2 items-end">
                                                            <div className={`px-3 py-1 rounded text-sm font-medium 
                                                                  ${negotiation.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                                                                        negotiation.status === 'Active' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200' :
                                                                              'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'}
                                                            `}>
                                                                  {negotiation.status}
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Offer Details */}
                                                <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                            <div>
                                                                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Original Offer</p>
                                                                  <p className="font-semibold flex items-center gap-1">
                                                                        <DollarSign size={14} />
                                                                        {negotiation.originalOffer}
                                                                  </p>
                                                            </div>
                                                            <div>
                                                                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Counter Offer</p>
                                                                  <p className="font-semibold flex items-center gap-1 text-orange-600 dark:text-orange-400">
                                                                        <DollarSign size={14} />
                                                                        {negotiation.counterOffer}
                                                                  </p>
                                                            </div>
                                                            <div>
                                                                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Final Offer</p>
                                                                  <p className="font-semibold flex items-center gap-1 text-green-600 dark:text-green-400">
                                                                        <DollarSign size={14} />
                                                                        {negotiation.finalOffer || "Pending"}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Benefits */}
                                                {negotiation.benefits.length > 0 && (
                                                      <div>
                                                            <p className={`text-xs font-medium mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                  Additional Benefits:
                                                            </p>
                                                            <div className="flex flex-wrap gap-2">
                                                                  {negotiation.benefits.map((benefit, index) => (
                                                                        <span
                                                                              key={index}
                                                                              className={`px-2 py-1 rounded text-xs ${darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-50 text-blue-700"
                                                                                    }`}
                                                                        >
                                                                              {benefit}
                                                                        </span>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                )}

                                                {/* Timeline Notes */}
                                                <div>
                                                      <p className={`text-xs font-medium mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                            Negotiation Timeline:
                                                      </p>
                                                      <div className="space-y-3">
                                                            {negotiation.notes.map((note, index) => (
                                                                  <div
                                                                        key={index}
                                                                        className={`pl-4 border-l-2 ${darkMode ? "border-gray-600" : "border-gray-300"
                                                                              }`}
                                                                  >
                                                                        <div className="flex items-center gap-2 text-xs mb-1">
                                                                              <Calendar size={12} className={darkMode ? "text-gray-500" : "text-gray-400"} />
                                                                              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>{note.date}</span>
                                                                              <span className={darkMode ? "text-gray-500" : "text-gray-400"}>•</span>
                                                                              <User size={12} className={darkMode ? "text-gray-500" : "text-gray-400"} />
                                                                              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>{note.author}</span>
                                                                        </div>
                                                                        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                                                              {note.content}
                                                                        </p>
                                                                  </div>
                                                            ))}
                                                      </div>
                                                </div>

                                                {/* Approval Info */}
                                                {negotiation.approvedBy && (
                                                      <div className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                                            Approved by {negotiation.approvedBy} on {negotiation.approvalDate}
                                                      </div>
                                                )}
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
