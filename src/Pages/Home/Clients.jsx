import { clientLists } from "../../Constants";

const Clients = () => {
  return (
    <section className="flex-col w-screen justify-center text-black capitalize items-center text-center">
      <h1>trusted by homeowners and buyers alike</h1>
      <ul className="flex-row justify-center items-center w-full">
        {clientLists.map((ele, i) => (
          <li key={i} className="flex-col justify-center items-center relative">
            <div className="flex-col justify-center items-center">
              <img src={ele.img} alt="" />
              <h2>{ele.name}</h2>
            </div>
            <p>{ele.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
