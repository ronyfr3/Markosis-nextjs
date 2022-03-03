import React from "react";

const SecondPhase = () => {
  const values = [
    "stories plan",
    "website",
    "video",
    "photography",
    "branding",
  ];
  return (
    <div className="relative mt-[120px] mb-10">
      <ul className="relative flex items-center justify-center gap-3 flex-wrap">
        {values.map((x) => (
          <li>
            <label className="relative pointer">
              <input type="checkbox" name="" />
              <div class="w-full h-full bg-[#ebf5fc] flex justify-center items-center shadow-lg p-3 pointer">
                {x}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondPhase;
