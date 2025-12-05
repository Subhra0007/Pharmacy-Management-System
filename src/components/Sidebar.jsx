import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart,
  Settings,
  HelpCircle,
  ScrollText,
  BanknoteArrowDown,
  IdCardLanyard,
  Users,
  CalendarClock,
  Briefcase,
  TrendingUp,
  DollarSign,
  Contact,
  Network,
  CircleUser,
  Info,
  GitMerge,
  CalendarDays,
  ListTodo,
  FilePlus,
  Megaphone,
  Filter,
  CalendarCheck,
  FileSignature,
  MessageCircle,
  TableProperties,
  Palmtree,
  Hourglass,
  GraduationCap,
  Map,
  Award,
  BarChart2,
  ShieldCheck,
} from "lucide-react";

const Sidebar = ({ darkMode }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === path
      ? "bg-blue-100 text-blue-700 font-semibold dark:bg-blue-900 dark:text-blue-200"
      : darkMode
        ? "text-gray-100 hover:bg-gray-700"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div
      className={`w-64 h-screen fixed top-0 left-0 shadow-md flex flex-col transition-colors duration-300 z-50 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
    >
      <div className="px-6 py-4 font-bold text-xl">Phermo</div>
      {/* 👇 Added styled scrollbar */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-900">
        <nav className="p-4 space-y-4">
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                }`}
            >
              Menu
            </p>
            <Link to="/" className={linkClass("/")}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <div className="ml-8 mt-1 space-y-1 text-sm">
              <Link to="/headcount" className={linkClass("/headcount")}>
                <Users size={16} />
                <span>Headcount</span>
              </Link>
              <Link to="/attendance" className={linkClass("/attendance")}>
                <CalendarClock size={16} />
                <span>Attendance</span>
              </Link>
              <Link to="/vacancypage" className={linkClass("/vacancypage")}>
                <Briefcase size={16} />
                <span>Vacancy list</span>
              </Link>
              <Link to="/performance" className={linkClass("/performance")}>
                <TrendingUp size={16} />
                <span>Performance board</span>
              </Link>
              <Link to="/payroll" className={linkClass("/payroll")}>
                <DollarSign size={16} />
                <span>Payroll</span>
              </Link>
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <p
                className={`px-3 mb-1 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Employee management
              </p>
              <div className="ml-5 space-y-1">
                {/* <Link to="/employee-directory" className={linkClass("/employee-directory")}>
                  <Contact size={16} />
                  <span>Employee directory</span>
                </Link> */}
                <Link to="/team-hierarchy" className={linkClass("/team-hierarchy")}>
                  <Network size={16} />
                  <span>Team hierarchy</span>
                </Link>
                <Link to="/employee-profiles" className={linkClass("/employee-profiles")}>
                  <CircleUser size={16} />
                  <span>Employee profiles</span>
                </Link>
                <Link to="/status" className={linkClass("/status")}>
                  <Info size={16} />
                  <span>Status</span>
                </Link>
                <Link to="/workflow" className={linkClass("/workflow")}>
                  <GitMerge size={16} />
                  <span>Workflow</span>
                </Link>
                <Link to="/event-tracker" className={linkClass("/event-tracker")}>
                  <CalendarDays size={16} />
                  <span>Event tracker</span>
                </Link>
                <Link to="/task-management" className={linkClass("/task-management")}>
                  <ListTodo size={16} />
                  <span>Task management</span>
                </Link>
              </div>
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <p
                className={`px-3 mb-1 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Application tracking system
              </p>
              <div className="ml-5 space-y-1">
                <Link to="/#ats-jd" className={linkClass("/#ats-jd")}>
                  <FilePlus size={16} />
                  <span>JD creation</span>
                </Link>
                <Link to="/job-postings" className={linkClass("/job-postings")}>
                  <Megaphone size={16} />
                  <span>Job postings</span>
                </Link>
                <Link to="/candidate-pipeline" className={linkClass("/candidate-pipeline")}>
                  <Filter size={16} />
                  <span>Candidate pipeline</span>
                </Link>
                <Link to="/interview-scheduling" className={linkClass("/interview-scheduling")}>
                  <CalendarCheck size={16} />
                  <span>Interview scheduling</span>
                </Link>
                <Link to="/offer-management" className={linkClass("/offer-management")}>
                  <FileSignature size={16} />
                  <span>Offer management</span>
                </Link>
                <Link to="/negotiation-notes" className={linkClass("/negotiation-notes")}>
                  <MessageCircle size={16} />
                  <span>Negotiation notes & approvals</span>
                </Link>
              </div>
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <p
                className={`px-3 mb-1 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Time off management
              </p>
              <div className="ml-5 space-y-1">
                <Link to="/time-sheet" className={linkClass("/time-sheet")}>
                  <TableProperties size={16} />
                  <span>Time sheet</span>
                </Link>
                <Link to="/pto-list" className={linkClass("/pto-list")}>
                  <Palmtree size={16} />
                  <span>PTO list</span>
                </Link>
                <Link to="/overtime-list" className={linkClass("/overtime-list")}>
                  <Hourglass size={16} />
                  <span>Overtime list</span>
                </Link>
              </div>
            </div>
            <div className="mt-3 space-y-1 text-sm">
              <p
                className={`px-3 mb-1 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
              >
                Knowledge management
              </p>
              <div className="ml-5 space-y-1">
                <Link to="/trainings" className={linkClass("/trainings")}>
                  <GraduationCap size={16} />
                  <span>Trainings</span>
                </Link>
                <Link to="/skill-roadmap" className={linkClass("/skill-roadmap")}>
                  <Map size={16} />
                  <span>Skill roadmap</span>
                </Link>
                <Link to="/certifications" className={linkClass("/certifications")}>
                  <Award size={16} />
                  <span>Certifications</span>
                </Link>
                <Link to="/progress" className={linkClass("/progress")}>
                  <BarChart2 size={16} />
                  <span>Progress tracking</span>
                </Link>
                <Link to="/compliance" className={linkClass("/compliance")}>
                  <ShieldCheck size={16} />
                  <span>Compliance and tax information</span>
                </Link>
              </div>
            </div>
            <Link to="/analytics" className={linkClass("/analytics")}>
              <BarChart size={20} />
              <span>Analytics</span>
            </Link>
          </div>
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                }`}
            >
              Others
            </p>
            <Link to="/customer-orders" className={linkClass("/customer-orders")}>
              <ClipboardList size={20} />
              <span>Customer Orders</span>
            </Link>
            <Link to="/notes" className={linkClass("/notes")}>
              <ScrollText size={20} />
              <span>Notes</span>
            </Link>
            <Link to="/expenses" className={linkClass("/expenses")}>
              <BanknoteArrowDown size={20} />
              <span>Expenses</span>
            </Link>
            <Link to="/employee" className={linkClass("/employee")}>
              <IdCardLanyard size={20} />
              <span>Employee</span>
            </Link>
          </div>
          <div>
            <p
              className={`px-3 mb-2 text-xs font-semibold uppercase ${darkMode ? "text-gray-400" : "text-gray-500"
                }`}
            >
              Preferences
            </p>
            <Link to="/help-supports" className={linkClass("/help-supports")}>
              <HelpCircle size={20} />
              <span>Help & Supports</span>
            </Link>
            <Link to="/settings" className={linkClass("/settings")}>
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </nav>
      </div>
      <div className="p-4">
        <div
          className={`rounded-xl p-4 text-center shadow-sm transition-colors duration-300 ${darkMode
            ? "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-100"
            : "bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 text-gray-800"
            }`}
        >
          <p className="text-lg text-green-600 mt-1">234 days left</p>
          <button
            className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition ${darkMode
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            Get Lifetime Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
