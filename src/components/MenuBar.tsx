type MenuBarProps = {
  token: string | null;
  username?: string;
};

export default function MenuBar({ token, username }: MenuBarProps) {
  const initial = username?.trim()?.charAt(0)?.toUpperCase() || 'U';

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <div className="text-3xl font-semibold text-indigo-600">
        MyStudyHelper
      </div>

      <div className="flex items-center gap-3">
        {!token ? (
          <>
            <button className="rounded-xl border border-indigo-600 px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-50 cursor-pointer">
              Sign up
            </button>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 cursor-pointer">
              Log in
            </button>
          </>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
            {initial}
          </div>
        )}
      </div>
    </header>
  );
}