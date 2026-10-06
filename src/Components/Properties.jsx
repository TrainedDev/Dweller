import gsap from "gsap";
import Button from "./Button";
import { PropertiesCard, ServiceCard } from "./Card";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Properties = ({
  title,
  description,
  btn,
  serviceList = false,
  propertiesList = false,
}) => {
  const containerRef = useRef();

  useGSAP(
    () => {
      // 1. By scoping this to containerRef, "#property_title" only selects inside THIS component instance
      const titleAnim = new SplitText("#property_title", {
        type: "chars",
      });
      const descAnim = new SplitText("#property_desc", {
        type: "lines",
      });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          // toggleActions: "play none none reverse", // 4. Smooth reset behaviors on scrolling
          // markers: true,
        },
      });

      t1.fromTo(titleAnim.chars, { opacity: 0 }, { opacity: 1, stagger: 0.08 });
      t1.fromTo(
        descAnim.lines,
        { opacity: 0, y: "100%" },
        { opacity: 1, stagger: 0.05, y: "-10%" },
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
        { opacity: 1, stagger: 0.05, y: "0px" },
      );
    },
    { scope: containerRef, dependencies: [propertiesList] },
  );

  return (
    <section
      ref={containerRef}
      id={propertiesList ? "properties" : "services"}
      className={`flex flex-col p-2 justify-center gap-8 items-center w-full min-h-dvh ${
        propertiesList
          ? "bg-black text-white rounded-xl"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col justify-center items-start w-full h-auto capitalize text-left gap-5">
        <h2 id="property_title">{title}</h2>
        <p id="property_desc">{description}</p>
        <div
          className={`property_btn bg-green-400 flex flex-row justify-between items-center ${
            btn.length > 1 ? "w-full gap-3 p-1 h-8 rounded-full" : "w-[60%]"
          }`}
        >
          {btn.map((ele, i) => (
            <Button
              key={i}
              btnName={ele}
              style={`rounded cursor-pointer rounded-0 bg-white flex justify-center p-1 ${
                btn.length > 1
                  ? "w-[25%] flex-row justify-center items-center h-full rounded rounded-full"
                  : "w-full"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 7. Added class mapping targeting list items inside your conditional list cards directly */}
      <ul className="flex flex-wrap gap-5 capitalize w-full justify-start items-center">
        {serviceList
          ? serviceList.map((ele, i) => (
              // <li key={i} className=" aspect-square w-full flex-col gap-4">
                <ServiceCard name={ele.name} key={i} index={i} img={ele.img} />
              // </li>
            ))
          : propertiesList.map((ele, i) => (
              // <li key={i} className=">
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
