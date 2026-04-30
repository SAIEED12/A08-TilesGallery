"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm bg-background/80">
      <div className="navbar max-w-7xl mx-auto px-4">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow-lg rounded-box z-50 bg-[#0f0f0f] border border-white/10 text-white">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/all-tiles">ALL TILES</Link></li>
              <li><Link href="/my-profile">MY PROFILE</Link></li>
              <li className="mt-2">
                <Link href="/signup" className="bg-[#e09f2d] text-black font-semibold rounded-sm text-center hover:bg-[#d18706]">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 ml-1">
            <Image
              src={logo}
              alt="logo"
              priority
              width={80}
              height={80}
              className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
            />
            <span className="text-base font-semibold sm:text-xl whitespace-nowrap">
              Tiles <span className="text-[#e09f2d]">Gallery</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-md font-medium tracking-wider">
            <li><Navlink href="/">HOME</Navlink></li>
            <li><Navlink href="/all-tiles">ALL TILES</Navlink></li>
            <li><Navlink href="/my-profile">MY PROFILE</Navlink></li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            href="/signup"
            className="btn btn-md border-none rounded-md bg-[#e09f2d] text-black font-semibold hover:bg-[#d18706] transition-colors tracking-wide"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;