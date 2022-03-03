import React from "react";

const FourPhase = () => {
  return (
    <div className="pt-16 md:py-20 sm:px-12 lg:px-16 xl:px-24 xxl:px-40 mx-auto ">
      <div className=" w-full relative justify-between text-center ">
        <h2 className="text-[29px] text-black mb-8 px-4">
          Approaching your content creation.
        </h2>
        <div className="appear_left w-full text-center flex flex-col sm:flex-row  items-start max-w-4xl mx-auto my-6 sm:my-20">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-black">
            <img
              className="h-10 mb-8 mx-auto"
              src="/assets/search.png"
              alt="Noun Research 3983996"
            />
            <h3 className="font-[400] text-[1.375rem] leading-[1.4] mt-0 mb-1">
              1. Identify Your Needs
            </h3>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-black">
            <img
              className="h-10 mb-8 mx-auto"
              src="/assets/strategy.png"
              alt="Noun strategy 92710"
            />
            <h3 className="font-[400] text-[1.375rem] leading-[1.4] mt-0 mb-1">
              2. Craft a Strategy
            </h3>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-black">
            <img
              className="h-10 mb-8 mx-auto"
              src="/assets/monitor.png"
              alt="Noun Monitor 2098054"
            />
            <h3 className="font-[400] text-[1.375rem] leading-[1.4] mt-0 mb-1">
              3. Develop &amp; Deliver
            </h3>
          </div>
        </div>
        <a
          className="bg-black rounded text-lg px-8 py-6 inline-block text-white no-underline mx-auto mb-8 sm:mb-0"
          onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sam-thiele/free-consultation'});return false;"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default FourPhase;
