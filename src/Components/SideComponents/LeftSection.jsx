const LeftSection = () => {
  return (
    <div className="w-1/4 h-[75vh] bg-slate-50 border-r-[1px] shadow-sm border-r-slate-200 flex justify-center items-center flex-col gap-10 overflow-y-scroll py-10 pt-40 fixed left-0">
      <div className="top flex justify-center items-start flex-col mt-16">
        <h1 className="font-semibold text-lg uppercase text-slate-500 ">
          browse
        </h1>
        <ul className="flex justify-center items-start flex-col mt-3 gap-3 font-semibold text-slate-700">
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            New Releases
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            Top Charts
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            Top Playlists
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            Podcasts
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            Top Artists
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold">
            Radio
          </li>
        </ul>
      </div>
      <div className="center flex justify-center items-start flex-col">
        <h1 className="font-semibold text-lg uppercase text-slate-500 ">
          My Library
        </h1>
        <ul className="flex justify-center items-start flex-col mt-3 gap-3 font-semibold text-slate-700">
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold flex justify-center items-center gap-3">
            <i className="fa-solid fa-clock-rotate-left"></i>History
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold flex justify-center items-center gap-3">
          <i className="fa-solid fa-music"></i>Liked Songs
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold flex justify-center items-center gap-3">
          <i className="fa-solid fa-compact-disc"></i>Albums
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold flex justify-center items-center gap-3">
          <i className="fa-solid fa-podcast"></i>Podcasts
          </li>
          <li className="transition-all hover:text-slate-950 cursor-pointer hover:font-bold flex justify-center items-center gap-3">
          <i className="fa-solid fa-microphone"></i>Artists
          </li>
        </ul>
      </div>
      <div className="bottom">
        <button className="flex justify-center items-center gap-5 text-md font-semibold text-green-400 px-4 py-2 rounded-full border-green-400 border-[2px] transition-all hover:text-green-500 hover:border-green-500">
            <i className="fa-solid fa-plus"></i>
            New Playlist
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
