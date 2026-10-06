export const ServiceCard = ({ name, img, index }) => {
  return (
    // <li className=" aspect-square w-62.5 flex-col gap-4">
    <li
      key={index}
      className="property_card_item aspect-square w-full flex-col gap-4"
    >
      <img src={img} className="w-full object-cover" alt="random image" />
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
      className="w-full property_card_item  p-1 rounded-xl bg-yellow-900"
    >
      <div className="w-full ">
        <img
          src={propertyImg}
          className="size-full rounded-xl"
          alt="certain image"
        />
        <div className="flex-col justify-center gap-4 items-center w-full">
          <div className="flex-row justify-around items-start w-full">
            <div className="flex-col text-start text-xs justify-start w-[80%] items-center">
              <p className="w-full">{propertyName}</p>
              <p className="text-gray-500">{propertyAddress}</p>
            </div>
            <button>{propertyPrice}</button>
          </div>
          <div className="flex-row justify-start gap-3 items-center w-full ">
            <p>beds:{additionalDetails.bed}</p>
            <p>baths: {additionalDetails.bath}</p>
            <p>sq ft:{additionalDetails.size}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
