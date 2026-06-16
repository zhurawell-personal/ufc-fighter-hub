import SearchInput from "./search-input";
import fightersData from "@/data/fighters.json";
import type { Fighter } from "@/lib/types";
import Container from "@/app/components/container";
import FighterCard from "@/app/components/fighter-card";
import LoadMoreGrid from "@/app/components/load-more-grid";

interface FightersPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: FightersPageProps) {
  const resolvedSearchParams = await searchParams;
  const query = typeof resolvedSearchParams?.q === "string" ? resolvedSearchParams.q.trim() : "";
  const normalizedQuery = query.toLowerCase();
  const fighters: Fighter[] = fightersData as Fighter[];
  const filteredFighters: Fighter[] = normalizedQuery
    ? fighters.filter((fighter: Fighter) => fighter.name.toLowerCase().includes(normalizedQuery))
    : fighters;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section>
        <Container className="py-12">
          <h1 className="text-4xl font-semibold text-white">Fighters</h1>
          <div className="my-8">
            <SearchInput value={query} />
          </div>
          {filteredFighters.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-12 text-center">
              <p className="text-sm text-slate-500">No fighters found. Try again</p>
            </div>
          ) : (
            <LoadMoreGrid fighters={filteredFighters} />
          )}
        </Container>
      </section>
    </div>
  );
}
