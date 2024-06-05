import { CircularProgress } from "@mui/joy";
import { CircleArrowDown, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const progress = [
  {
    value: 90,
    name: "HTML",
  },
  {
    value: 95,
    name: "React js",
  },
  {
    value: 95,
    name: "Next js",
  },
  {
    value: 80,
    name: "Express js",
  },
];

function Skills() {
  return (
    <section className="relative flex flex-col gap-6  items-center justify-center sm:items-start sm:justify-start pt-6 sm:px-[92px]  w-full min-h-screen pb-6">
      <div className="flex w-full h-full">
        <div className="flex flex-col justify-center items-center  sm:flex-row-reverse gap-10 h-full w-[100%] ">
          {/* left */}
          <div className=" flex w-[90%] sm:w-[45%] h-[50%] sm:h-full  pt-10 pl-10 relative p-4">
            <div className="absolute right-0 top-0 -z-10">
              <Image
                src="/images/BG-dots.png"
                height={192}
                width={152}
                alt="image"
              />
            </div>
            <div className=" relative h-[400px] sm:h-[600px] w-full">
              <Image
                src="/images/Skills.png"
                fill
                objectFit="cover"
                alt="image"
              />
            </div>
          </div>
          {/* right */}
          <div className=" flex flex-col w-full sm:w-[55%] h-[50%]  sm:text-left items-center sm:items-start  justify-center gap-5 ">
            <h2 className="text-3xl text-[#F44336] font-semibold">Skills</h2>
            <p className=" text-lg max-w-md text-center sm:text-left">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-10 justify-center">
              {progress.map((progress, index) => (
                <div key={index} className="flex items-center flex-col gap-2">
                  <CircularProgress
                    size="lg"
                    determinate
                    value={progress.value}
                  >
                    {progress.value}%
                  </CircularProgress>
                  {progress.name}
                </div>
              ))}
            </div>
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

export default Skills;
