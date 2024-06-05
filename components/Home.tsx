"use client";
import {
  CircleArrowDown,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/joy";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    // Show a fallback to avoid mismatches
    return (
      <div className="h-screen flex items-center justify-center">
        <CircularProgress size="lg" />
      </div>
    );
  }
  return (
    <section className=" relative pt-6 sm:px-[92px] px-6 flex flex-col gap-4 h-screen  ">
      <Image
        className="object-cover"
        src={theme === "light" ? "/images/Union.png" : "/images/darkmode.png"}
        fill
        priority
        alt="background image"
      />

      {/* nav */}
      <div className="z-10 flex h-[6.7vh]">
        <nav className="max-w-lg relative hidden sm:flex sm:items-center gap-14 font-bold h-full dark:text-black text-white">
          <div className=" absolute -left-5 -top-2 -z-10">
            <div className=" relative">
              <Image
                src="/images/nav.png"
                height={100}
                width={100}
                alt="image"
              />
            </div>
          </div>
          <li>
            <Link className=" text-[#F44336]" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Skill</Link>
          </li>
          <li>
            <Link href="#">Works</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <ModeToggle />
        </nav>
        <div className="flex h-9 w-9 sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className=" z-10 flex flex-col justify-center gap-3 h-[80%] dark:text-black text-white">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Naser swei",
            1000,
            "",
            1000,
            "Software engeener",
            1000,
            "Full Stack",
            1000,
          ]}
          speed={50}
          className="text-4xl  font-bold"
          repeat={Infinity}
        />
        <p className=" text-2xl">Engineer + junior front-end Developor</p>
        <div className="flex gap-3">
          <Github
            className=" bg-gray-500 p-2 flex justify-center items-center rounded-full w-9 h-9"
            fill="black"
            strokeWidth={0}
          />

          <Twitter
            className=" bg-gray-500 p-2 flex justify-center items-center rounded-full w-9 h-9"
            fill="black"
            strokeWidth={0}
          />

          <Linkedin
            className=" bg-gray-500 p-2 flex justify-center items-center rounded-full w-9 h-9"
            fill="black"
            strokeWidth={0}
          />

          <Instagram
            className=" bg-gray-500 p-2 flex justify-center items-center rounded-full w-9 h-9"
            color="black"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className=" text-white z-10 flex gap-2">
        <CircleArrowDown />
        <p>Scroll</p>
      </div>
    </section>
  );
};

export default Home;
