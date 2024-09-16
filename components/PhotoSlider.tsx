"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const photos = [
  {
    img: "/images/BG.png",
  },

  { img: "/images/naser.jpg" },
];

export function PhotoSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <div className=" p-1">
              <Card
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 89%, 0 100%)" }}
                className="h-[400px] sm:h-[600px]"
              >
                <CardContent className="flex h-full relative  items-center justify-center">
                  <Image src={photo.img} fill objectFit="cover" alt="image" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" transition-all hover:scale-110 size-10 border-black " />
      <CarouselNext className=" transition-all hover:scale-110 size-10 border-black " />
    </Carousel>
  );
}
