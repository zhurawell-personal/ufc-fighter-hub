"use client";

import React, { useState } from "react";
import type { Fighter } from "@/lib/types";
import FighterCard from "./fighter-card";

interface LoadMoreGridProps {
  fighters: Fighter[];
  initialCount?: number;
  increment?: number;
  className?: string;
}

export default function LoadMoreGrid({
  fighters,
  initialCount = 6,
  increment = 6,
  className,
}: LoadMoreGridProps) {
  const [visible, setVisible] = useState(initialCount);

  const showMore = () => setVisible((v) => Math.min(v + increment, fighters.length));

  return (
    <>
      <div className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3 ${className ?? ""}`}>
        {fighters.slice(0, visible).map((fighter) => (
          <FighterCard key={fighter.id} fighter={fighter} />
        ))}
      </div>

      {visible < fighters.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={showMore}
            className="rounded-full cursor-pointer bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 border border-white/10"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
