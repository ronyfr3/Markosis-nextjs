import { InlineWidget } from "react-calendly";

const Calendly = ({ setShowCalendly }) => {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
      <InlineWidget url="https://calendly.com/rakib-fstackdev/15min" />
      <span
        className="fixed top-[50px] bg-black text-white px-2 border-1 border border-white py-1 text-[20px] cursor-pointer right-[-35px] rounded-sm"
        onClick={() => setShowCalendly(false)}
      >
        x
      </span>
    </div>
  );
};

export default Calendly;
