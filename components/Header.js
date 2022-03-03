import React from "react";

const Header = () => {
  return (
    <header className="absolute w-full z-50 px-6 py-2 sm:px-12 lg:px-16 xl:px-24 xxl:px-40">
      <div className="flex justify-between items-center">
        <div className=" h-8 lg:h-16">
          <a
            className="block relative w-24 lg:w-32 h-8 lg:h-16"
            href="https://teamthink.co/"
          >
            <img
              src="https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/think-logo-white.svg"
              className="h-16"
            />
          </a>
        </div>
        <div className="">
          <nav className="nav nav--main relative z-40">
            <div className="nav-slider">
              <ul className="flex font-medium items-center ">
                <li className=" md:mr-12 lg:mr-16 last:mr-0 pt-6 md:pt-0">
                  <a
                    className="   text-white  no-underline text-xl"
                    href="https://teamthink.co/contact"
                  >
                    Contact
                  </a>
                </li>
                <li className=" hidden md:block h-full my-4">
                  <a
                    className="bg-black rounded text-lg px-4 py-2 inline-block text-white no-underline text-center mb-8 md:mb-0"
                    onClick="Calendly.initPopupWidget({url: 'https://calendly.com/sam-thiele/free-consultation'});return false;"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
