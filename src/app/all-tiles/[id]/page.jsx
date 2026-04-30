import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://tiles-gallery-ten.vercel.app/data.json");
  const tiles = await res.json();
  const tile = tiles.find((tile) => tile.id === id);

  if (!tile) return notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0b] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/all-tiles"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#e09f2d] transition-colors mb-12"
        >
          ← Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT — Large Image */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/5">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {!tile.inStock && (
              <div className="absolute top-4 left-4 bg-black/80 border border-white/10 text-gray-400 text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                Out of Stock
              </div>
            )}
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-6">
            {/* Category */}
            <p className="text-xs uppercase tracking-[0.3em] text-[#e09f2d]">
              ✦ {tile.category}
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {tile.title}
            </h1>

            {/* Creator */}
            <p className="text-gray-400 text-sm tracking-wide">
              Crafted by{" "}
              <span className="text-white font-medium">{tile.creator}</span>
            </p>

            <div className="h-px bg-white/10" />

            {/* Style Description */}
            <p className="text-gray-300 text-base leading-relaxed">
              {tile.description}
            </p>

            {/* Tags */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                Style Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tile.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-1.5 rounded-full border border-[#e09f2d]/30 
               text-[#e09f2d] tracking-wide hover:bg-[#e09f2d]/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Material", value: tile.material },
                { label: "Dimensions", value: tile.dimensions },
                { label: "Category", value: tile.category },
                {
                  label: "Stock",
                  value: tile.inStock ? "✓ Available" : "✗ Unavailable",
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-[#111113] border border-white/5 rounded-lg p-4"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      label === "Stock"
                        ? tile.inStock
                          ? "text-green-400"
                          : "text-red-400"
                        : "text-white"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                  Price / m²
                </p>
                <p className="text-3xl font-semibold text-white">
                  ${tile.price}
                  <span className="text-sm text-gray-400 ml-1">
                    {tile.currency}
                  </span>
                </p>
              </div>
              <button
                disabled={!tile.inStock}
                className={`px-8 py-3 text-sm font-semibold tracking-wide transition-colors rounded-sm
                  ${
                    tile.inStock
                      ? "bg-[#e09f2d] text-black hover:bg-[#d18706] cursor-pointer"
                      : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/10"
                  }`}
              >
                {tile.inStock ? "Add to Cart" : "Unavailable"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
