import { motion } from "framer-motion";

function ActivityTable({ orders }) {
  const getStatusClass = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-700";
    }

    if (status === "Pending") {
      return "bg-amber-50 text-amber-700";
    }

    return "bg-red-50 text-red-700";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div>
          <h3 className="font-bold text-slate-900">
            Recent Activity
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Latest orders and transactions
          </p>
        </div>

        <button className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Order</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.3 + index * 0.08,
                }}
                className="border-b border-slate-50 last:border-0 hover:bg-slate-50"
              >
                <td className="px-5 py-4 font-medium text-slate-900">
                  {order.customer}
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  {order.id}
                </td>

                <td className="px-5 py-4 text-sm text-slate-500">
                  {order.date}
                </td>

                <td className="px-5 py-4 font-semibold text-slate-900">
                  {order.amount}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ActivityTable;