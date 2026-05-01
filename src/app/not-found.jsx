import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#e09f2d 1px, transparent 1px), linear-gradient(90deg, #e09f2d 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }} 
      />
      <div className="absolute z-0 select-none pointer-events-none animate-pulse duration-4000">
        <p className="text-[22vw] font-black leading-none text-white/2 uppercase tracking-tighter">
          ERROR
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="w-16 h-16 border border-[#e09f2d]/20 rounded-full flex items-center justify-center animate-spin-slow">
             <div className="w-2 h-2 bg-[#e09f2d] rotate-45" />
          </div>
          <div className="absolute inset-0 w-16 h-16 border border-[#e09f2d]/40 rounded-full animate-ping opacity-20" />
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-[#e09f2d] font-bold">
            ✦ Error 404
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
            NOT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-200 to-gray-500">
              FOUND!
            </span>
          </h1>

          <p className="text-gray-500 max-w-lg mx-auto text-lg md:text-base leading-relaxed pt-4">
            The artisan tile you seek has been moved or exists only in your imagination. 
            Let’s return you to the main gallery.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link
            href="/all-tiles"
            className="group relative px-10 py-4 bg-[#e09f2d] text-black font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(224,159,45,0.3)] active:scale-95"
          >
            Explore Gallery
          </Link>
          
          <Link
            href="/"
            className="group px-10 py-4 border border-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-white/20"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span> Go Home
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFound;