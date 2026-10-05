import { contactInfo, navLinks, socialLinks } from "../Constants";

const Footer = () => {
  return (
    <section className="flex-col text-black gap-5 justify-start items-center pt-5 capitalize p-1 w-screen">
      <div className="flex-col justify-center w-full text-start  gap-5 items-start">
        <h1 className="w-fit">Brighthome</h1>
        <p>
          brighthomes helps you explore premium homes, access expert guidance,
          and make real-estate decisions with confidence.from selling to buying
          to long-term investment strategy, we'are here to support your goals.
        </p>
      </div>
      <div className="flex-col justify-center items-center w-full gap-5">
        <ul className="flex flex-wrap gap-3 justify-start w-[80%] items-center">
          {navLinks.map((ele, i) => (
            <li key={i} className="">
              <a href={`#${ele.id}`}>
                <p>{ele.name}</p>
              </a>
            </li>
          ))}
        </ul>
        <ul className="w-full flex-row justify-start items-center">
          {socialLinks.map((ele, i) => (
            <li
              key={i}
              className="flex-row justify-center w-[20%] items-center gap-2"
            >
              <a href={ele.url}>
                <img src={ele.icon} alt={ele.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-row  justify-between items-center w-full">
        <p>{contactInfo.address}</p>
        <p>{contactInfo.phone}</p>
      </div>
    </section>
  );
};

export default Footer;
