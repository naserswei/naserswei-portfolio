import { callouts } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import AnimeCard from "@/components/AnimeCard";

function Projects() {
  return (
    <div className=" relative">
      <div className=" w-full flex  items-center sm:px-0 px-4 py-4 sticky top-0 z-50  dark:bg-black/30 backdrop-blur-xl bg-white/40">
        <Navbar />
      </div>
      <div className="bg-gray-100 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 dark:bg-slate-900 bg-gray-100">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold dark:text-white text-gray-900">
              Projects
            </h2>
            <div className="mt-6 gap-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
              {callouts.map((callout, index) => (
                <Card key={index} callout={callout} />
              ))}
              <div className="flex justify-center items-center border-2 p-2 relative ">
                <div className=" rounded-2xl top-1 py-2 px-2 absolute z-30  left-0 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text w-36 text-lg dark:from-pink-500 dark:to-yellow-500 font-bold">
                  CSS Skill
                </div>
                <AnimeCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
