import data from "./assets/data";
import Item from "./Item";

export default function RelatedProduct() {
  return (
    <>
      <div>
        <h1 className="text-[#171717] font-semiboldr mt-3 md:mt-10 md:text-5xl text-center">
          Related Products
        </h1>
        <hr className="w-24 md:w-48 md:border-[2px] mt-1 md:mt-3 border-[#252525] mx-auto rounded-xl" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 m-4 md:mx-32 md:my-10">
          {data.map((item, i) => {
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
