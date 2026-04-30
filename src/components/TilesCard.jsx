import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const TilesCard = ({ tile }) => {
  return (
    <Link
      href={`/all-tiles/${tile.id}`}
      className="group block rounded-xl overflow-hidden bg-[#111113] border border-white/5 hover:border-[#e09f2d]/30 cursor-pointer"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-xl text-white">{tile.title}</h3>
        <p className="text-md text-gray-400">{tile.description}</p>
        <span className="inline-flex items-center gap-1 text-[#e09f2d] hover:text-[#f9c74f] text-lg font-medium pt-1">
          View Details <GoArrowUpRight />
        </span>
      </div>
    </Link>
  );
};

export default TilesCard;