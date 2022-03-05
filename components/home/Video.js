const Video = ({ slides, videoIndex }) => (
  <video className="opacity-80 object-cover w-full h-full" muted autoPlay loop>
    <source src={slides[videoIndex].src} type="video/mp4" />
  </video>
);

export default Video;
