import { useContext } from "react";
import { landingSongs } from "../../App";

const RightSection = () => {
    let frontSongs = useContext(landingSongs)
    setTimeout(() => {
        console.log(frontSongs.songs)
    }, 2000);
  return (
    <div className="w-3/4 h-[75vh] bg-slate-50 fixed right-0 p-10 overflow-scroll">
      <div className="text-4xl font-semibold text">Hi There</div>
      <div className="mt-2 text-xl font-semibold text-slate-400">
        Your Songs
      </div>

      <div className="songs mt-5 flex justify-start items-center gap-5 flex-wrap ">
        <div className="song-cart w-32 h-48 flex justify-center items-center flex-col gap-2">
          <img
            src="https://c.saavncdn.com/401/Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg"
            className="w-full rounded-md"
          />
          <div className="flex justify-center items-center flex-col w-full">
            <h1 className="text-lg font-semibold text-center w-full whitespace-nowrap text-ellipsis overflow-hidden">Jo tum mere ho</h1>
            <div className="artists w-full text-center whitespace-nowrap text-ellipsis overflow-hidden text-slate-600">
              Amit Trivedi, Amitabh Bhattacharya
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
