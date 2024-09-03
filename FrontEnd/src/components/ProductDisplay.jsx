import star_icon from "./assets/star_icon.png";
import star_dull_icon from "./assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";

export default function ProductDisplay(Props) {
  const { product } = Props;
  const { addToCart, getCartIconValue } = useContext(ShopContex);
  return (
    <div className="md:flex md:my-0 md:mx-36">
      <div className="md:flex md:gap-2 md:w-1/2 md:justify-center">
        <div className="m-2 md:order-2 md:m-0 md:ml-2">
          <img src={product.image} alt="" className="" />
        </div>
        <div className="flex justify-between md:flex-col md:order-1 gap-3 m-2 md:m-0 ">
          <div className=" flex-1">
            <img src={product.image} alt="" className="md:h-[92px]" />
          </div>
          <div className=" flex-1 ">
            <img src={product.image} alt="" className="md:h-[92px]" />
          </div>
          <div className=" flex-1 ">
            <img src={product.image} alt="" className="md:h-[92px]" />
          </div>
          <div className=" flex-1 ">
            <img src={product.image} alt="" className="md:h-[92px]" />
          </div>
        </div>
      </div>
      <div className="m-2 mt-5 md:w-1/2 md:m-0">
        <h1 className="md:text-4xl font-medium text-[#302f2f] ">
          {product.name}{" "}
        </h1>
        <div className="flex gap-2 my-3 place-items-center">
          <img src={star_icon} alt="" className="md:w-[14px] md:h-[14px]" />
          <img src={star_icon} alt="" className="md:w-[14px] md:h-[14px]" />
          <img src={star_icon} alt="" className="md:w-[14px] md:h-[14px]" />
          <img src={star_icon} alt="" className="md:w-[14px] md:h-[14px]" />
          <img
            src={star_dull_icon}
            alt=""
            className="md:w-[14px] md:h-[14px]"
          />
          <p className="md:text-xs">(122)</p>
        </div>
        <div className="flex gap-2 md:gap-5 md:mt-8 ">
          <div className="line-through  text-slate-400 font-semibold">
            ${product.old_price}{" "}
          </div>
          <div className="text-orange-600 font-semibold">
            ${product.new_price}{" "}
          </div>
        </div>
        <div>
          <h1 className="font-medium text-base my-4">Select Size</h1>
          <div className="flex justify-between w-[75%] md:w-[45%]">
            <div className="bg-slate-200 w-9 h-8 flex justify-center items-center cursor-pointer">
              S
            </div>
            <div className="bg-slate-200 w-9 h-8 flex justify-center items-center cursor-pointer">
              M
            </div>
            <div className="bg-slate-200 w-9 h-8 flex justify-center items-center cursor-pointer">
              L
            </div>
            <div className="bg-slate-200 w-9 h-8 flex justify-center items-center cursor-pointer">
              XL
            </div>
            <div className="bg-slate-200 w-9 h-8 flex justify-center items-center cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          className="text-sm text-white px-5 py-3 rounde bg-[#ff4141] my-5 active:bg-[#c74444]"
          onClick={() => {
            addToCart(product.id);
            getCartIconValue();
          }}
        >
          ADD TO CART
        </button>
        <p className="font-semibold text-base md:my-2">Category: </p>
        <p className="font-semibold text-base">Tags: </p>
      </div>
    </div>
  );
}
