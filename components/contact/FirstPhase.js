import Link from "next/link";

const FirstPhase = () => {
  return (
    <div className="w-full  px-6 sm:px-12 lg:px-16 xl:px-24 xxl:px-40 pt-48 pb-24">
      <div className="max-w-xl">
        <h1 className="w-full text-4xl md:text-4xl lg:text-[3.1rem] mb-[2rem] text-[#76858b] font-[100]">
          We'd love to{" "}
          <strong className="text-black font-[200] lg:leading-[1.5]">
            partner with you.
          </strong>
        </h1>

        <div className="flex items-center mt-16 rounded-lg object-contain">
          <img
            className="w-32 h-32 rounded-full appear_top-1"
            src="https://s3.ap-southeast-2.amazonaws.com/static.teamthink.co/general-media/Sam-Meeting_LR_01.jpg"
            alt=""
          />
          <div className="ml-10">
            <h6 className="mb-2 text-gray-600 text-base lg:text-xl appear_top-1">
              Managing Director
            </h6>
            <h3 className="text-black mb-0 text-base lg:text-2xl no-underline">
              <Link
                className="text-black mb-0 no-underline"
                href="mailto:sam@think.org.au"
              >
                sam@think.org.au
              </Link>
            </h3>
            <h3 className="text-black mb-0 text-base lg:text-2xl no-underline">
              <Link href="tel:+61 409 435 138">+61 409 435 138</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPhase;
