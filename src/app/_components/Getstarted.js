import { Buttons } from "./Button";

export const Getstarted = () => {
  return (
    <div className="h-[590px] w-[1440px] flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col h-[112] w-[1280] justify-center items-center gap-4">
        <p className="text-[24px]">Smart Tools</p>
        <p className="text-[24px]">Real Experts, Easy Moves</p>
        <p className="text-[16px] text-[#4A5565]">
          Your journey to finding the perfect home starts here
        </p>
      </div>
      <div className="flex h-[234px] w-[1281px] gap-6 ">
        {text.map((item, index) => {
          return (
            <div className="h-234px border border-gray-300 w-[410.6666564941406px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
              <img src={item.image}></img>
              <p className="text-[15px]">{item.title}</p>
              <p className="text-center text-[14px] text-[#4A5565]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <Buttons name="Get Started" />
    </div>
  );
};
const text = [
  {
    image: "/App.png",
    title: "Top-end Curation",
    text: "Carefully selected properties that meet our high standards of quality",
  },
  {
    image: "/App (1).png",
    title: "Personalized Insight",
    text: "Expert guidance tailored to your unique needs and preferences",
  },
  {
    image: "/App (2).png",
    title: "Transaction Moving",
    text: "Streamlined process from viewing to closing with dedicated support",
  },
];
