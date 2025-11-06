export const FooterSection = () => {
  return (
    <div className="w-screen h-[342px] flex justify-center items-center pt-[49px] pr-4 pl-4">
      <div className="w-7xl h-[245px] flex gap-8 flex-col">
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
          {word.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <p>{item.first}</p>
                <p className=" text-[#4A5565] text-[16px]">{item.second}</p>
                <p className=" text-[#4A5565] text-[16px]">{item.third}</p>
                <p className=" text-[#4A5565] text-[16px]">{item.fourth}</p>
                <p className="text-[#4A5565] text-[16px]">{item.fifth}</p>
              </div>
            );
          })}
        </div>
        <div className="w-7xl h-[53px] flex justify-between text-[#4A5565]">
          <p>© 2024 Real Estate Co. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const word = [
  {
    first: "NEED HELP",
    second: "Contact Us",
    third: "FAQ",
    fourth: "Support",
    fifth: "",
  },
  {
    first: "COMPANY",
    second: "About Us",
    third: "Careers",
    fourth: "Blog",
    fifth: "Press",
  },
  {
    first: "QUICK LINKS",
    second: "Buy",
    third: "Sell",
    fourth: "Rent",
    fifth: "Mortgage",
  },
  {
    first: "FOLLOW",
    second: "Facebook",
    third: "Twitter",
    fourth: "Instagram",
    fifth: "LinkedIn",
  },
];
