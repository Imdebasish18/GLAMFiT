import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
import cart_cross_icon from "./assets/cart_cross_icon.png";

export default function CartItems() {
  const { all_product, cartItems, removeToCart, getTotalAmount } =
    useContext(ShopContex);

  return (
    <div className="md:mx-[170px] md:my-[100px] m-4">
      <div className="md:grid hidden md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:gap-16 gap-1 md:px-0 md:py-5 py-3 md:text-lg text-[11px] md:font-semibold font-medium">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="hidden md:block md:h-1 bg-[#e2e2e2] " />
      <div>
        {all_product.map((e, i) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={i}>
                <div className="grid grid-cols-[0.5fr_3fr_0.5fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center md:gap-16 gap-3 md:px-0 md:py-5 py-2 md:text-base text-[9px] md:font-semibold font-medium">
                  <img src={e.image} alt="" className="md:h-[62px] h-[44px]" />
                  <p>{e.name}</p>
                  <p>${e.new_price} </p>
                  <button className="md:w-12 w-8 h-6 md:h-10 border-2 border-[#ebebeb] border-solid font-medium bg-white">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    src={cart_cross_icon}
                    alt=""
                    onClick={() => removeToCart(e.id)}
                    className="md:w-[15px] w-[10px] cursor-pointer md:mx-10 "
                  />
                </div>
                <hr className="md:h-1 bg-[#e2e2e2] " />
              </div>
            );
          } else {
            return null;
          }
        })}

        <div className="flex flex-col md:flex-row md:my[100px] gap-8 md:mt-14 mt-8">
          <div className="flex flex-col md:mr-10 md:gap-10 flex-1">
            <h1 className="text-2xl font-semibold">Cart Total</h1>
            <div>
              <div className="flex justify-between md:py-4 py-3">
                <p>Sub total</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between md:py-4 py-3">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between md:py-4 py-3">
                <p>Total</p>
                <p className="font-semibold">${getTotalAmount()}</p>
              </div>
            </div>
            <button className="md:w-[262px] my-7 md:my-1 w-[170px] h-[44px] text-xs md:h-[58px] bg-[#ff5a5a] text-[#fff] md:font-semibold font-[500]">
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="flex-1 font-medium mb-11 md:mb-0">
            <p className="text-[#555]">If you have a promocode then apply</p>
            <div className="md:w-[400px] w-[250px] md:h-12 h-10 md:mt-4  bg-[#eaeaea] my-6 md:my-0">
              <input
                type="text"
                placeholder="promocode"
                className="bg-transparent md:w-[250px] w-[170px] md:h-12 md:pl-4 pl-2"
              />
              <button className="md:w-[150px] w-[80px] md:h-12 h-10 bg-black text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
