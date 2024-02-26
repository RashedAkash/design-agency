import React from 'react';

const Banner = () => {
  return (
    <div>
      <header className="pb-60 pt-32 dark:bg-[#D7F5DC]">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-[#000] lg:font-bold lg:text-5xl poppins  ">
                  Increase Your Customers Loyalty and Satisfaction
                </h1>

                <p className="mt-4 text-xl font-sans font-semibold text-[#000] mb-10">
                  We help businesses like yours earn more customers, standout
                  from competitors, make more money
                </p>

                <button className="w-full px-7 py-4 mt-6 text-xl font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-[#20B15A] rounded-2xl lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Get Started
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;