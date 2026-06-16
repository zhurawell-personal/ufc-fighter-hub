"use client";

import Link from "next/link";
import type { Fighter } from "@/lib/types";
import { fighterRoute } from "@/lib/routes";
import { getInitials } from "@/app/components/avatar";

export default function FighterCard({ fighter }: { fighter: Fighter }) {
  const initials = getInitials(fighter.name);

  return (
    <Link
      href={fighterRoute(fighter.id)}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500 hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 text-lg font-semibold text-slate-100">
          {initials}
        </div>
        <div>
          <p className="text-xl font-medium text-white">{fighter.name}</p>
          <p className="mt-1 text-sm text-slate-400">{fighter.nickname}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="inline-flex rounded-full bg-sky-600/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200 ring-1 ring-sky-500/20">
          {fighter.weightClass}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
        <span className="font-semibold text-emerald-400">{fighter.record.wins}W</span>
        <span>|</span>
        <span className="font-semibold text-orange-400">{fighter.record.losses}L</span>
        <span>|</span>
        <span className="font-semibold text-slate-300">{fighter.record.draws}D</span>
      </div>
    </Link>
  );
}
