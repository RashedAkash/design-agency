import Image from 'next/image';
import React from 'react';

const Brand = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-36 py-10">
      <Image
        src="/logos_google.png"
        alt="google"
        width={88}
        height={28}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <Image
        src="/Trello-logo-blue 1.png"
        alt="google"
        width={88}
        height={28}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <Image
        src="/logos_monday.png"
        alt="google"
        width={88}
        height={28}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <Image
        src="/Notion.png"
        alt="google"
        width={88}
        height={28}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <Image
        src="/Slack.png"
        alt="google"
        width={88}
        height={28}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Brand;