import {
  Users,
  IndianRupee,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

function StatCard({ title, value, change, description }) {
  const icons = {
    "Total Users": Users,
    "Total Revenue": IndianRupee,
    "Total Orders": ShoppingBag,
    "Growth Rate": TrendingUp,
  };

  const Icon = icons[title] || TrendingUp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
            }}
            className="mt-2 text-2xl font-bold text-slate-900"
          >
            {value}
          </motion.h3>
        </div>

        <motion.div
          whileHover={{ rotate: 8 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl bg-slate-100 p-3 transition group-hover:bg-slate-900 group-hover:text-white"
        >
          <Icon size={22} />
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-semibold text-emerald-600">
          {change}
        </span>

        <span className="text-xs text-slate-400">
          {description}
        </span>
      </div>
    </motion.div>
  );
}

export default StatCard;