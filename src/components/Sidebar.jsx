import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  MessageSquare,
  Settings,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Users", icon: Users },
    { name: "Orders", icon: ShoppingBag },
    { name: "Messages", icon: MessageSquare },
    { name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile dark background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.aside
        initial={{ x: -260 }}
        animate={{
          x: isOpen ? 0 : -260,
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-50 h-screen w-64 bg-slate-950 text-white lg:translate-x-0"
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <h1 className="text-2xl font-bold tracking-wide">
            ALGORYX
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`mb-2 flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left ${
                  item.name === "Dashboard"
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>
    </>
  );
}

export default Sidebar;