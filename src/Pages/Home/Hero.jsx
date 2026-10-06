import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import Button from "../../Components/Button";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    const heroHeading = new SplitText(".hero_heading", {
      type: "chars",
    });
    const heroDescription = new SplitText(".hero_descp", {
      type: "lines",
    });

    const t1 = gsap.timeline({
      scrollTrigger: {
        target: "#home",
        start: "top 1%",
        bottom: "bottom bottom",
        markers: true,
        // scrub:true
      },
    });

    t1.fromTo(heroHeading.chars, { opacity: 0 }, { opacity: 1, stagger: 0.02 });
    t1.fromTo(
      heroDescription.lines,
      { opacity: 0 },
      { opacity: 1, stagger: 0.08 },
    );
    t1.fromTo(
      ".hero_btn",
      {
        opacity: 0,
        y: "0%",
      },
      { opacity: 1, y: "-10%" },
    );
  });

  return (
    <section
      id="home"
      className="w-screen min-h-dvh flex justify-center items-end bg-[url('/realestate_hero.png')] bg-cover bg-center bg-no-repeat"
    >
      <ul className="w-full p-4 h-auto flex-col gap-4 items-center capitalize">
        <li className="text-4xl w-full text-start tracking-wide font-medium ">
          <h1 className="hero_heading">
            Discovery luxury. Live with pride & confidence.
          </h1>
        </li>
        <li className="text-left w-full">
          <p className="hero_descp text-slate-300 text-start leading-6 tracking-wide text-[16px]">
            brighthomes helps you explore high-end homes across top neighborhood
            with experts insight, curated tours, and smooth buying experience
            from start to finish.
          </p>
        </li>
        <li className="hero_btn w-full flex gap-3 justify-start items-center">
          <Button btnName={"explore homes"} style="hidden" />
          <Button
            btnName="book a consultation"
            style="w-full bg-white p-2 text-center "
          />
        </li>
      </ul>
    </section>
  );
};

export default Hero;
