import { createContext, useState } from "react";
import { useEffect } from "react";

export const ShopContex = createContext(null);

const getDefaultCart = () => {
  let cart = {};
<<<<<<< HEAD
  for (let i = 0; i <= 300; i++) {
=======
  for (let i = 0; i <300; i++) {
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
    cart[i] = 0;
  }
  return cart;
};

const ShopContexProvider = (Props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setAllProduct] = useState([]);
  const serverLink = "http://localhost:8001";
  useEffect(() => {
<<<<<<< HEAD
    fetch(`${serverLink}/allProducts`)
=======
    fetch("https://glamfit.onrender.com/allProducts")
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
      .then((res) => res.json())
      .then((data) => setAllProduct(data));

    if (localStorage.getItem("auth-token")) {
<<<<<<< HEAD
      fetch(`${serverLink}/getCart`, {
=======
      fetch("https://glamfit.onrender.com/getCart", {
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const getCartIconValue = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const getTotalAmount = () => {
    let total = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        total = total + itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };

  const addToCart = (item_id) => {
    setCartItems((prev) => ({ ...prev, [item_id]: prev[item_id] + 1 }));
    if (localStorage.getItem("auth-token")) {
<<<<<<< HEAD
      fetch(`${serverLink}/addToCart`, {
=======
      fetch("https://glamfit.onrender.com/addToCart", {
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id: item_id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const removeToCart = (item_id) => {
    setCartItems((prev) => ({ ...prev, [item_id]: prev[item_id] - 1 }));
    if (localStorage.getItem("auth-token")) {
<<<<<<< HEAD
      fetch(`${serverLink}/removeFromCart`, {
=======
      fetch("https://glamfit.onrender.com/removeFromCart", {
>>>>>>> ebbe83423921e36aa6b3cf776b7e139866128de6
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id: item_id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const contexValue = {
    all_product,
    cartItems,
    addToCart,
    removeToCart,
    getTotalAmount,
    getCartIconValue,
    serverLink,
  };

  return (
    <ShopContex.Provider value={contexValue}>
      {Props.children}
    </ShopContex.Provider>
  );
};

export default ShopContexProvider;
