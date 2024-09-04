import { useEffect, useState } from "react";
import cross_icon from "../assets/cross_icon.png";
// import { AdminContex } from "../contex/AdminContex";
export default function Listproduct() {
  const [allproducts, setAllProducts] = useState([]);
  const serverLink = "https://glamfit.onrender.com";
  // const serverLink = "http://localhost:8001";

  const fetchInfo = async () => {
    await fetch(`${serverLink}/allProducts`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    console.log(id);
    await fetch(`${serverLink}/removeProduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <>
      <div className="mx-auto my-2 md:mx-7 md:my-5 px-4 py-3 md:px-12 md:py-8 bg-white">
        <h1>All Products List</h1>
        <div className="md:grid hidden md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:gap-16 gap-1 md:px-0 md:py-5 py-3 md:text-lg text-[11px] md:font-semibold font-medium">
          <p>Product</p>
          <p>Tittle</p>
          <p>Old price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <hr className="hidden md:block md:h-1 bg-[#e2e2e2] " />
        <div>
          {allproducts.map((product, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-[0.5fr_3fr_0.5fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center md:gap-16 gap-3 md:px-0 md:py-5 py-2 md:text-base text-[9px] md:font-semibold font-medium">
                  <img src={product.image} alt="" />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    src={cross_icon}
                    alt=""
                    className="md:w-[15px] w-[10px] cursor-pointer md:mx-10 "
                    onClick={() => removeProduct(product.id)}
                  />
                </div>
                <hr className="md:h-1 bg-[#e2e2e2] " />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
