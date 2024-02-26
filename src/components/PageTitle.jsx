import Image from 'next/image';


const PageTitle = ({img,title,page}) => {
  return (
    <div>
      <div>
        <div>
          <Image src={img} alt="img" width={1440} height={370}
            className=' max-h-96'
            />
        </div>
        <div>
          <h1>{title }</h1>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>{page }</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;