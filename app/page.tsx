import Link from "next/link";
import Image from "next/image";

const featuredFighters = [
  {
    name: "Valentina Shevchenko",
    weightClass: "Flyweight",
    record: "23-3",
  },
  {
    name: "Islam Makhachev",
    weightClass: "Lightweight",
    record: "24-1",
  },
  {
    name: "Israel Adesanya",
    weightClass: "Middleweight",
    record: "24-3",
  },
];

export default function Page() {
  return (
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden bg-gray-800 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black">
        <Image
          src="/holloway_bmf.jpg"
          alt="UFC Octagon background"
          fill
          loading="eager"
          className="object-cover object-center opacity-20"
        />
        </div> 
        <div className="relative mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-500">
              UFC FIGHTER HUB
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Know every fighter. Predict every fight.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              Compare stats, dig into fight records, and get AI-powered predictions before the cage doors close.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100"
              >
                Compare fighters
              </Link>
              <Link
                href="/predict"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
              >
                Predict a fight
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8 py-16">
        <div className="mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <p className="text-4xl font-bold text-white">600+</p>
            <p className="mt-3 text-sm text-slate-300">fighters tracked</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <p className="text-4xl font-bold text-white">12</p>
            <p className="mt-3 text-sm text-slate-300">weight classes</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-center">
            <p className="text-4xl font-bold text-white">AI</p>
            <p className="mt-3 text-sm text-slate-300">fight predictions</p>
          </div>
        </div>
      </section>

      <section className="space-y-10 py-16">
        <div className="mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">Featured fighters</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredFighters.map((fighter) => (
              <div key={fighter.name} className="rounded-3xl bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <div className="mb-5 aspect-square rounded-3xl bg-gray-700" />
                <h3 className="text-xl font-semibold">{fighter.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{fighter.weightClass}</p>
                <p className="mt-3 text-sm font-semibold text-red-500">{fighter.record}</p>
              </div>
            ))}

            <Link
              href="/fighters"
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-red-500 hover:bg-white/10"
            >
              <div className="mb-5 flex h-full items-center justify-center rounded-3xl bg-gray-700 text-3xl text-white/70">
                ■■
              </div>
              <div>
                <p className="text-xl font-semibold">Browse all fighters</p>
                <p className="mt-2 text-sm text-slate-400">Explore every athlete in the roster</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/5 py-16">
        <div className="mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px] flex flex-col gap-8 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">Two fighters, one breakdown</p>
            <h2 className="text-3xl font-semibold">Two fighters, one breakdown</h2>
            <p className="max-w-xl text-slate-300">
              Pick any two athletes and see strikes, takedowns and reach side by side.
            </p>
          </div>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Compare
          </Link>
        </div>
      </section>
    </main>
  );
}
