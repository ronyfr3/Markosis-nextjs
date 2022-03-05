import { motion } from "framer-motion";

const Hoc = ({ videoIndex, slides }) => {
  const animate = {
    in: {
      opacity: 1,
      y: -100,
    },
    out: {
      opacity: 0,
      y: 100,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };
  const transition = {
    type: "spring",
    stiffness: 100,
    duration: 0.5,
    ease: "anticipate",
    duration: 1,
  };
  return (
    <motion.div
      initial="out"
      animate="end"
      exit="out"
      variants={animate}
      transition={transition}
      className="bg-white px-6 sm:px-8 py-4 sm:py-12 md:p-10 lg:p-16 w-full sm:max-w-xl relative lg:absolute lg:top-[20%] lg:left-[10%] md:absolute md:top-[20%] md:left-[10%] "
    >
      <h5 className="text-md mt-4 text-black font-[600] text-[19px] leading-[1.125]">
        {slides[videoIndex].summary}
      </h5>
      <h2 className="text-black text-[27px] leading-[1.2] mt-4">
        {slides[videoIndex].title}
      </h2>
      <button className="border px-6 py-3 rounded border-black mt-8">
        {slides[videoIndex].linkText}
      </button>
    </motion.div>
  );
};

export default Hoc;
