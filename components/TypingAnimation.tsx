"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Naser swei",
        1000,
        "",
        1000,
        "Software engineer",
        1000,
        "Full Stack",
        1000,
      ]}
      speed={50}
      className="text-4xl  font-bold"
      repeat={Infinity}
    />
  );
}

export default TypingAnimation;
