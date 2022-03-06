const FivePhase = () => (
  <div className="w-full h-full py-16 md:py-20 bg-[#F7FAFC]">
    <h2 className="text-[29px] font-[400] leading-[1.2] text-center  text-black mb-8">
      What's the investment?
    </h2>
    <div className="flex lg:flex-row md:flex-row items-center justify-center flex-wrap">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className=" w-full text-center flex flex-col  items-start max-w-xs mx-auto my-10 rounded-xl shadow-2xl"
        >
          <div className="bg-black py-6 w-full text-center">
            <h3 className="text-white mb-0 font-[400] text-[1.375rem] leading-[1.4]">
              {" "}
              Stories Package
            </h3>
          </div>
          <div className="py-12 w-full">
            <h6 className="uppercase text-xs tracking-widest text-black text-[.75rem] font-[400] leading-[1.4] mb-[.7rem]">
              Starting From
            </h6>
            <h3 className="font-[400] leading-[1.4] text-black text-5xl mb-0">
              <span className="text-base">$</span>1800
            </h3>
            <h6 className="uppercase text-xs tracking-widest text-black">
              PER MONTH
            </h6>
          </div>
          <div className="px-4 pb-4 w-full">
            <a
              onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sam-thiele/free-consultation'});return false;"
              className="bg-black rounded text-lg px-8 py-6 block text-white no-underline mx-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FivePhase;
