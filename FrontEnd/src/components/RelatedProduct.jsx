// import data from "./assets/data";
import { useContext } from "react";
import Item from "./Item";
import { useEffect, useState } from "react";
import { ShopContex } from "../contex/ShopContex";

export default function RelatedProduct(Props) {
  //---------------------------
  const { category, id } = Props;
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { serverLink } = useContext(ShopContex);

  const fetch_relatedProduct = async (id, category) => {
    await fetch(`${serverLink}/relatedProduct`, {
      method: "POST", // or "PUT", "DELETE", depending on the action you want to perform
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, category: category }), // Sending data to the backend
    })
      .then((res) => res.json())
      .then((data) => setRelatedProduct(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch_relatedProduct(id, category);
  }, [id, category]);

  //--------------------------------------
  return (
    <>
      <div>
        <h1 className="text-[#171717] font-semiboldr mt-3 md:mt-10 md:text-5xl text-center">
          Related Products
        </h1>
        <hr className="w-24 md:w-48 md:border-[2px] mt-1 md:mt-3 border-[#252525] mx-auto rounded-xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 m-4 md:mx-32 md:my-10">
          {relatedProduct.map((item, i) => {
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
