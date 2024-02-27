import Image from 'next/image';


const ServiceCard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Image src="/Group 7038.png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (1).png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (2).png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (4).png" alt="img1" width={604} height={694} />
      </div>
    </div>
  );
};

export default ServiceCard;