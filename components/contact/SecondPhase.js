import React from "react";

const SecondPhase = () => {
  const [info, setInfo] = React.useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const [select, setSelected] = React.useState({
    click: false,
    options: [],
  });

  const values = [
    "stories plan",
    "website",
    "video",
    "photography",
    "branding",
  ];

  const saveClicked = (item) => {
    let selectedItem = values.find((v) => v === item);
    let checkExists = select.options.find((v) => v === selectedItem);
    let index = select.options.indexOf(selectedItem);

    if (checkExists) {
      index > -1 && select.options.splice(index, 1);
      setSelected({
        click: false,
        options: [...select.options],
      });
    } else {
      setSelected({
        click: true,
        options: [...select.options, selectedItem],
      });
    }
  };
  return (
    <div className=" lg:mt-[140px] md:mt-[140px] mb-10 px-6 lg:pl-16 md:pr-24 py-12">
      <h1 className="text-[1.625rem]">What are you interested in?</h1>
      <ul className="flex items-center justify-start gap-4 flex-wrap mt-7">
        {values.map((item) => (
          <li key={item}>
            <div
              className={`${
                select.options.some((v) => v === item) &&
                "bg-black text-[#fffbfb]"
              } border font-[500] rounded-full border-black py-3 px-6 cursor-pointer capitalize text-sm text-[#414141]`}
              onClick={() => saveClicked(item)}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>

      <form
        onSubmit={""}
        className="w-full flex flex-col mt-10 overflow-hidden"
      >
        <input
          className="py-6 pl-4"
          placeholder="Full Name"
          type="text"
          name="fullName"
          value={info.fullName}
          onChange={handleChange}
        />{" "}
        <br />
        <div className="flex items-center justify-between mb-6">
          <input
            className="py-6 pl-4 w-[90%] mr-3"
            placeholder="Email Address"
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            className="py-6 pl-4 w-full"
            placeholder="Contact Number"
            type="text"
            name="contact"
            value={info.contact}
            onChange={handleChange}
          />{" "}
          <br />
        </div>
        <textarea
          className="py-6 pl-4 mb-6"
          placeholder="Message"
          rows="5"
          cols="33"
          type="text"
          name="message"
          value={info.message}
          onChange={handleChange}
        />
        <button className="bg-[#2d3748] px-12 py-6 text-white text-lg flex items-center justify-center w-[250px]">
          Contact us{" "}
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
      </form>
    </div>
  );
};

export default SecondPhase;
