import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profile from "@/public/images/profile.jpg";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <header className=" flex justify-between items-center w-full">
      <div className="flex px-4 gap-2 items-center relative group">
        <Avatar className=" z-30">
          <AvatarImage
            src={
              profile ? "./images/profile.jpg" : "https://github.com/shadcn.png"
            }
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className=" duration-300 opacity-0 group-hover:opacity-100 z-20 group-hover:translate-x-16 transition-all absolute -left-1 top-2  text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text w-36 dark:from-pink-500 dark:to-yellow-500 md:hidden lg:block">
          Naser Swei
        </p>
      </div>

      <nav className="max-w-lg mx-auto relative hidden sm:flex sm:items-centers sm:justify-center gap-14 font-bold h-full dark:text-white sm:text-lg text-black">
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link className=" text-[#F44336]" href="/">
            Home
          </Link>
        </li>
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link href="#">projects</Link>
        </li>
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link href="/#about">About</Link>
        </li>
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link href="/#skill">Skill</Link>
        </li>
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link href="/#works">Works</Link>
        </li>
        <li className="flex items-center relative group">
          <div className="link-hover"></div>
          <Link href="/#contact">Contact</Link>
        </li>
        <ModeToggle />
      </nav>
      <div className="flex h-9 w-9 sm:hidden">
        <MobileMenu className="dark:stroke-white stroke-black" />
      </div>
    </header>
  );
}

export default Navbar;
