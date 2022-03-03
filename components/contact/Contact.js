import React from "react";
import FirstPhase from "./FirstPhase";
import SecondPhase from "./SecondPhase";

const Contact = () => (
  <div className="flex flex-col md:flex-row lg:flex-row h-full">
    <div className="flex-1">
      <FirstPhase />
    </div>
    <div className="flex-1 bg-[#EDF2F7]">
      <SecondPhase />
    </div>
  </div>
);

export default Contact;
