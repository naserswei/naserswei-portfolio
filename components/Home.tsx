import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import MobileMenu from "./MobileMenu";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Links from "./links";

const TypingAnimation = dynamic(() => import("./TypingAnimation"), {
  ssr: false,
  loading: () => (
    <Skeleton className="duration-700 bg-slate-700 dark:bg-slate-300 w-[300px] h-[40px] rounded" />
  ),
});

const Home = () => {
  return (
    <section className=" relative pt-6 bg-[url('/images/Union.png')] dark:bg-[url('/images/darkmode.png')] sm:px-[92px] px-6 flex flex-col gap-4 h-screen bg-cover bg-center  ">
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
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#skill">Skill</Link>
          </li>
          <li>
            <Link href="/#works">Works</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <ModeToggle />
        </nav>
        <div className="flex h-9 w-9 sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className=" z-10 flex flex-col justify-center gap-3 h-[80%] dark:text-black text-white">
        <TypingAnimation />
        <p className=" text-2xl">Engineer + junior front-end Developor</p>
        <Links
          className=" dark:hover:bg-slate-800 drak:bg-slate-600"
          fill="dark:fill-white"
        />
      </div>
      <div className=" text-white z-10 flex gap-2">
        <CircleArrowDown />
        <p>Scroll</p>
      </div>
    </section>
  );
};

export default Home;
