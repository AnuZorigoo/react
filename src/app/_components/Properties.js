import { HouseCard } from "./HouseCard";
import { house } from "../page";
export const Properties = () => {
  return (
    <div className="w-7xl h-[972px] flex flex-col items-center gap-10">
      <div className="w-[1065px] h-23 flex flex-col items-center gap-8">
        <p className="text-[16px]">Explore Properties</p>
        <div className="flex gap-5 ">
          <div className="w-[90.27px] h-9 bg-[#FF6900] flex justify-center items-center text-white rounded-full">
            House
          </div>
          <div className="w-[77.93px] h-9 bg-[#FFFFFF] flex justify-center items-center text-black rounded-full border border-gray-300">
            Villa
          </div>
          <div className="w-[120.32px] h-9 bg-[#FFFFFF] flex justify-center items-center text-black rounded-full border border-gray-300">
            Apartment
          </div>
        </div>
      </div>
      <div className="w-7xl h-[764px] grid grid-cols-3 grid-rows-2 gap-7 justify-center">
        {house.map((item, index) => {
          return (
            <HouseCard
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
              size={item.size}
            />
          );
        })}

        <div className="w-7xl flex justify-center">
          <div className="w-[188.84px] h-9 bg-[#FF6900] rounded-full flex justify-center items-center text-white">
            Load More Listings
          </div>
        </div>
      </div>
    </div>
  );
};
