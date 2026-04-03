import { Upload, Search } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">

      {/* Search bar */}
      <div className="flex flex-col items-center pt-10 pb-4">
        <div className="flex items-center w-150 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm gap-3">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search knowledge, sources, or citations..."
            className="flex-1 outline-none text-sm text-gray-600 bg-transparent"
          />
          <span className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5">
            CMD + K
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Searching: <span className="font-semibold text-gray-600">Full Library</span>
          {"  "}Refine by: <span className="font-semibold text-gray-600">Semantic Match</span>
        </p>
      </div>

      {/* Upload card */}
      <div className="flex flex-1 items-center justify-center px-10 pb-10">
        <div className="w-full max-w-2xl bg-white border border-dashed border-gray-300 rounded-2xl shadow-sm flex flex-col items-center justify-center py-20 px-10 text-center">

          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Upload size={28} className="text-indigo-600" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-lg font-bold">
              +
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ingest New Source
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            Drag research PDFs, lecture transcripts, or raw notes here.
            MyStudyHelper will automatically map citations and metadata.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              <Upload size={16} />
              Browse Files
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              🔗 Paste URL
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-6 tracking-widest uppercase">
            Supported: PDF, EPUB, MD, TXT, DOCX
          </p>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;