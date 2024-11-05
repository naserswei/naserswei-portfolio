function AnimeCard() {
  return (
    <div className="group relative h-[280px] w-[190px] cursor-pointer overflow-hidden rounded-md bg-[url('https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg')] bg-cover shadow-md transition-all duration-300 hover:scale-95">
      <div className="absolute right-2 top-2 transition-opacity duration-200 group-hover:opacity-0">
        <div className="w-20 rounded-xl bg-black/60 p-2 text-center text-xs font-medium text-white">
          Season 1
        </div>
      </div>

      <div className="absolute left-1/2 top-[40%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white/30 backdrop-blur-md transition-transform duration-300 group-hover:scale-100" />

      <div className="absolute -left-44 top-3 flex w-fit items-center gap-1 rounded-3xl bg-white/30 px-4 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-[11.3rem]">
        <span>4.9</span>
        <span className="text-2xl text-yellow-500">★</span>
      </div>

      <div className="absolute bottom-4 w-full max-h-[45%] text-center  bg-slate-100 p-2 transition-all duration-300 group-hover:translate-y-4 translate-y-[calc(100%-2rem)] ">
        <h2 className="font-serif text-sm dark:text-black content-center font-bold h-10">
          Demon Slayer: Kimetsu no Yaiba
        </h2>
        <p className="py-2 text-xs max-h-20 dark:text-black overflow-y-auto custom-scrollbar">
          Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and
          illustrated by Koyoharu Gotouge.
        </p>
      </div>
    </div>
  );
}

export default AnimeCard;
