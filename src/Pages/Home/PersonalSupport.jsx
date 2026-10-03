import Button from "../../Components/Button";

const PersonalSupport = () => {
  return (
    <section className="flex-col  justify-start gap-15 items-center w-screen min-h-dvh bg-purple-600">
      <div className="flex-col bg-red-600 justify-center items-start w-full h-auto capitalize text-left gap-5">
        <h1 className="text-xl ">personal support for buying, selling, and investing</h1>
        <p className="text-[14px]">
          we provide clear guidance, real data, and personalized support to help
          you make confident real estate choice
        </p>

        <Button btnName={"view all services"} />
      </div>

      <ul className="flex-row flex-wrap w-screen h-[50%] justify-start items-center">
        <li className="w-[90%] h-1/2">
          <img src="" className="size-full bg-pink-600" alt="certain image" />
          <p>for selling</p>
        </li>
        <li className="w-[90%] h-1/2">
          <img src="" className="size-full bg-pink-600" alt="certain image" />
          <p>for buying</p>
        </li>
        <li className="w-[90%] h-1/2">
          <img src="" className="size-full bg-pink-600" alt="certain image" />
          <p>for investing</p>
        </li>
      </ul>
      {/* <div></div> */}
    </section>
  );
};

export default PersonalSupport;
