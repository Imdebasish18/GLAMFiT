export default function DescriptionBox() {
  return (
    <div className="md:mx-[170px] md:my-[50px]">
      <div className="flex">
        <div className="flex items-center justify-center font-semibold text-base w-[110px] h-[40px] md:w-[171px] md:h-[70px] border border-[#d0d0d0]">
          Description
        </div>
        <div className="flex items-center justify-center font-semibold text-base w-[110px] h-[40px] md:w-[171px] md:h-[70px] border border-[#d0d0d0] bg-[#f5eeee] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col md:gap-6 border border-[#d0d0d0] p-3 md:p-12 mb-2 md:mb-10 mx-2 md:m-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non ad
          sunt hic tempora error amet animi omnis autem saepe dolore,
          voluptatem, neque quis perferendis vitae eaque? Ullam, laboriosam
          tempora? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Similique odio aut eveniet id quod nesciunt magnam. Facere, vel
          deserunt delectus in blanditiis earum illo veniam nisi reprehenderit
          impedit quod debitis.
        </p>
      </div>
    </div>
  );
}
