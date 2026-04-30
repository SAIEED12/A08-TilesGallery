"use client";
import { useState, useMemo } from "react";
import TilesCard from "@/components/TilesCard";

const AllTilesClient = ({ tiles }) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) {
      return tiles;
    } 
    return tiles.filter((tile) => tile.title.toLowerCase().includes(search));
  }, [query, tiles]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="mt-20 text-5xl mb-10 text-[#dfb162]">
        Browse the complete collection
      </h2>

      <div className="relative w-full sm:w-125 mb-12">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e09f2d]">
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title..."
          className="w-full bg-[#111113] border border-white/10 rounded-lg
                     pl-10 pr-4 py-3 text-white text-lg placeholder:text-gray-500
                     focus:outline-none focus:border-[#e09f2d]/50 transition-colors"
        />
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-gray-500">
          <p className="text-lg">
            No tiles found for {`"`}
            <span className="text-[#e09f2d]">{query}</span>
            {`"`}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllTilesClient;
