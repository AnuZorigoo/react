export const BlueSection = () => {
  return (
    <div className="flex gap-8">
      {box.map((item, index) => {
        return (
          <div className="w-[333.6640625px] h-[152px] flex flex-col items-center gap-4">
            <img src={item.image} className="w-16 h-16"></img>
            <p className="text-[16px] ">{item.title}</p>
            <p className="text-[14px] text-[#4A5565] text-center">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
const box = [
  {
    image: "/Container (4).png",
    title: "Find your dream home for life",
    text: "Browse thousands of properties and find the perfect place",
  },
  {
    image: "/Container (5).png",
    title: "Pre-Approved Loan $1 to $5",
    text: "Get pre-approved quickly and know your budget",
  },
  {
    image: "/Container (6).png",
    title: "Commission free for life",
    text: "Save thousands with our commission-free model",
  },
];
