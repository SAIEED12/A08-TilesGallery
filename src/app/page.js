import Banner from "@/components/Banner";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Banner></Banner>
      <div className="w-full flex-1 flex items-center justify-center mt-20">
        <Marquee speed={50} className="text-[#e09f2d] uppercase tracking-[0.2em] text-sm md:text-xl">
           Join the Community | Now Showing: Nero Marquina | New Arrivals: Kintsugi Onyx | Weekly Feature: Modern Geometric Patterns | 
        </Marquee>
      </div>
    </div>
  );
}
