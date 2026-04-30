import AllTilesClient from "@/components/AllTilesClient";

const AllTilesPage = async () => {
  const res = await fetch("https://tiles-gallery-ten.vercel.app/data.json");
  const tiles = await res.json();
  return <AllTilesClient tiles={tiles} />;
};

export default AllTilesPage;