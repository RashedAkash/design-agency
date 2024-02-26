import { workData} from '../../public/workData'
import SingleWork from './SingleWork';

const WorkList = () => {
  return <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {workData?.map(work => <SingleWork key={work?.title} work={work} />)}
  </div>;
};

export default WorkList;