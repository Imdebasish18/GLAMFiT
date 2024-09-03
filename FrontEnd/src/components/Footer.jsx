import footer_logo from "./assets/logo.png";
import instagram_icon from "./assets/instagram_icon.png";
import pintester_icon from "./assets/pintester_icon.png";
import whatsapp_icon from "./assets/whatsapp_icon.png";
export default function Footer() {
  return (
    <div className="mx-2 mt-8 md:mt-16 flex flex-col place-items-center">
      <div className="flex place-items-center gap-1">
        <img src={footer_logo} alt="logo" className="w-16 h-auto " />
        <p className="font-semibold text-2xl md:text-3xl">GLAMFiT</p>
      </div>
      <ul className="flex flex-col my-3 place-items-center text-base md:text-sm tracking-wider md:flex-row md:justify-around md:items-center md:gap-4">
        <li className="p-1 ">Company</li>
        <li className="p-1">Products</li>
        <li className="p-1">Offices</li>
        <li className="p-1">About</li>
        <li className="p-1">Contact</li>
      </ul>

      <div className="flex w-[35%] md:w-[15%] items-center justify-around mt-3">
        <div>
          <img src={instagram_icon} alt="" className="md:w-6 w-4" />
        </div>
        <div>
          <img src={pintester_icon} alt="" className="md:w-6 w-4" />
        </div>
        <div>
          <img src={whatsapp_icon} alt="" className="md:w-6 w-4" />
        </div>
      </div>
      <hr className="w-[80%] mt-4 md:mt-6 mx-auto border-[1px] md:border-[2px] " />
      <div className="h-[80px] text-center text-sm">
        <p className="p-5 text-[#1a1a1a] ">
          Copyright @ 2024 - All Rights reserved
        </p>
      </div>
    </div>
  );
}
