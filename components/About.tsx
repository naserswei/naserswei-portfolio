import { CircleArrowDown } from "lucide-react";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col gap-10 sm:gap-6  items-center justify-center sm:items-start sm:justify-start pt-6 sm:px-[92px]  w-full min-h-[50vh] sm:min-h-screen pb-6"
    >
      <div className="flex w-full h-full">
        <div className="flex flex-col justify-center items-center sm:flex-row gap-10 h-full w-[100%] ">
          {/* left */}
          <div className=" flex w-[90%] sm:w-[45%] h-[50%] sm:h-full  pt-10 pl-10 relative p-4">
            <div className="absolute left-0 top-0 -z-10">
              <Image
                src="/images/BG-dots.png"
                height={192}
                width={152}
                alt="image"
              />
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 89%, 0 100%)" }}
              className=" relative h-[400px] sm:h-[600px] w-full"
            >
              <Image
                src="/images/naser.jpg"
                fill
                objectFit="cover"
                alt="image"
              />
            </div>
          </div>
          {/* right */}
          <div className=" flex flex-col w-full sm:w-[55%] h-[50%] sm:pl-14  sm:text-left items-center sm:items-start  justify-center gap-10 sm:gap-5 ">
            <h2 className="text-3xl text-[#F44336] font-semibold">About Me</h2>
            <p className=" text-lg max-w-md text-center sm:text-left">
              An inquisitive Computer Science Engineering student, skilled in
              leadership, seeking to leverage solid development skills with
              focus on collaboration, communication and passion.
            </p>
            <a
              href="/images/cv.pdf"
              className=" bg-black hover:scale-105 transition-all dark:bg-slate-200 dark:text-slate-800 text-white rounded-md w-36 py-2 px-4"
              download
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>
      <div className=" z-10 flex gap-2">
        <CircleArrowDown />
        <p>Scroll</p>
      </div>
    </section>
  );
}

export default About;
