import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Calendly from "./Calendly";

const Header = () => {
  const router = useRouter().asPath;

  const [showCalendly, setShowCalendly] = React.useState(false);

  return (
    <header className="absolute w-full z-50 px-6 py-2 sm:px-12 lg:px-16 xl:px-24 xxl:px-40">
      <div className="flex justify-between items-center">
        <div className=" h-8 lg:h-16">
          <Link className="block relative w-24 lg:w-32 h-8 lg:h-16" href="/">
            <img
              src={`${
                router === "/contact"
                  ? "/assets/thinklogo.svg"
                  : "https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/think-logo-white.svg"
              }`}
              className="h-16"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <nav className="nav nav--main relative z-40">
            <div className="nav-slider">
              <ul className="flex font-medium items-center ">
                <li className=" md:mr-12 lg:mr-16 last:mr-0 pt-6 md:pt-0 text-xl">
                  <Link className="text-white  no-underline" href="/contact">
                    Contact
                  </Link>
                </li>
                <li className="hidden md:block h-full bg-black rounded text-lg px-4 py-2 text-white no-underline text-center mb-8 md:mb-0">
                  <button onClick={() => setShowCalendly(true)}>
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          {showCalendly && <Calendly setShowCalendly={setShowCalendly} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
