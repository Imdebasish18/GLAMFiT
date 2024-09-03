export default function NewsLetter() {
  return (
    <>
      <div className="w-[93%] md:w-[80%] flex flex-col place-items-center text-center  mx-auto py-7 px-[10px] bg-gradient-to-r from-[#fde1ff] to-[#e1ffea] gap-2 md:mt-20 md:py-12">
        <h1 className="text-[#454545] font-semibold text-base md:text-3xl ">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-[#454545] mb-1 text-[9px] md:text-xs md:mb-3">
          Subscribe to our newsletter and stay updated
        </p>
        <div className="flex items-center justify-between rounded-2xl bg-white border border-[#e3e3e3] md:rounded-full">
          <input
            type="email"
            placeholder="Your Email id"
            className="w-[135px] ml-3 outline-none text-[#616161] text-[10px] md:w-[240px] md:ml-5 md:text-base "
          />
          <button className=" rounded-2xl bg-black text-white px-2 py-1 text-[10px] md:px-4 md:py-2 md:text-base md:rounded-full ">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
