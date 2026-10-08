import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import Button from "../../Components/Button";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    const heroHeading = new SplitText(".hero_heading", {
      type: "words, chars",
    });
    const heroDescription = new SplitText(".hero_desc", {
      type: "lines",
      linesClass:"xs:w-fit"
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top 1%",
        bottom: "bottom bottom",
        // markers: true,
        // scrub:true
      },
    });

    t1.fromTo(heroHeading.chars, { opacity: 0 }, { opacity: 1, stagger: 0.02 });
    t1.fromTo(
      heroDescription.lines,
      { opacity: 0 },
      { opacity: 1, stagger: 0.03 },
    );
    t1.fromTo(
      ".hero_btn",
      {
        opacity: 0,
        y: "0%",
      },
      { opacity: 1, y: "-10%" },
    );
        return () => {
      heroHeading.revert();
      heroDescription.revert();
    };
  });

  return (
    <section
      id="home"
      className="w-full min-h-dvh flex justify-center items-end bg-[url('/realestate_hero.png')] bg-cover bg-center bg-no-repeat xs:justify-start"
    >
      <ul className="w-full p-4 h-auto flex-col gap-4 items-center capitalize xs:w-[80%] md:items-start">
        <li className=" w-full text-start">
          <h1 className="hero_heading normal-case">
            Discovery luxury. Live with pride & confidence.
          </h1>
        </li>
        <li className="text-start w-full backdrop-blur-xs">
          <p className="hero_desc text-white/95 font-light text-start tracking-tight">
            brighthomes helps you explore high-end homes across top neighborhood
            with experts insight, curated tours, and smooth buying experience
            from start to finish.
          </p>
        </li>
        <li className="hero_btn w-full flex gap-3 justify-start items-center xs:justify-start ">
          <Button btnName="explore homes" style="hidden w-full bg-white p-2 text-center xs:block
          xs:text-nowrap md:p-1 md:w-[30%]" />
          <Button
            btnName="book a consultation"
            style="w-full bg-white p-2 text-center xs:text-nowrap md:p-1 md:w-[30%]"
          />
        </li>
      </ul>
    </section>
  );
};

export default Hero;
