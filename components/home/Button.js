import React from "react";

const Button = ({ changeVideo, slides, videoIndex }) => {
  return (
    <div className="absolute right-[-5px] lg:right-12 top-10 z-50 flex flex-col items-center justify-center">
      <button
        onClick={changeVideo}
        className="bg-white flex items-center justify-center rounded-[15px] py-[0.1rem] md:py-1 lg:py-[.3rem] px-[.9rem] md:px-10 lg:px-8 text-sm lg:text-[21px] md:text-[18px] font-[400] lg:font-[500] md:font-[500] capitalize "
      >
        next{" "}
        <svg
          className="w-6 h-6 ml-2 lg:ml-4 lg:w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
      <p className=" mt-3 font-[400] text-white w-[200px] text-center text-sm">
        {slides[videoIndex].summary}
      </p>
    </div>
  );
};

export default Button;
