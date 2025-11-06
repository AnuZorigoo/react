export const Advice = () => {
  return (
    <div className="w-screen bg-[#F9FAFB] flex flex-col items-center">
      <div className="w-7xl h-[474px] flex flex-col gap-12 pt-10 pb-10 bg-[#F9FAFB]">
        <div className="text-center gap-[4] flex flex-col">
          <p className="text-[20px] ">Buying Doesn't Have to</p>
          <p className="text-[20px] ">Be Overwhelming</p>
          <p className="text-[16px] text-[#4A5565]">
            Our streamlined process makes finding your dream home simple and
            stress-free
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {text.map((item, index) => {
            return (
              <div className="h-[107px] w-[624px] flex gap-8">
                <img src={item.image} className="w-10 h-10"></img>
                <div className="flex flex-col gap-2">
                  <p className="text-[18px]">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const text = [
  {
    image: "/Container.png",
    title: "Browse Curated Homes",
    text: "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information",
  },
  {
    image: "/Container (2).png",
    title: "Get Expert Advice",
    text: "Connect with experienced agents who understand the market and can guide you through every step of your home-buying journey.",
  },
  {
    image: "/Container (1).png",
    title: "Build a Tour",
    text: "Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time.",
  },
  {
    image: "/Container (3).png",
    title: "Offer & Close",
    text: "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in.",
  },
];
