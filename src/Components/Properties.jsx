import gsap from "gsap";
import Button from "./Button";
import { PropertiesCard, ServiceCard } from "./Card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Properties = ({
  description,
  btn,
  serviceList = false,
  propertiesList = false,
}) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const titleAnim = new SplitText("#property_title", {
        type: "words,chars",
      });
      const descAnim = new SplitText("#property_desc", {
        type: "lines",
        linesClass: "w-fit xs:text-nowrap",
      });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          // toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      t1.fromTo(titleAnim.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 });
      t1.fromTo(
        descAnim.lines,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 0.02, y: "-10%" },
      );
      t1.fromTo(
        ".property_btn",
        {
          opacity: 0,
          y: "0%",
        },
        { opacity: 1, y: "-10%" },
      );
      t1.fromTo(
        ".property_card_item",
        { opacity: 0, y: "30px" },
        { opacity: 1, stagger: 0.02, y: "0px" },
      );
      return () => {
        titleAnim.revert();
        descAnim.revert();
      };
    },
    { scope: containerRef, dependencies: [propertiesList] },
  );

  return (
    <section
      ref={containerRef}
      id={propertiesList ? "properties" : "services"}
      className={` flex-col p-2  justify-center gap-8 items-center w-full min-h-dvh ${
        propertiesList
          ? "bg-black text-white rounded-xl"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col justify-center items-start w-full h-auto capitalize text-left gap-5 xs:items-center xs:text-center md:w-[90%]">
        {propertiesList ? (
          <h2 id="property_title" className="w-full">
            Explore our <span className="text-green-600">featured </span>{" "}
            properties.
          </h2>
        ) : (
          <h2 id="property_title" className="w-full">
            Personal <span className="text-green-600">support </span>
            for buying, selling, and investing
          </h2>
        )}
        <p id="property_desc" className="xs:flex xs:flex-wrap xs:justify-center xs:items-center">{description}</p>
        <div
          className={`property_btn bg-green-300 flex flex-row justify-between items-center ${
            btn.length > 1
              ? "w-full gap-3 p-1 h-8 rounded-full xs:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%]"
              : "w-[70%] rounded-full xs:w-2/5 md:w-[30%] lg:w-[20%]"
          }`}
        >
          {btn.map((ele, i) => (
            <Button
              key={i}
              btnName={ele}
              style={`${
                btn.length > 1
                  ? "w-[25%] bg-white flex-row justify-center items-center h-full rounded-full"
                  : "w-full rounded cursor-pointer bg-transparent flex text-green-900 justify-center p-1"
              }`}
            />
          ))}
        </div>
      </div>


      <ul className="flex flex-wrap gap-5 capitalize w-full justify-start items-center xs:justify-center">
        {serviceList
          ? serviceList.map((ele, i) => (
              <ServiceCard name={ele.name} key={i} index={i} img={ele.img} />
            ))
          : propertiesList.map((ele, i) => (
              <PropertiesCard
                index={i}
                key={i}
                propertyImg={ele.img}
                propertyName={ele.name}
                propertyAddress={ele.address}
                propertyPrice={ele.price}
                additionalDetails={{
                  bed: ele.bed,
                  bath: ele.bath,
                  size: ele.size,
                }}
              />
              // </li>
            ))}
      </ul>
    </section>
  );
};

export default Properties;
