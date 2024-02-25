import {data} from '../../public/customerData'
import ReviewCard from './ReviewCard';
const Review = async() => {
 
  console.log(data);
  return <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-11'>
    {
      data?.map(dt=> <ReviewCard key={dt?.number} dt={dt} />)
    }
  </div>;
};

export default Review;
