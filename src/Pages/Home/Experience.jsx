import { realEstateData } from "../../Constants";

const Experience = () => {
  const {
    totalSoldHomes,
    year,
    description,
    soldImage,
    propertyDescription,
    propertyImage,
    totalProperties,
  } = realEstateData;

  return (
    <section className="flex-col gap-10 p-1 text-black capitalize justify-center items-center w-screen min-h-dvh">
      <div className="flex-col gap-5 justify-center items-center text-start w-full">
        <h1 className="">result that speaks for themselves.</h1>
        <p>
          Brighthome successfully matched with premium homes with families
          across top neighborhoods, ensuring satisfaction, value, and smooth
          buying experiences.
        </p>
      </div>

      <ul className="flex-col justify-center items-center gap-5 w-full">
        <li className="flex-col relative h-60 justify-around items-center w-full">
          <div className="flex-col w-full bottom-0 absolute justify-between items-start">
            <div className="flex-col w-full tracking-wide justify-center items-center ">
              <h1>{totalSoldHomes}+</h1>
              <p className="text-[18px]">homes sold in just {year}</p>
            </div>
            <p>{description}</p>
          </div>
          <img src={soldImage} className="absolute top-0" alt="houseImg" />
        </li>
        <li className="flex-col relative h-110 justify-around items-center w-full">
          <div className="flex-col w-full text-center bottom-0 gap-5 absolute justify-between items-start">
            <div className="flex-col w-full tracking-wide justify-center items-center ">
              <h1>{totalProperties}</h1>
              <p className="text-[18px]">homes sold in just {year}</p>
            </div>
            <p>{propertyDescription}</p>
          </div>
          <img src={propertyImage} className="absolute top-0" alt="houseImg" />
        </li>
      </ul>
    </section>
  );
};

export default Experience;
