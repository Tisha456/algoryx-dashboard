import { useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ActivityTable from "../components/ActivityTable";
import ProfileCard from "../components/ProfileCard";
import NotificationPanel from "../components/NotificationPanel";

import {
  stats,
  orders,
  notifications,
} from "../data/dashboardData";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] =
    useState(false);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      `${order.customer} ${order.id} ${order.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="lg:ml-64">
        <Navbar
          setIsOpen={setIsOpen}
          search={search}
          setSearch={setSearch}
          setShowNotifications={setShowNotifications}
        />

        {showNotifications && (
          <NotificationPanel
            notifications={notifications}
          />
        )}

        <main className="p-4 md:p-6 lg:p-8">
          <section className="mb-8">
            <p className="text-sm font-medium text-slate-500">
              Overview
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor your business performance and recent activity.
            </p>
          </section>

          <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                description={stat.description}
              />
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_340px]">
            <ActivityTable orders={filteredOrders} />

            <ProfileCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;