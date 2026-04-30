import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
const TilesCard = ({ tile }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#111113] border border-white/5 hover:border-[#e09f2d]/30 transition-all duration-300 cursor-pointer">
      
      <div className="relative w-full h-80 aspect-square">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 space-y-1">
        <h3 className="text-2xl  text-white">{tile.title}</h3>
        <p className="text-md text-gray-400 leading-relaxed">{tile.description}</p>
        <Link href={`/all-tiles/${tile.id}`} className="text-[#e09f2d] hover:text-[#f9c74f] text-lg font-medium"> 
          View Details <GoArrowUpRight className="inline" />
        </Link>
        
      </div>

    </div>
  );
};

export default TilesCard;