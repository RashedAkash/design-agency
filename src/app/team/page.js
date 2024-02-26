import PageTitle from '@/components/PageTitle';
import Team from '@/components/Team/Team';
;

const page = () => {
  return (
    <div>
      <PageTitle img="/teambg.png" title="Team" page="Team" />
      <Team />
    </div>
  );
};

export default page;