import React from "react";

const ThreePhase = () => {
  return (
    <div className=" mx-auto flex-col lg:flex-row text-service flex">
      <div className="w-full lg:w-1/2 bg-gray-100 text-left pr-12 flex items-center py-16  md:py-24 flex sm:pl-12 lg:pl-16 xl:pl-24 xxl:pl-40">
        <div className="px-6 sm:px-0 ">
          <h3 className="max-w-xs font-[400] text-[1.375rem] text-[#76858b] leading-[1.4] mb-1">
            {" "}
            What you can expect on a Stories plan.
          </h3>
          <ul className="grid grid-cols-1 circle-checkmark my-12 gap-0 ">
            <li
              className="text-lg relative pl-10 mb-4 text-left te-1a"
              data-te-1b="✔"
              data-te-1a="Access to all services per month"
            ></li>
            <li
              className="text-lg relative pl-10 mb-4 text-left te-2a"
              data-te-2b="✔"
              data-te-2a="Monthly review report"
            ></li>
            <li
              className="text-lg relative pl-10 mb-4 text-left te-3a"
              data-te-3b="✔"
              data-te-3a="Customer focused strategy"
            ></li>
            <li
              className="text-lg relative pl-10 mb-4 text-left te-4a"
              data-te-4b="✔"
              data-te-4a="Starting at approx. 15 hours per month"
            ></li>
            <li
              className="text-lg relative pl-10 mb-4 text-left te-5a"
              data-te-5b="✔"
              data-te-5a="20% discount on all additional Think services"
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
      <div className=" bg-gray-900  md:mt-0 w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-8 serviceSection px-4 py-16  md:py-24 flex sm:pl-6 lg:pl-8 xl:pl-12 xxl:pl-20 sm:pr-12 lg:pr-16 xl:pr-24 xxl:pr-40">
        <div className="text-white">
          <h5 className="font-[500] text-lg mb-1 ">Videography</h5>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Product Videos
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Interviews
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Social Campaigns
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            TV Commercials
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Sound Design
          </p>
        </div>
        <div className="text-white">
          <h5 className="font-[500] text-lg mb-1 ">Photography</h5>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Lifestyle
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Food
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Product
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Portraits
          </p>
        </div>
        <div className="text-white">
          <h5 className="font-[500] text-lg mb-1 ">Design</h5>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Branding
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Collateral
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Web Design
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Packaging
          </p>
        </div>
        <div className="text-white">
          <h5 className="font-[500] text-lg mb-1 ">Web Development</h5>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Front end &amp; Back end
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Interaction Design
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            eCommerce
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Web Applications
          </p>
        </div>
        <div className="text-white">
          <h5 className="font-[500] text-lg mb-1 ">
            <strong>Social Media</strong>
          </h5>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Social Media Strategy
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Content &amp; Campaigns<br></br>
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Mailing &amp; Competition
          </p>
          <p className="text-[#718096] mb-[5px] text-[14px] font-[400] leading-[1.8] mt-0 ">
            Ads Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreePhase;
