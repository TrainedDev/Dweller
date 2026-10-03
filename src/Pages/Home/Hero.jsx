import Button from "../../Components/Button";


const Hero = () => {
  return (
        <section className="bg-gray-800 w-screen min-h-dvh relative -z-10 -top-20 flex justify-center items-end">
      <ul className="w-full p-4 h-auto flex-col gap-10 bg-amber-400 items-center capitalize">
        <li className="text-4xl w-full text-start tracking-wide font-medium leading-12">
          <h1>Discovery luxury. Live with pride & confidence.</h1>
        </li>
        <li className="text-left w-full">
          <p>
            brighthomes helps you explore high-end homes across top neighborhood
            with experts insight, curated tours, and smooth buying experience
            from start to finish.
          </p>
        </li>
        <li className="w-full flex gap-3 justify-start items-center">
          <Button btnName={"explore homes"} style="hidden"/>
          <Button btnName={"schedule a call"} />
        </li>
      </ul>
    </section>
  )
}

export default Hero