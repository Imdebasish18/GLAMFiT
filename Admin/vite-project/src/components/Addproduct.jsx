import { useEffect, useState } from "react";
import upload_area from "../assets/upload_area.svg";

export default function Addproduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
  });

  const onChangeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const add_product = async () => {
    let responseData;
    let formData = new FormData();
    formData.append("product", image);

    // Upload image
    try {
      const uploadResponse = await fetch("http://localhost:8001/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      responseData = await uploadResponse.json();

      if (responseData.success) {
        // Update productDetails with the image URL
        const updatedProductDetails = {
          ...productDetails,
          image: responseData.image_url,
        };

        setProductDetails(updatedProductDetails);
        setImage(false);

        // Add product
        const productResponse = await fetch(
          "http://localhost:8001/addProduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProductDetails),
          }
        );

        const productData = await productResponse.json();
        if (productData.success) {
          alert("Product added!");
        } else {
          alert("Failed to add product!");
        }
        setProductDetails({
          name: "",
          image: "",
          category: "women",
          old_price: "",
          new_price: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the product.");
    }
  };

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  return (
    <>
      <div className="mx-auto my-2 md:mx-7 md:my-5 px-4 py-3 md:px-12 md:py-8 w-[96%] md:max-w-[800px] bg-white">
        <div className="w-[100%] ">
          <p className="text-[#7b7b7b] text-sm">Product title</p>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={onChangeHandler}
            placeholder="type here"
            className="w-[100%] border box-border border-[#c3c3c3] rounded-sm pl-2 md:pl-4 my-2 md:my-2 h-9 md:h-10 md:text-sm "
          />
        </div>
        <div className="flex gap-8">
          <div className="w-[50%] ">
            <p className="text-[#7b7b7b] text-sm">Price</p>
            <input
              type="number"
              name="old_price"
              value={productDetails.old_price}
              onChange={onChangeHandler}
              placeholder="price"
              className="w-[100%] border box-border border-[#c3c3c3] rounded-sm pl-2 md:pl-4 my-2 md:my-2 h-9 md:h-10 md:text-sm"
            />
          </div>
          <div className="w-[50%] ">
            <p className="text-[#7b7b7b] text-sm">Offer price</p>
            <input
              type="number"
              name="new_price"
              value={productDetails.new_price}
              onChange={onChangeHandler}
              placeholder="offer price"
              className="w-[100%] border box-border border-[#c3c3c3] rounded-sm pl-2 md:pl-4 my-2 md:my-2 h-9 md:h-10 md:text-sm"
            />
          </div>
        </div>
        <div>
          <p>Product Category</p>
          <select
            name="category"
            id=""
            className="border px-3 py-2 rounded-sm"
            onChange={onChangeHandler}
            value={productDetails.category}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div>
          <label htmlFor="upload">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
              className="md:w-30 md:h-30 object-contain rounded-lg md:my-3"
            />
          </label>
          <input
            type="file"
            name="image"
            id="upload"
            className="hidden"
            onChange={imageHandler}
          />
        </div>
        <button
          onClick={() => {
            add_product();
          }}
          className="w-[70px] md:w-40 h-8 md:h-12 rounded-lg bg-[#6079ff] text-white font-medium cursor-pointer md:mt-5 mt-4 "
        >
          Add
        </button>
      </div>
    </>
  );
}
