import Brand from '@/components/Brand';
import Review from '@/components/Review';
import Subscribe from '@/components/Subscribe';
import WorkList from '@/components/WorkList';
import React from 'react';

const page = () => {
  return (
    <div>
      <Brand />
      <WorkList />
      <Review />
     
    </div>
  );
};

export default page;