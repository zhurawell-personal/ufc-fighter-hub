import Link from "next/link";
import { notFound } from "next/navigation";
import fightersData from "@/data/fighters.json";
import { fightersRoute } from "@/lib/routes";
import type { Fighter, RecentFight, Stats } from "@/lib/types";
import Container from "@/app/components/container";
import StatCard from "@/app/components/stat-card";
import RecentFightRow from "@/app/components/recent-fight-row";
import { getInitials } from "@/app/components/avatar";

interface FighterPageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: FighterPageProps) {
  const resolvedParams = await params;
  const fighters: Fighter[] = fightersData as Fighter[];
  const fighter = fighters.find((item: Fighter) => item.id === resolvedParams.id);

  if (!fighter) {
    notFound();
  }

  const { name, nickname, weightClass, record, stats, recentFights } = fighter;
  const initials = getInitials(name);

  const statItems: { key: keyof Stats; label: string }[] = [
    { key: "strikingAccuracy", label: "Striking Accuracy" },
    { key: "takedownAccuracy", label: "Takedown Accuracy" },
    { key: "takedownDefense", label: "Takedown Defense" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section>
        <Container className="py-12">
          <div className="mb-6">
            <Link href={fightersRoute} className="mb-6 text-sm font-medium text-slate-300 hover:text-white">
              ← Back to fighters
            </Link>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-700 text-xl font-semibold text-slate-100">
                  {initials}
                </div>
                <div>
                  <p className="text-2xl font-medium text-white">{name}</p>
                  <p className="text-sm text-slate-400">{nickname}</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <span className="inline-flex rounded-full bg-sky-600/15 px-4 py-2 text-sm font-semibold text-sky-200 ring-1 ring-sky-500/20">
                  {weightClass}
                </span>
                <div className="grid w-full grid-cols-3 gap-3 text-center sm:w-auto">
                  <div className="rounded-2xl bg-slate-950/80 px-3 py-3">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">Wins</p>
                    <p className="mt-2 text-2xl font-semibold text-emerald-400">{record.wins}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 px-3 py-3">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">Losses</p>
                    <p className="mt-2 text-2xl font-semibold text-orange-400">{record.losses}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 px-3 py-3">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">Draws</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-300">{record.draws}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-10">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Striking & grappling</p>
            <div className="grid gap-4 md:grid-cols-3">
              {statItems.map((stat) => (
                <StatCard key={String(stat.key)} label={stat.label} value={stats[stat.key]} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-10">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Physical</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-300">Reach</p>
                <p className="mt-4 text-3xl font-semibold text-white">{stats.reach / 10}"</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm text-slate-300">Height</p>
                <p className="mt-4 text-3xl font-semibold text-white">{stats.height / 10}"</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-16">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/90 p-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Recent fights</p>
            <div className="space-y-3">
              {recentFights.map((fight: RecentFight, index: number) => (
                <RecentFightRow key={`${fight.opponent}-${index}`} fight={fight} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
