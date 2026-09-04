import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function Navbar({
  setIsOpen,
  search,
  setSearch,
  setShowNotifications,
}) {
  return (
    
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-3 backdrop-blur sm:px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button
          className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        <div>
          <p className="text-sm text-slate-500">
            Welcome back
          </p>

          <h2 className="text-lg font-bold text-slate-900">
            Dashboard
          </h2>
        </div>
      </div>

      <div className="hidden max-w-md flex-1 px-6 sm:block">
        <div className="relative">
          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="relative rounded-xl p-2.5 hover:bg-slate-100"
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <Bell size={21} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
          
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
            TJ
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-900">
              Tisha Jhariya
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-slate-500"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;