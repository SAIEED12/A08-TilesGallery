"use client";
import React from 'react';
import bannerImg from '@/assets/hero.jpg';
import bannerImg2 from '@/assets/banner-1.jpg';
import bannerImg3 from '@/assets/banner-2.jpg';

import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const slides = [
  { image: bannerImg, title: "Discover Your", highlight: "Aesthetic" },
  { image: bannerImg2, title: "Explore The", highlight: "Collection" },
  { image: bannerImg3, title: "Surface as", highlight: "Art" },
];



const Banner = () => {
  return (
    <section className={`${cormorantGaramond.className} relative h-screen w-full overflow-hidden rounded-lg shadow-2xl`}>
      <Swiper
       effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <Image src={slide.image} alt="Banner" fill priority={index === 0} className="object-cover object-center" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
              <div className="flex items-center gap-2 text-[#e09f2d] tracking-[0.3em] uppercase mb-6 font-medium">
                <span>✦</span>
                <span>Curated Collection · 2026</span>
              </div>

              <h1 className="text-5xl md:text-8xl text-white leading-tight mb-6">
                {slide.title} <br />
                Perfect <span className="text-[#e09f2d]">{slide.highlight}</span>
              </h1>

              <p className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed mb-10">
                A gallery of rare and refined tiles — from Moroccan zellige to Italian marble,
                each piece selected for those who design with intention.
              </p>

              <Link href="/all-tiles" className="px-8 py-3 bg-[#e09f2d] text-black font-semibold tracking-wide hover:bg-[#d18706] transition-colors flex items-center gap-2">
                Browse Now <FaArrowRightLong />
              </Link>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.4); }
        .swiper-pagination-bullet-active { background: #e09f2d; width: 24px; border-radius: 4px; }
      `}</style>
    </section>
  );
};

export default Banner;

