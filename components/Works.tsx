import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import { PhotoSlider } from "./PhotoSlider";

function Works() {
  return (
    <section
      id="works"
      className="relative flex flex-col gap-6  items-center justify-center sm:items-start sm:justify-start pt-6 sm:px-[92px]  w-full min-h-screen"
    >
      <div className="flex w-full h-full">
        <div className="flex flex-col justify-center  mx-auto items-center sm:flex-row gap-10 h-full w-[90%] ">
          {/* left */}
          <div className=" flex w-[90%] sm:w-[45%] h-[50%] sm:h-full  pt-10 pl-10 relative p-4">
            <div className="absolute left-0 top-0 -z-10 w-[100px] h-[130]  sm:w-[152px] sm:h-[192px]">
              <Image
                src="/images/BG-dots.png"
                height={192}
                width={152}
                alt="image"
              />
            </div>

            <PhotoSlider />
          </div>
          {/* right */}
          <div className=" flex flex-col w-full sm:w-[55%] h-[50%] sm:pl-14  sm:text-left items-center sm:items-start  justify-center gap-5 ">
            <h2 className="text-3xl text-[#F44336] font-semibold">Works</h2>
            <h2 className="text-xl text-[#F44336] font-semibold">CIU</h2>
            <p className=" text-lg  min-w-44 sm:max-w-md text-center sm:text-left">
              An inquisitive Computer Science Engineering student, skilled in
              leadership, seeking to leverage solid development skills with
              focus on collaboration, communication and passion.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                HTML
              </span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                React js
              </span>
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Tailwaind css
              </span>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Express js
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                prisma
              </span>
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                Badge
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Badge
              </span>
              <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Badge
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-3 z-10 flex gap-2">
        <CircleArrowDown />
        <p>Scroll</p>
      </div>
    </section>
  );
}

export default Works;
