import exclusive_image from "./assets/exclusive_image.png";
export default function Offers() {
  return (
    <>
      <div className="flex w-[90%] md:w-[81%] md:h-[400px] m-auto bg-gradient-to-r from-[#fde1ff] to-[#e1ffea] px-6 py-3 items-center ">
        <div className="flex flex-col items-center text-center text-sm text-[#171717] font-semibold md:w-[57%] ">
          <h1 className=" text-2xl md:text-[70px] mb-2 md:leading-loose">
            Exclusive
          </h1>
          <h1 className="text-sm md:text-2xl">Offers For You</h1>
          <p className="md:text-lg">ONLY ON BEST SELLER PRODUCT</p>
          <button className=" bg-red-400 text-white rounded-xl text-xs py-1 px-2 mt-4 md:mt-10 font-normal md:rounded-full md:py-4 md:px-5 md:text-[22px]">
            Check Now
          </button>
        </div>
        <div>
          <img
            src={exclusive_image}
            alt=""
            className="md:w-[295px] md:h-auto "
          />
        </div>
      </div>
    </>
  );
}
