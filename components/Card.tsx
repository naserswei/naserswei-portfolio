import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type CalloutProps = {
  callout: {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    diffculltiy: string;
  };
};

function Card({ callout }: CalloutProps) {
  return (
    <div>
      <div
        key={callout.name}
        className="group mt-10 sm:mt-0 relative overflow-hidden  "
      >
        <div className=" rounded-2xl top-1 py-2 px-4 backdrop-blur-xl bg-white/30 absolute z-30 transition-all -left-24 group-hover:translate-x-[6.5rem] text-black font-semibold">
          <p
            className={cn(
              callout.diffculltiy == "hard" && "text-rose-600 capitalize",
              callout.diffculltiy == "easy" && "text-green-600 capitalize",
              callout.diffculltiy == "mid" && "text-yellow-400 capitalize"
            )}
          >
            {callout?.diffculltiy}
          </p>
        </div>

        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
          <Image
            src={callout.imageSrc}
            alt={callout.imageAlt}
            width={389}
            height={320}
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-110"
            priority // Preload the image for better quality
            quality={100} // Adjust image quality
          />
        </div>

        <h3 className="mt-6  text-sm dark:text-gray-300 text-gray-500">
          <a href={callout.href}>
            <span className="absolute inset-0" />
            {callout.name}
          </a>
        </h3>
        <p className="text-base  font-semibold dark:text-white text-gray-900">
          {callout.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
