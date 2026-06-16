import type { RecentFight } from "@/lib/types";

export default function RecentFightRow({ fight }: { fight: RecentFight }) {
  const isWin = fight.result === "win";

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-slate-950/80 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-100">{fight.opponent}</p>
        <p className="mt-1 text-sm text-slate-400">{fight.method} · Round {fight.round}</p>
      </div>
      <span
        className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
          isWin ? "bg-emerald-500/15 text-emerald-300" : "bg-orange-500/15 text-orange-300"
        }`}
      >
        {fight.result.toUpperCase()}
      </span>
    </div>
  );
}
