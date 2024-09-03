import logo from "../assets/logo.png";
import navProfile from "../assets/nav-profile.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-10 lg:py-4 shadow-lg items-center">
        <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
          <img src={logo} alt="" className="h-11 sm:h-14 md:h-20" />
          <div className="flex flex-col gap-0 ">
            <h1 className="text-lg md:text-xl lg:text-4xl font-semibold">
              GLAMFiT
            </h1>
            <div className="text-red-600 font-medium text-[9px] sm:text-[10px] md:text-xs lg:text-sm">
              Admin Pannel
            </div>
          </div>
        </div>
        <img src={navProfile} alt="" className="h-8 md:h-12 lg:h-16" />
      </div>
    </>
  );
}
