import { Bell, CheckCircle2 } from "lucide-react";

function NotificationPanel({ notifications }) {
  return (
    <div className="absolute right-4 top-16 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">
          Notifications
        </h3>

        <Bell size={18} className="text-slate-500" />
      </div>

      <div className="space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex gap-3 rounded-xl p-3 transition hover:bg-slate-50"
          >
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm font-medium text-slate-900">
                {notification.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPanel;