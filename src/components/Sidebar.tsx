import {
  BookOpen,
  Folder,
  Layers,
  FileText,
  BarChart,
  LogOut,
  Upload,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-50 flex flex-col justify-between p-4 border-r">
      {/* Top */}
      <div>
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600 mb-6">
          MyStudyHelper
        </h1>

        {/* Section */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Study Library
          </p>
        </div>

        {/* Menu */}
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded-lg bg-indigo-100 text-indigo-600 font-medium">
            <Folder size={18} />
            My Library
          </li>

          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Layers size={18} />
            Study Sets
          </li>

          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <BookOpen size={18} />
            Flashcards
          </li>

          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <FileText size={18} />
            PDF Reader
          </li>

          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <BarChart size={18} />
            Analytics
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="space-y-3">
        {/* Import */}
        <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          <Upload size={16} />
          Import PDF
        </button>

        {/* Logout */}
        <div className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer hover:text-black">
          <LogOut size={16} />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;