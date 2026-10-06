import { useGSAP } from "@gsap/react";
import { realEstateData } from "../../Constants";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)
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

  useGSAP(() => {
    const title = new SplitText(".title_exp", { type: "chars" });
    const desc = new SplitText("#desc_exp", { type: "lines" });

    const t1 = gsap.timeline({
      scrollTrigger: {
        target: "#exp",
        start: "10% 80%",
        end: "bottom bottom",
        markers:true
      },
    });

    t1.fromTo(title.chars, { opacity: 0 }, { opacity: 1, stagger: 0.08 });
    t1.fromTo(
      desc.lines,
      { opacity: 0, y: "100%" },
      { opacity: 1, stagger: 0.05, y: "-10%" },
    );
    t1.fromTo(
      "#exp_list",
      { opacity: 0, y: "5%" },
      { opacity: 1, stagger: 0.05, y: "0%" },
    );
  });

  return (
    <section
      id="exp"
      className="flex-col gap-10 text-black capitalize justify-center items-center w-full min-h-dvh"
    >
      <div className="flex-col gap-5 justify-center items-center text-start w-full">
        <h2 className="title_exp">result that speaks for themselves.</h2>
        <p id="desc_exp">
          Brighthome successfully matched with premium homes with families
          across top neighborhoods, ensuring satisfaction, value, and smooth
          buying experiences.
        </p>
      </div>

      <ul
        id="exp_list"
        className="flex-col justify-center items-center gap-5 w-full"
      >
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
