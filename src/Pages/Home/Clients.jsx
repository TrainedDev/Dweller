import { useRef } from "react";
import { clientLists } from "../../Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Clients = () => {
  const largeDevice = useMediaQuery({ minWidth: "768px"})
  const clientRef = useRef();

  useGSAP(
    () => {
      const title = new SplitText("h2", { type: "words, chars" });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: clientRef.current,
          start: "top 80%",
          end: "bottom bottom",
          markers: true,
        },
      });
    
      t1.fromTo(clientRef.current, { opacity: 0, yPercent:"2" }, { opacity: 1, yPercent: "0", duration:0.5 });
      t1.fromTo(title.chars, { opacity: 0 }, { opacity: 1, stagger: 0.03 });
      t1.fromTo("ul", { opacity: 0, yPercent: "2" }, { opacity: 1, yPercent: "0" });
      if (largeDevice) {
        
        t1.fromTo(
          "ul li:nth-child(2)",
        {
          opacity: 0,
          yPercent: 30, 
        },
        {
          opacity: 1,
          yPercent: 0,
          // ease: "power2.inOut",
          duration: 0.5, 
        },
      );
    }
    },
    { scope: clientRef },
  );

  return (
    <section
      ref={clientRef}
      className="flex-col w-full min-h-dvh justify-center bg-black capitalize items-center text-center p-2 rounded-xl gap-10"
    >
      <h2 className="w-[60%]">
        trusted by <span className="text-green-300">homeowners</span> and buyers
        alike
      </h2>
      <ul className="flex flex-wrap justify-center items-center w-full gap-2">
        {clientLists.map((ele, i) => (
          <li
            key={i}
            className="flex-col w-full justify-center bg-red- md:h-110 md:relative items-center xs:w-62"
          >
            <div
              className={`flex-col justify-center h-60 w-full rounded-xl overflow-hidden aspect-square items-center relative md:absolute ${i % 2 == 0 ? "md:top-0" : "md:bottom-0"}`}
            >
              <img
                src={ele.img}
                className="h-full w-full object-center absolute object-cover"
                alt=""
              />
              <div className="border rounded-xl backdrop-blur-xs bottom-1 w-[95%] flex-col items-start p-1 absolute">
                <h5 className="font-bold">{ele.name}</h5>
                <p>{ele.occupation}</p>
              </div>
            </div>
            <div
              className={`text-start rounded-xl  bottom-0 bg-white/9 text-[14px] tracking-wide h-50 p-4 md:absolute ${i % 2 == 0 ? "md:bottom-0" : "md:top-0"}`}
            >
              "{ele.description}"
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
