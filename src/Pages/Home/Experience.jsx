import { useGSAP } from "@gsap/react";
import { realEstateData } from "../../Constants";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Experience = () => {
  const {
    totalSoldHomes,
    year,
    soldDescription,
    soldImage,
    propertyDescription,
    propertyImage,
    totalProperties,
  } = realEstateData;

  useGSAP(() => {
    const title = new SplitText(".title_exp", { type: "words,chars" });
    const desc = new SplitText("#desc_exp", { type: "lines" });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#exp",
        start: "10% 80%",
        end: "bottom bottom",
        // markers: true,
      },
    });

    t1.fromTo(title.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 });
    t1.fromTo(
      desc.lines,
      { opacity: 0, y: "100%" },
      { opacity: 1, stagger: 0.02, y: "-10%" },
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
      <div className="flex-col gap-5 justify-center items-center text-start w-full p-2">
        <h2 className="title_exp w-[90%] text-center xs:w-[70%]">
          Result that <span className="text-green-700">speaks</span> for themselves.
        </h2>
        <p id="desc_exp" className="text-left xs:text-center xs:w-[90%] sm:w-[70%] md:w-[50%]">
          Brighthome successfully matched with premium homes with families
          across top neighborhoods, ensuring satisfaction, value, and smooth
          buying experiences.
        </p>
      </div>

      <ul
        id="exp_list"
        className="flex-col justify-center items-center gap-5 w-full border-2 border-olive-500/10 bg-blue-600/5 rounded-2xl"
      >
        <li className="flex flex-wrap relative h-110 items-center justify-center w-full xs:h-135 md:justify-start md:h-90">
          <div className="flex-col gap-5 text-left w-full bottom-0 absolute justify-between items-start md:top-0 md:text-start md:w-[40%]">
            <div className="flex-col w-full font-medium tracking-wide justify-center items-center md:items-start">
              <h1>{totalSoldHomes}+</h1>
              <p className="text-[18px]">homes sold in just {year}</p>
            </div>
            <p>{soldDescription}</p>
          </div>
          <img
            src={soldImage}
            className="absolute rounded-2xl object-center object-cover top-0 w-full h-50 xs:w-[85%] xs:h-85 md:w-[55%] md:h-full md:right-0"
            alt="houseImg"
          />
        </li>
        <li className="flex flex-wrap relative h-120 justify-around items-center w-full xs:h-145 md:h-90 md:justify-start">
          <div className="flex-col w-full text-center gap-5 bottom-0 absolute justify-between items-start sm:bottom-10 md:w-[44%] md:h-full md:top-0 md:right-0 md:text-start">
            <div className="flex-col w-full font-medium tracking-wide justify-center items-center md:items-start">
              <h1>{totalProperties}</h1>
              <p className="text-[18px]">
                total property value successfully handled
              </p>
            </div>
            <p>{propertyDescription}</p>
          </div>
          <img
            src={propertyImage}
            className="absolute rounded-2xl object-center object-cover top-0 w-full h-50 xs:w-[85%] xs:h-85 md:w-[55%] md:h-full md:left-0"
            alt="houseImg"
          />
        </li>
      </ul>
    </section>
  );
};

export default Experience;
