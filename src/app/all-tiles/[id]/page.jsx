import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { toast, Zoom } from "react-toastify";
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://tiles-gallery-ten.vercel.app/data.json", {
    cache: "no-store",
  });
  const tiles = await res.json();
  const tile = tiles.find((tile) => tile.id === id);

  return (
    <div className="min-h-screen bg-[#0a0a0b] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/all-tiles"
          className="inline-flex items-center gap-2 text-xl text-white hover:text-[#e09f2d] transition-colors mb-12"
        >
          <IoArrowBack /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/5">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {!tile.inStock && (
              <div className="absolute top-4 left-4 bg-black/80 border border-white/10 text-gray-400 text-xs tracking-widest uppercase px-3 py-1 rounded-full">
                Out of Stock
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-md uppercase text-[#e09f2d]">
              ✦ {tile.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {tile.title}
            </h1>

            <p className="text-white text-lg">
              Creator:{" "}
              <span className="text-[#e09f2d] text-lg">{tile.creator}</span>
            </p>

            <div className="h-px bg-white/30" />

            <p className="text-gray-300 text-xl">{tile.description}</p>

            <div>
              <p className="text-md uppercase text- font-bold mb-5 mt-5">
                Style Tags
              </p>
              <div className="flex gap-2 cursor-pointer">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-md px-4 py-1.5 rounded-full border border-[#e09f2d]/30 
                               text-[#e09f2d] hover:bg-[#e09f2d]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/30" />

            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-lg text-white uppercase tracking-widest mb-1">
                  Price
                </p>
                <p className="text-5xl font-semibold text-[#e09f2d]">
                  ${tile.price.toFixed(2)}
                  <span className="text-lg text-gray-400 ml-2">
                    {tile.currency}
                  </span>
                </p>
              </div>
              <button
                
                className="px-8 py-3 text-md font-semibold rounded-sm bg-[#c4851a] hover:bg-[#e09f2d]/90 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
