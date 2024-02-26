import Image from 'next/image';
import React from 'react';

const TeamCard = ({t}) => {
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-lg">
        <figure>
          <Image src={t?.img} alt="team" width={390} height={390} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center flex justify-center mt-5 pb-7 text-[#101A29] text-[30px] font-semibold">{t?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;