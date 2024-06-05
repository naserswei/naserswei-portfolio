import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#000C24] text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10 gap-8">
        <h1 className=" font-semibold">Naser swei</h1>
        <div className="flex gap-3">
          <div className="bg-gray-500 flex justify-center items-center rounded-full w-9 h-9">
            <Github fill="black" strokeWidth={0} />
          </div>
          <div className="bg-gray-500 flex justify-center items-center rounded-full w-9 h-9">
            <Twitter fill="black" strokeWidth={0} />
          </div>
          <div className="bg-gray-500 flex justify-center items-center rounded-full w-9 h-9">
            <Linkedin fill="black" strokeWidth={0} />
          </div>
          <div className="bg-gray-500 flex justify-center items-center rounded-full w-9 h-9">
            <Instagram color="black" strokeWidth={1} />
          </div>
        </div>
        <p>All Rights Reserved &copy; 2024 Naser swei</p>
      </div>
    </footer>
  );
}

export default Footer;
