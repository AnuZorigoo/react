import { Buttons } from "./Button";
import { data } from "../page";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeSection = () => {
  return (
    <div className="flex flex-col bg-[#F9FAFB] w-screen  h-[686px]  items-center">
      <div className="w-7xl pt-10 pb-10 flex flex-col items-center gap-10">
        <div className="w-[1065px] h-25">
          <div className="text-[20px] flex flex-col items-center">
            <p>Meet the People</p>
            <p>Behind the Process</p>
          </div>
          <p className="flex justify-center text-[16px] text-[#4A5565] pt-4">
            Our experienced team is dedicated to helping you find your perfect
            home
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 gap-6 w-7xl h-[390px]">
          {data.map((item, index) => {
            return (
              <EmployeeCard
                name={item.name}
                occupation={item.occupation}
                image={item.image}
                NumberOfPropertiesSold={item.NumberOfPropertiesSold}
                key={index}
              />
            );
          })}
        </div>
        <Buttons name="Meet the team" />
      </div>
    </div>
  );
};
