export const HouseCard = (props) => {
  return (
    <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
      <img className="w-full h-48 rounded-[14px]" src={props.image}></img>
      <div className="w-full h-38 pl-3 flex flex-col gap-2">
        <p className="text-[#FF6900]">{props.price}</p>
        <p>{props.name}</p>
        <div className="flex gap-1 items-center">
          <img src="/Icon.png" className="w-4 h-4"></img>
          <p className="text-[14px] text-[#4A5565]">{props.bedroom} Bedrooms</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src="/Icon (1).png" className="w-4 h-4"></img>
          <p className="text-[14px] text-[#4A5565]">
            {props.bathroom} Bathrooms
          </p>
          <img src="/Icon (2).png"></img>
          <p className="text-[14px] text-[#4A5565]">{props.size}sqft</p>
        </div>
      </div>
    </div>
  );
};
