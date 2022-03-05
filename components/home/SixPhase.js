import React from "react";
import Card from "./Card";
import Video from "./Video";
import SideVideo from "./SideVideo";
import Button from "./Button";

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
      <div className="bg-black relative w-full h-[300px] md:h-[590px] lg:h-[590px]">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[80%] h-full">
            {videoIndex === 0 && (
              <Video slides={slides} videoIndex={videoIndex} />
            )}
            {videoIndex === 1 && (
              <Video slides={slides} videoIndex={videoIndex} />
            )}
            {videoIndex === 2 && (
              <Video slides={slides} videoIndex={videoIndex} />
            )}
          </div>
          {/* sidebar */}
          <div className="lg:w-[20%] md:w-[25%] w-[27%] hover:w-[30%] lg:hover:w-[23%] duration-300 ease-linear h-full">
            {videoIndex === 0 && <SideVideo slides={slides} videoIndex="1" />}
            {videoIndex === 1 && <SideVideo slides={slides} videoIndex="2" />}
            {videoIndex === 2 && <SideVideo slides={slides} videoIndex="0" />}
            {/* buttons */}
            {videoIndex === 0 && (
              <Button
                changeVideo={changeVideo}
                slides={slides}
                videoIndex="1"
              />
            )}
            {videoIndex === 1 && (
              <Button
                changeVideo={changeVideo}
                slides={slides}
                videoIndex="2"
              />
            )}
            {videoIndex === 2 && (
              <Button
                changeVideo={changeVideo}
                slides={slides}
                videoIndex="0"
              />
            )}
          </div>
        </div>
        {/* box */}
        {videoIndex === 0 && <Card videoIndex={videoIndex} slides={slides} />}
        {videoIndex === 1 && <Card videoIndex={videoIndex} slides={slides} />}
        {videoIndex === 2 && <Card videoIndex={videoIndex} slides={slides} />}
      </div>
    </div>
  );
};

export default SixPhase;
