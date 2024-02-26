import Image from "next/image";


const SingleWork = ({work}) => {
  return (
    <div className=" py-12 px-7">
      <Image src={work?.img} alt="img" width={100} height={100} />
      <h1 className=" py-4 font-semibold poppins text-[24px] text-[#000]">{work?.title}</h1>
      <p className=" font-sans text-[18px] text-[#000]">{work?.text}</p>
      <button className="btn bg-white outline-none border-none shadow-none text-[18px] text-[#000] font-normal mt-8">
        Learn More
        <Image src="/Vector.png" alt="arrow" width={16} height={14} />
      </button>
    </div>
  );
};

export default SingleWork;