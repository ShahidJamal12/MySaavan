const NavBar = () => {
  return (
    <nav className="fixed bg-slate-50 z-10 h-16 w-screen border-b border-b-slate-300 shadow-sm flex justify-between items-center px-5">
      <div className="flex justify-center items-center gap-5 text-[16px] font-semibold text-slate-700">
        <div className="flex justify-center items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/JioSaavn_Logo.svg/1280px-JioSaavn_Logo.svg.png"
            className="w-32"
          />
        </div>
        <ul className="flex justify-center items-center">
          <li className="transition-all hover:text-slate-500 cursor-pointer h-full p-3 hover:border-b-2 hover:border-b-slate-500 rounded-sm">
            Music
          </li>
          <li className="transition-all hover:text-slate-500 cursor-pointer h-full p-3 hover:border-b-2 hover:border-b-slate-500 rounded-sm">
            Podcast
          </li>
          <li className="transition-all hover:text-slate-500 cursor-pointer h-full p-3 hover:border-b-2 hover:border-b-slate-500 rounded-sm">
            Pro
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <label htmlFor="search">
        <div className="flex justify-center items-center bg-white border-[1px] border-gray-200 shadow-sm h-10 rounded-full px-5 gap-5">
          <i className="fa-solid fa-magnifying-glass text-gray-700 transition-all hover:text-gray-600 cursor-pointer"></i>
          <input type="text" className="outline-none border-none bg-transparent text-black px-1 w-80" placeholder="Search" id="search"/>
        </div>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
