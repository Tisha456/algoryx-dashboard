import { Mail, ShieldCheck } from "lucide-react";

function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
          TJ
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            Tisha Jhariya
          </h3>

          <p className="text-sm text-slate-500">
            Administrator
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Mail size={18} />
          <span>admin@algoryx.com</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <ShieldCheck size={18} />
          <span>Administrator Access</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;