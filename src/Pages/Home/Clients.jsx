import { clientLists } from "../../Constants";

const Clients = () => {
  return (
    <section className="flex-col w-full min-h-dvh justify-center bg-black capitalize items-center text-center p-2 gap-5 rounded-xl">
      <h2>trusted by homeowners and buyers alike</h2>
      <ul className="flex flex-wrap w-full gap-5">
        {clientLists.map((ele, i) => (
          <li key={i} className="flex-col w-62.5 justify-center items-center gap-2">
            <div
              className={`flex-col justify-center h-60 rounded-xl overflow-hidden aspect-square items-center relative`}
            >
              <img src={ele.img} className=" aspect-square absolute object-cover" alt=""/>
                <div className="border rounded-xl backdrop-blur-xs bottom-1 w-[95%] flex-col items-start p-1 absolute">
                  <h5 className="font-bold">{ele.name}</h5>
                  <p>{ele.occupation}</p>
                </div>
            </div>
            <p className="text-start flex-row justify-center items-center rounded-xl bg-gray-700 h-fit p-2">"{ele.description}"</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
