import PageTitle from '@/components/PageTitle';
import Project from '@/components/Project/Project';
import React from 'react';

const page = () => {
  return (
    <div>
      <PageTitle img="/teambg.png" title="All Project" page="All Project" />
      <Project />
    </div>
  );
};

export default page;