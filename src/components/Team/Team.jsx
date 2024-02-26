import { teamData } from "../../../public/TeamData";
import TeamCard from "./TeamCard";


const Team = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
      {
teamData?.map(t=> <TeamCard key={t.name} t={t} />)
      }
    </div>
  );
};

export default Team;