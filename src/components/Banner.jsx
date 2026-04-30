import React from 'react';
import bannerImg from '@/assets/hero.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
subsets: ["latin"],
weight: ["400"],
});

const Banner = () => {

  return (
    <section className={`${cormorantGaramond.className} relative h-screen w-full overflow-hidden rounded-lg shadow-2xl`}>
      
      <Image
        src={bannerImg}
        alt="Banner Image"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        <div className="flex items-center gap-2 text-[#e09f2d] text-md tracking-[0.3em] uppercase mb-6 font-medium">
          <span>✦</span>
          <span className='text-md'>Curated Collection · 2026</span>
        </div>

        <h1 className="text-5xl md:text-8xl text-white leading-tight mb-6">
          Discover Your <br />
          Perfect{" "}
          <span className="text-[#e09f2d] ">Aesthetic</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          A gallery of rare and refined tiles — from Moroccan zellige to Italian marble,
          each piece selected for those who design with intention.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/all-tiles"
            className="px-8 py-3 bg-[#e09f2d] text-black font-semibold text-sm tracking-wide hover:bg-[#d18706] transition-colors flex items-center gap-2"
          >
            Browse Now <span>→</span>
          </Link>
          <Link
            href="/all-tiles"
            className="px-8 py-3 border border-[#e09f2d] text-white text-sm tracking-wide hover:bg-[#e09f2d]/10 transition-colors"
          >
            View Collection
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;