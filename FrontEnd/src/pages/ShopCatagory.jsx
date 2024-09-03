import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
import dropDown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item";

export default function ShopCatagory({ banner, category }) {
  const { all_product } = useContext(ShopContex);
  return (
    <>
      <div>
        <img
          src={banner}
          alt=""
          className="block w-[95%] md:w-[81%] mx-auto my-3 md:my-6"
        />
        <div className="flex items-center justify-between mx-2 text-[9px] md:mx-32 md:text-sm">
          <p>
            <span className="font-semibold">Showing 1-12 </span> out of 36
            Products
          </p>
          <div className="px-2 md:px-3 md:py-1 py-0 rounded-3xl border border-[#888] ">
            Sort by
            <img
              src={dropDown_icon}
              alt=""
              className="inline-block h-auto w-2 md:w-3"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-6 md:gap-x-6 md:gap-y-12 m-2 md:mx-32 md:my-10">
          {all_product.map((item, i) => {
            if (category == item.category) {
              return (
                <Item
                  key={i}
                  image={item.image}
                  name={item.name}
                  oldPrice={item.old_price}
                  newPrice={item.new_price}
                  id={item.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex items-center justify-center text-sm h-8 w-28 md:w-40 md mx-auto my-7 md:my-[60px] py-1  md:py-6 rounded-3xl bg-[#ededed] text-[#787878] font-normal ">
          Explore More
        </div>
      </div>
    </>
  );
}
