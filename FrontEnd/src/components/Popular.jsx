import { useState } from "react";
import Item from "./Item";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
export default function Popular() {
  const [popularInWomen, setPopularInWomen] = useState([]);
  const { serverLink } = useContext(ShopContex);
  useEffect(() => {
    fetch(`${serverLink}/popularInWomen`)
      .then((res) => res.json())
      .then((data) => setPopularInWomen(data));
  }, [serverLink]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-[#171717] font-semiboldr mt-3 md:mt-10 md:text-5xl">
          Popular in Women
        </h1>
        <hr className="w-24 md:w-48 md:border-[2px] mt-1 md:mt-3 border-[#252525] mx-auto rounded-xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 m-4 md:mx-32 md:my-10">
          {popularInWomen.map((item, i) => {
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
          })}
        </div>
      </div>
    </>
  );
}
