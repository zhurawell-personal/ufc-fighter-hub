// stat with a label and a progress bar
export default function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl bg-slate-950/80 p-5">
      <p className="text-sm text-slate-300">{label}</p>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-3 text-sm font-semibold text-slate-100">{value}%</p>
    </div>
  );
}
