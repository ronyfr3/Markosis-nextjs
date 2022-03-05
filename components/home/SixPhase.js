import React from "react";

const SixPhase = () => {
  const [videoIndex, setVideoIndex] = React.useState(0);

  const changeVideo = () => {
    if (videoIndex >= 2) {
      setVideoIndex(0);
    } else {
      setVideoIndex((prevState) => prevState + 1);
    }
  };

  const slides = [
    {
      title: "Sharing the power of local business partnership",
      src: "https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/Burger-Junkie-Vid.mp4",
      summary: "Burger Junkie",
      linkText: "Check it Out",
      link: "https://teamthink.co/projects/burger-junkie",
    },

    {
      title: "Creative ideas to drive engagement",
      src: "https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/Innerspace-Launceston-Feature.mp4",
      summary: "Innerspace Wardrobes",
      linkText: "Check it Out",
      link: "https://teamthink.co/projects/innerspace-wardrobes",
    },

    {
      title: "Content creation &amp; social media management",
      src: "https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/Advanced-Lifecare-Loop.mp4",
      summary: "Advanced Lifecare",
      linkText: "Check it Out",
      link: "https://teamthink.co/projects/advanced-lifecare",
    },
  ];
  console.log(`${slides[videoIndex].src}`);
  return (
    <div className="relative">
      <h1 className="text-[29px] font-[400] text-center mb-3 leading-[1.2] py-10">
        Stories Case Studies.
      </h1>
      <div className="bg-black overflow-hidden relative">
        <div className="flex">
          {videoIndex === 0 && (
            <video
              className="opacity-70 object-cover w-full h-[600px]"
              muted
              autoPlay
              loop
            >
              <source src={slides[0].src} type="video/mp4" />
            </video>
          )}
          {videoIndex === 1 && (
            <video
              className="opacity-70 object-cover w-full h-[600px]"
              muted
              autoPlay
              loop
            >
              <source src={slides[1].src} type="video/mp4" />
            </video>
          )}
          {videoIndex === 2 && (
            <video
              className="opacity-70 object-cover w-full h-[600px]"
              muted
              autoPlay
              loop
            >
              <source src={slides[2].src} type="video/mp4" />
            </video>
          )}

          <div className="w-[330px]">
            {videoIndex === 0 && (
              <video
                className="opacity-70 object-cover w-full h-[600px]"
                muted
                loop
              >
                <source src={slides[1].src} type="video/mp4" />
              </video>
            )}
            {videoIndex === 1 && (
              <video
                className="opacity-70 object-cover w-full h-[600px]"
                muted
                loop
              >
                <source src={slides[2].src} type="video/mp4" />
              </video>
            )}
            {videoIndex === 2 && (
              <video
                className="opacity-70 object-cover w-full h-[600px]"
                muted
                loop
              >
                <source src={slides[0].src} type="video/mp4" />
              </video>
            )}
            <button
              onClick={changeVideo}
              className="bg-white flex items-center rounded-[15px] py-1 px-10 text-[20px] font-[600] capitalize absolute right-10 top-10 z-50"
            >
              next{" "}
              <svg
                className="w-6 h-6 ml-4"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixPhase;
