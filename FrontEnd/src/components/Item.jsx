import { Link } from "react-router-dom";

export default function Item({ image, name, oldPrice, newPrice, id }) {
  return (
    <div className="text-center rounded-xl hover:scale-105 hover:ease-in hover:duration-75">
      <Link to={`/product/${id}`} onClick={window.scrollTo(0, 0)}>
        {" "}
        <img src={image} alt="product-image" className="mb-2" />{" "}
      </Link>
      <p className="text-xs mb-2">{name}</p>
      <div className="flex justify-center gap-4">
        <div className="line-through text-[#8c8c8c]">${oldPrice}</div>
        <div className="text-[#374171]">${newPrice}</div>
      </div>
    </div>
  );
}
