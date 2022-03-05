import React from "react";

const SideVideo = ({ slides, videoIndex }) => (
  <video className="opacity-60 object-cover w-full h-full" muted loop>
    <source src={slides[videoIndex].src} type="video/mp4" />
  </video>
);

export default SideVideo;
