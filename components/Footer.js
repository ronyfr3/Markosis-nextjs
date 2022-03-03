import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black px-6 sm:px-12 lg:px-16 xl:px-24 xxl:px-40">
      <div className="py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col sm:flex-row justify-between">
        <div className="w-1/2 ">
          <a
            className="text-white no-underline "
            href="https://teamthink.co/contact"
          >
            <h2 className="leading-[1.2] font-[200] text-[30px] pointer">
              Contact
            </h2>
          </a>
        </div>
        <div className="appear_top-1 w-1/2 text-white flex flex-col justify-start mt-8 sm:mt-0 sm:items-end contact">
          <div className="w-48">
            <h6 className="font-[400] text-[#718096] mb-[.7rem] leading-[1.4] mt-0 opacity-[.7] text-[.8rem]">
              ADDRESS
            </h6>
            <p className="leading-[1.4] text-[1.1rem] font-[400] mb-[.7rem]">
              Laneway Office
              <br />
              31 Thistle Street,
              <br />
              Launceston, Tas
            </p>

            <div className="w-48 mt-5">
              <h6 className="font-[400] text-[#718096] mb-[.7rem] leading-[1.4] mt-0 opacity-[.7] text-[.8rem]">
                CONTACT
              </h6>
              <p className="leading-[1.4] text-[1rem] font-[400] mb-[.7rem]">
                <a href="mailto:hi@teamthink.co">hi@teamthink.co</a>
                <br />
                <a href="tel:2003206287207203">03 6287 7203</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between text-base text-[#76858b] pb-12">
        <div className="md:w-1/2 text-left">
          <a href="/privacy" className="no-underline text-[#76858b] pointer">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 text-left md:text-right flex md:justify-end flex-col md:flex-row">
          <div className="flex pr-6 mb-6 md:mb-0 md:mr-6 border-r border-gray-800 mt-[-1px]">
            <div className="md:ml-6">
              <a
                className="opacity-75 hover:opacity-100 pointer"
                href="https://www.instagram.com/made_by_think/"
              >
                <svg viewBox="0 0 18 18" width="18" height="18">
                  <path
                    fill="#718096"
                    fill-rule="nonzero"
                    d="M5.2 0h7.6C15.7 0 18 2.3 18 5.2v7.6c0 2.9-2.3 5.2-5.2 5.2H5.2A5.2 5.2 0 010 12.8V5.2C0 2.3 2.3 0 5.2 0zM5 1.8A3.2 3.2 0 001.8 5v8c0 1.8 1.4 3.2 3.2 3.2h8c1.7 0 3.2-1.5 3.2-3.2V5c0-1.8-1.4-3.2-3.2-3.2H5zm8.7 1.3a1.1 1.1 0 110 2.3 1.1 1.1 0 010-2.3zM9 4.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="ml-6">
              <a
                className="opacity-75 hover:opacity-100 pointer"
                href="https://www.facebook.com/teamthink.co"
              >
                <svg width="9" height="18" viewBox="0 0 9 18">
                  <path
                    fill="#718096"
                    d="M9 0v3.6H7.2c-.6 0-.9.7-.9 1.4v2.2H9v3.6H6.3V18H2.7v-7.2H0V7.2h2.7V3.6c0-2 1.6-3.6 3.6-3.6H9z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="ml-6">
              <a
                className="opacity-75 hover:opacity-100 pointer"
                href="https://au.linkedin.com/company/teamthink"
              >
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <title>LinkedIn icon</title>
                  <path
                    fill="#718096"
                    d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-[#76858b]">
            © Think 2022 | The Trustee for Think Trust | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
