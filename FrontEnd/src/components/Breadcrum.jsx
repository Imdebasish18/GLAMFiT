import arrow_icon from "./assets/breadcrum_arrow.png";

export default function Breadcrum({ product }) {
  return (
    <div className="flex items-center text-[8px] md:text-base m-[2px] md:ml-[11%] my-3 md:my-8">
      Home{" "}
      <img src={arrow_icon} alt="" className="h-1 md:h-3 px-[1px] md:m-1 " />{" "}
      Shop{" "}
      <img src={arrow_icon} alt="" className="h-1 md:h-3 px-[1px] md:m-1 " />
      {product.name}{" "}
      <img src={arrow_icon} alt="" className="h-1 md:h-3 px-[1px] md:m-1 " />{" "}
      {product.category}
    </div>
  );
}
