import Button from "./Button";
import { PropertiesCard, ServiceCard } from "./Card";

const Properties = ({
  title,
  description,
  btn,
  serviceList = false,
  propertiesList = false,
}) => {
  return (
    <section
    id={propertiesList ? "properties": "services"}
      className={`flex-col p-2 justify-center gap-8  items-center w-full min-h-dvh ${propertiesList ? "bg-black text-white rounded-xl" : "bg-white text-black"}`}
    >
      <div className="flex-col justify-center items-start w-full h-auto capitalize text-left gap-5">
        <h2>{title}</h2>
        <p>{description}</p>
        <div
          className={` bg-green-400 flex-row justify-between items-center ${btn.length > 1 ? "w-full gap-3 p-1 h-8 rounded-full" : "w-[60%]"}`}
        >
          {btn.map((ele, i) => (
            <Button
              key={i}
              btnName={ele}
              style={`rounded cursor-pointer rounded-0 bg-white flex justify-center p-1 ${btn.length > 1 ? "w-[25%] flex-row justify-center items-center h-full rounded rounded-full" : "w-full"}`}
            />
          ))}
        </div>
      </div>

      <ul className="flex flex-wrap gap-5 capitalize w-full  justify-start items-center">
        {serviceList
          ? serviceList.map((ele, i) => (
              <ServiceCard key={i} name={ele.name} img={ele.img} />
            ))
          : propertiesList.map((ele, i) => (
              <PropertiesCard
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
            ))}
      </ul>
      {/* <div></div> */}
    </section>
  );
};

export default Properties;
