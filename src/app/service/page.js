import PageTitle from '@/components/PageTitle';
import Service from '@/components/Service/Service';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageTitle img="/teambg.png" title="Our Services" page="Our Services" />
      <Service />
    </div>
  );
};

export default page;