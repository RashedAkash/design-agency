import { workData} from '../../public/workData'

const WorkList = () => {
  return <div>{workData?.map()}</div>;
};

export default WorkList;