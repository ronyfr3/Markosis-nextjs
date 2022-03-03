import React from "react";

const TwoPhase = () => {
  return (
    <div className="pt-16 md:pt-20 md:pb-40 sm:px-12 lg:px-16 xl:px-24 xxl:px-40 mx-auto drop-shadow-2xl">
      <div className="flex-col lg:flex-row flex-wrap flex w-full relative justify-between">
        <div
          className="appear_left w-full text-center md:pr-24 mb-12 lg:mb-0 flex items-start px-6"
          data-sr-id="25"
        >
          <div className="flex flex-col md:flex-row sm:px-0 max-w-4xl mx-auto bg-white shadow ">
            <video
              className="w-full md:w-3/5 md:mb-0 mb-8"
              src="https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/Stories-Video-Export.mp4"
              controls
            ></video>
            <div className="w-full md:w-2/5 px-8 text-left flex flex-col justify-center">
              <h3 className="mb-8 text-[1.375rem] text-[#76858b] leading-[1.4] font-[400]">
                Let Sam explain what value Stories can add to your business
              </h3>
              <a
                className="bg-black rounded text-lg px-8 py-6 inline-block text-white no-underline text-center mb-8 md:mb-0"
                onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sam-thiele/free-consultation'});return false;"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPhase;
