"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SearchInput({ value }: { value?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(value || "");

  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  const debouncedUpdate = useMemo(() => {
    let timeoutId: number;

    return (nextValue: string) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const params = new URLSearchParams(window.location.search);

        if (nextValue) {
          params.set("q", nextValue);
        } else {
          params.delete("q");
        }

        const href = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`;
        router.replace(href);
      }, 300);
    };
  }, [pathname, router]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setQuery(nextValue);
    debouncedUpdate(nextValue);
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-4 shadow-sm sm:px-6 sm:py-5">
      <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="fighter-search">
        Search fighters
      </label>
      <input
        id="fighter-search"
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search by name…"
        className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
      />
    </div>
  );
}
