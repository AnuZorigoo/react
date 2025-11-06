export const EmployeeCard = (props) => {
  return (
    <div className="w-[302px] h-[390px] border border-gray-300 rounded-[14px]">
      <img className="rounded-t-[14px]" src={props.image}></img>
      <div className="flex flex-col gap-1 pt-4 pl-4 pr-4 items-center h-27">
        <p className="text-[16px]">{props.name}</p>
        <p className="text-[#4A5565] text-[14px]">{props.occupation}</p>
        <p className="text-[#FF6900] text-[14px]">
          {props.NumberOfPropertiesSold} Properties Sold
        </p>
      </div>
    </div>
  );
}
    
