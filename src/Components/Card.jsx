export const ServiceCard = ({ name, img, index }) => {
  return (
    // <li className=" aspect-square w-62.5 flex-col gap-4">
    <li
      key={index}
      className="property_card_item h-70 w-full font-bold flex-col gap-4 rounded-md p-1 border border-olive-500/10 bg-blue-600/5 xs:w-62.5 lg:w-85 lg:h-90 xl:w-100 xl:h-100"
    >
      <img
        src={img}
        className="w-full h-full object-cover rounded-md"
        alt="random image"
      />
      <p>{name}</p>
    </li>
  );
};

export const PropertiesCard = ({
  index,
  propertyImg,
  propertyName,
  propertyAddress,
  propertyPrice,
  additionalDetails,
}) => {
  return (
    <li
      key={index}
      className="w-full property_card_item h-auto p-1 rounded-xl bg-white/7 xs:w-62.5 sm:w-70 md:w-85 xl:w-100 xl:h-110"
    >
      <div className="w-full h-auto flex-col gap-5">
        <img
          src={propertyImg}
          className="h-40 w-full object-cover object-center rounded-xl sm:h-50 md:h-70 lg:h-75"
          alt="certain image"
        />
        <div className="flex-col justify-center gap-4 items-center w-full">
          <div className="flex-row justify-around items-start w-full">
            <div className="flex-col text-start justify-start w-[80%] items-center">
              <p className="w-full text-xs">{propertyName}</p>
              <p className="text-gray-500 text-xs">{propertyAddress}</p>
            </div>
            <button className="bg-white rounded-full w-[40%] text-xs">{propertyPrice}</button>
          </div>
          <div className="flex-row justify-start gap-3 items-center w-full">
            <p className="text-xs">beds:{additionalDetails.bed}</p>
            <p className="text-xs">baths: {additionalDetails.bath}</p>
            <p className="text-xs">sq ft:{additionalDetails.size}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
