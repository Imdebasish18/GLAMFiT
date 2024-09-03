import { useContext } from "react";
import { ShopContex } from "../contex/ShopContex";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProduct from "../components/RelatedProduct";

export default function Product() {
  const { all_product } = useContext(ShopContex);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <>
      <div className="">
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProduct />
      </div>
    </>
  );
}
