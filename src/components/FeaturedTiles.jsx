import TilesCard from "./TilesCard";

const FeaturedTiles = async() => {
    const res = await fetch("https://tiles-gallery-ten.vercel.app/data.json");
    const data = await res.json();
    const featuredCards = data.slice(0, 4);
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-12">
            <h2 className="text-6xl text-[#dfb162]">Featured Tiles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {featuredCards.map((tile) => (
                    <TilesCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedTiles;