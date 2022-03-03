import React from "react";

const OnePhase = () => {
  return (
    <div className="pt-16 md:py-20 sm:px-12 lg:px-16 xl:px-24 xxl:px-40 mx-auto ">
      <div className="flex-col lg:flex-row flex-wrap flex w-full relative justify-between">
        <div className="appear_left w-full text-center  mb-12 lg:mb-0 flex items-start ">
          <div className="px-6 sm:px-0 max-w-xl mx-auto">
            <h3 className="font-[600px] text-[1.375rem] leading-[1.4] mb-[1rem] text-[#76858b]">
              For many businesses, content creation <p>is an afterthought.</p>
            </h3>
            <p className="text-[calc(15.3913px + .14493vw)] font-[400] leading-[1.8] text-[#718096] mb-[0.7rem]">
              Who can blame you? Keeping up with delivering your service or
              products is big work, and thinking ahead can be impossible. We
              developed{" "}
              <strong className="font-[700] text-[#222427]">Stories</strong> to
              solve this need.
            </p>
            <ul className="grid px-4 sm:px-20 md:px-0 grid-cols-1 md:grid-cols-2 my-12 gap-4 md:gap-8">
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3]  pe-1a"
                data-pe-1b="✔"
                data-pe-1a="  Deliver content to the right audience."
              ></li>
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3]  pe-2a"
                data-pe-2b="✔"
                data-pe-2a="  Deliver content to the right audience."
              ></li>
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3]  pe-3a"
                data-pe-3b="✔"
                data-pe-3a="  Deliver content to the right audience."
              ></li>
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3] pe-4a"
                data-pe-4b="✔"
                data-pe-4a=" Month by month, with no lock-in contract."
              ></li>
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3] pe-5a"
                data-pe-5b="✔"
                data-pe-5a="Access to all of our services, as you require."
              ></li>
              <li
                className="text-[1.125rem] text-[#718096] relative pl-10 mb-0 md:mb-4 text-left leading-[1.3] pe-6a"
                data-pe-6b="✔"
                data-pe-6a="Our team of creative minds working collaboratively on your
                goals."
              ></li>
            </ul>

            <a
              className="bg-black rounded text-lg px-8 py-6 inline-block text-white no-underline"
              onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sam-thiele/free-consultation'});return false;"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnePhase;
