import React from "react";
import Calendly from "./Calendly";

const Banner = () => {
  const [showCalendly, setShowCalendly] = React.useState(false);

  return (
    <div>
      <section className="relative bg-black text-left pb-0  bg-cover bg-center">
        <div className="px-6 sm:px-12 lg:px-16 xl:px-24 xxl:px-40 flex items-center justify-center  overflow-hidden relative min-h-[540px] h-full">
          <div className="overflow-hidden">
            <video
              className="object-cover h-full min-h-[56.25vw] absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%] opacity-70"
              muted
              autoPlay
              loop
            >
              <source src="/bannerVideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="absolute left-0 right-0 top-0 z-[100%] w-full h-full bg-[rgba(0,0,0,.3)] pointer-events-none"></div>
          <div className="max-w-3xl relative  z-20 text-center mx-auto mt-6">
            <h1 className="text-white md:text-5xl mb-8 lg:text-[3.05rem] text-[36px] p-0 m-0 leading-[2.5rem] lg:leading-[3.4rem]">
              A complete content creation solution for your business.
            </h1>
            <p className="text-gray-200 mb-6 font-[400] text-[16px] leading-[1.9rem]">
              Let’s have a chat about the value a Stories content plan can add
              to your business.
            </p>
            <button
              className="bg-black rounded text-lg px-8 py-6 inline-block text-white no-underline"
              onClick={() => setShowCalendly(true)}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row  left-0 right-0 bottom-0 z-40 justify-between">
          <div className="bg-[#1a202c] border-solid border border-[#1a202c] w-full lg:w-1/3 py-4">
            <div className="flex py-1 justify-center">
              <img
                className="h-10 mr-4"
                src="/search.png"
                alt="Noun Research 1"
              />
              <h4 className="mb-0 text-white text-base py-2">
                Identify Your Needs
              </h4>
            </div>
          </div>
          <div className="bg-[#1a202c] border-solid border border-[#1a202c] w-full lg:w-1/3 py-4">
            <div className="flex py-1 justify-center">
              <img
                className="h-10 mr-4"
                src="/strategy.png"
                alt="Noun strategy 1"
              />
              <h4 className="mb-0 text-white text-base py-2">
                Craft a Strategy
              </h4>
            </div>
          </div>
          <div className="bg-[#1a202c] border-solid border border-[#1a202c] w-full lg:w-1/3 py-4">
            <div className="flex py-1 justify-center">
              <img
                className="h-10 mr-4"
                src="/monitor.png"
                alt="Noun Monitor 1"
              />
              <h4 className="mb-0 text-white text-base py-2">
                Develop &amp; Deliver
              </h4>
            </div>
          </div>
        </div>
      </section>
      {showCalendly && <Calendly setShowCalendly={setShowCalendly} />}
    </div>
  );
};

export default Banner;
