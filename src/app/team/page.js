import PageTitle from '@/components/PageTitle';
import Team from '@/components/Team/Team';
;

const page = () => {
  return (
    <div>
      <PageTitle img="/teambg.png" title="Team" page="Team" />
      <div className="py-16 px-7">
        <Team />
      </div>
    </div>
  );
};

export default page;