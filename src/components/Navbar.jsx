"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navlink from "./Navlink";
const Navbar = () => {
  return (
    <div className="border-b bg-background/80">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              loading="eager"
              width={100}
              height={100}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-[#f59e0b]">Tiles Gallery</h1>
          </Link>
        </div>

        <ul className="flex items-center gap-10 text-lg">
          <li>
            <Navlink href={"/"}>HOME</Navlink>
          </li>
          <li>
            <Navlink href={"/all-tiles"}>ALL TILES</Navlink>
          </li>
          <li>
            <Navlink href={"/my-profile"}>MY PROFILE</Navlink>
          </li>
        </ul>

        <div className="flex">
          <ul className="flex gap-8 items-center text-xl">
            <li>
              <Link href={"/signup"} className="hover:text-[#f59e0b]">
                SignUp
              </Link>
            </li>
            <li>
              <Link href={"/signin"} className="hover:text-[#f59e0b]">
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
