import { useState, useEffect } from "react";
import Item from "./Item";
import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
export default function NewCollection() {
  const [new_collections, setNew_collections] = useState([]);
  const { serverLink } = useContext(ShopContex);

  const fetch_new_collections = async () => {
<<<<<<< HEAD
    await fetch(`${serverLink}/newCollection`)
=======
    await fetch("https://glamfit.onrender.com/newCollection")
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
      .then((res) => res.json())
      .then((data) => setNew_collections(data));
  };
  useEffect(() => {
    fetch_new_collections();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-[#171717] font-semiboldr mt-3 md:mt-10 md:text-5xl text-center">
          NEW COLLECTIONS
        </h1>
        <hr className="w-24 md:w-48 md:border-[2px] mt-1 md:mt-3 border-[#252525] mx-auto rounded-xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 m-4 md:mx-32 md:my-10">
          {new_collections.map((item, i) => {
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
