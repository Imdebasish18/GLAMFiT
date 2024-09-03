import { Link } from "react-router-dom";
import add_product_icon from "../assets/Product_Cart.svg";
import list_product_icon from "../assets/Product_list_icon.svg";
export default function Sidebar() {
  return (
    <>
      <div className="flex justify-center md:justify-start items-center md:flex-col w-[100%] md:max-w-[250px] py-7 md:pt-8 gap-[10px] md:gap-5  bg-white h-16 md:h-[100vh] ">
        <Link to={"/addProduct"}>
          <div className="flex items-center justify-center gap-2 md:gap-5 m-0  md:mx-5 p-2 md:px-5 md:py-4 bg-[#f3efef] rounded-lg cursor-pointer ">
            <img
              src={add_product_icon}
              alt=""
              className="w-6 h-auto sm:w-9 sm:h-9 md:w-9 md:h-auto"
            />
            <p className="text-sm md:text-base">Add Product</p>
          </div>
        </Link>
        <Link to={"/itemList"}>
          <div className="flex items-center justify-center gap-2 md:gap-5 m-0  md:mx-5 p-2 md:px-5 md:py-4 bg-[#f3efef] rounded-lg cursor-pointer">
            <img
              src={list_product_icon}
              alt=""
              className="w-6 h-auto sm:w-9 sm:h-9 md:w-9 md:h-auto"
            />
            <p className="text-sm md:text-base">Product List</p>
          </div>
        </Link>
      </div>
    </>
  );
}
