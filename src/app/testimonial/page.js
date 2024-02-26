import PageTitle from '@/components/PageTitle';
import Testimonial from '@/components/Testimonial/Testimonial';


const page = () => {
  return (
    <div>
      <PageTitle
        img="/teambg.png"
        title="Testimonial List"
        page="Testimonial List"
      />
      <Testimonial />
    </div>
  );
};

export default page;