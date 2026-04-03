export default function MenuBar({ username }: { username?: string }) {
  const initial = username?.trim()?.charAt(0)?.toUpperCase() || 'U';

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <div className="text-3xl font-semibold text-indigo-600">
        MyStudyHelper
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
        {initial}
      </div>
    </header>
  );
}