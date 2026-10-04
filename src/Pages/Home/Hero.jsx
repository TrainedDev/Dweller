import Button from "../../Components/Button";

const Hero = () => {
  return (
    <section className="w-screen min-h-dvh relative -z-10 -top-20 flex justify-center items-end bg-[url('/realestate_hero.png')] bg-cover bg-center bg-no-repeat">
      <ul className="w-full p-4 h-auto flex-col gap-4 items-center capitalize">
        <li className="text-4xl w-full text-start tracking-wide font-medium ">
          <h1>Discovery luxury. Live with pride & confidence.</h1>
        </li>
        <li className="text-left w-full">
          <p className="text-slate-300 text-start leading-6 tracking-wide text-[16px]">
            brighthomes helps you explore high-end homes across top neighborhood
            with experts insight, curated tours, and smooth buying experience
            from start to finish.
          </p>
        </li>
        <li className="w-full flex gap-3 justify-start items-center">
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
