import Image from 'next/image';
import { featureData } from '../../public/FeatureData';import FeatureCard from './FeatureCard';


const Feature = () => {
  return (
    <div className="">
      <header className="bg-[#F0FDF4] ">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <div className="flex  flex-col  ">
                  <Image src="/Mask.png" alt="m" width={600} height={530} />
                  <p className=" text-[#2E3E5C] text-[14px] mt-4">
                    App Design - June 20, 2022
                  </p>
                  <h1 className=" text-[#1E1F4B] font-bold text-2xl mt-3">
                    App Redesign
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-7  w-full   lg:mt-0 lg:w-1/2">
              {featureData?.map((fd) => (
                <FeatureCard fd={fd} key={fd?.img} />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Feature;