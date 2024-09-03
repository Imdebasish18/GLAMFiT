import hand_icon from "./assets/hand_icon.png";
import hero from "./assets/Hero.png";

export default function Hero() {
  return (
    <>
      <div className="flex bg-gradient-to-b from-red-100 to-blue-100 w-screen px-2 pt-8 md:px-10 items-center">
        <div className="w-3/6 grid md:mt-10 md:justify-center">
          <div>
            <h1 className="text-sm font-medium text-black text-center md:text-xl mb-4">
              NEW ARRIVALS ONLY
            </h1>
            <p className="text-3xl font-medium text-center md:text-[80px] leading-tight text-[#171717]">
              new
              <img
                src={hand_icon}
                alt="hand-icon"
                className="w-6 h-6 md:w-16 md:h-16 inline-block"
              />
            </p>
            <p className="text-2xl font-medium text-center md:text-[60px] leading-tight text-[#171717]">
              collections
            </p>
            <p className="text-3xl font-medium text-center md:text-[60px] leading-tight text-[#171717]">
              for everyone
            </p>
            <div className="flex justify-center">
              <button className="active:bg-red-500 h-6 w-28 mt-8 md:h-12 md:w-56 text-[9px] text-slate-200 md:text-xl font-medium bg-red-600 rounded-full ">
                Latest Collection &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6 flex justify-center">
          <img
            src={hero}
            alt="model icon"
            className="w-full max-w-[300px] max-h-[525px]"
          />
        </div>
      </div>
    </>
  );
}
