import logo_big from "./assets/logo_big.png";
import card_icon from "./assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SlideMenu from "./SlideMenu";
import { ShopContex } from "../contex/ShopContex";

export default function Navbar() {
  const { getCartIconValue } = useContext(ShopContex);
  const [menu, setMenu] = useState("shops");
  const handleSetMenu = (value) => {
    setMenu(value);
  };

  return (
    <>
      <div className="flex justify-between shadow pl-2 pr-2 pt-2 pb-2 md:p-4 md:justify-around">
        <div className="flex items-center gap-x-1">
          <SlideMenu menu={menu} handleSetMenu={handleSetMenu} />
          {/* <button className="md:hidden mr-1 text-lg">☰</button> */}
          <img src={logo_big} alt="logo" className="w-12 md:w-[67px] h-auto" />
          <p className="font-semibold text-[#171717] text-lg md:text-[35px] ">
            GLAMFiT
          </p>
        </div>
        <ul className="hidden items-center gap-x-12 text-xl text-[#626262] font-poppins  md:flex">
          <li onClick={() => handleSetMenu("shops")} className="cursor-pointer">
            <Link to="/"> Shop</Link>
            {menu == "shops" && (
              <hr className="border-[#ff4141] border-[1.5px] mt-1" />
            )}
          </li>
          <li onClick={() => handleSetMenu("mens")} className="cursor-pointer">
            <Link to="/mens">Men</Link>
            {menu == "mens" && (
              <hr className="border-[#ff4141] border-[1.5px] mt-1" />
            )}
          </li>
          <li
            onClick={() => handleSetMenu("womens")}
            className="cursor-pointer"
          >
            <Link to="/womens"> Women</Link>
            {menu == "womens" && (
              <hr className="border-[#ff4141] border-[1.5px] mt-1" />
            )}
          </li>
          <li onClick={() => handleSetMenu("kids")} className="cursor-pointer">
            <Link to="/kids">Kids</Link>
            {menu == "kids" && (
              <hr className="border-[#ff4141] border-[1.5px] mt-1" />
            )}
          </li>
        </ul>
        <div className="flex items-center gap-x-1 md:gap-x-4">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="h-6 w-16 md:h-12 md:w-28 border border-solid border-[#7a7a7a] text-sm md:text-xl font-medium bg-white rounded-full active:bg-[#f3f3f3]"
            >
              Log out
            </button>
          ) : (
            <button className="h-6 w-16 md:h-12 md:w-28 border border-solid border-[#7a7a7a] text-sm md:text-xl font-medium bg-white rounded-full active:bg-[#f3f3f3]">
              <Link to="/login">Login</Link>
            </button>
          )}
          <Link to="/card">
            <img
              src={card_icon}
              alt="card-icon"
              className="w-7 h-auto md:w-11"
            />
          </Link>
          <div className="md:w-5 md:h-5 w-4 h-4 flex justify-center items-center mt-[-27px] ml-[-16px] md:ml-[-24px] rounded-[11px] text-sm text-white bg-red-600">
            {getCartIconValue()}
          </div>
        </div>
      </div>
    </>
  );
}
