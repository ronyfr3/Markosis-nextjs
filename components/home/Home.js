import Banner from "../Banner";
import OnePhase from "./OnePhase";
import TwoPhase from "./TwoPhase";
import ThreePhase from "./ThreePhase";
import FourPhase from "./FourPhase";
import FivePhase from "./FivePhase";
import SixPhase from "./SixPhase";
import SevenPhase from "./SevenPhase";

const Home = () => {
  return (
    <>
      <Banner />
      <OnePhase />
      <TwoPhase />
      <ThreePhase />
      <FourPhase />
      <FivePhase />
      <SixPhase />
      <div className="mt-60 lg:mt-0 xl:mt-0 md:mt-0 xxl:mt-0">
        <SevenPhase />
      </div>
    </>
  );
};

export default Home;
