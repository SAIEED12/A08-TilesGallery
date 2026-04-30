import TilesCard from "@/components/TilesCard";

const allTilesPage = async () => {
    const res = await fetch("https://tiles-gallery-ten.vercel.app/data.json");
    const tiles = await res.json();
    return (
        <div className="max-w-7xl contianer mx-auto">
            <h2 className="mt-20 text-5xl mb-10 text-[#dfb162]">Browse the complete collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {tiles.map(tile => <TilesCard key={tile.id} tile={tile} />)}
            </div>
        </div>
    );
};

export default allTilesPage;