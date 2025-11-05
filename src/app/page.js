import Image from "next/image";
import { Buttons } from "./_components/Button";

const data = [
  {
    image: "/ImageWithFallback (4).png",
    name: "Micheal Chen",
    occupation: "Senior Real Estate Agent",
    NumberOfPropertiesSold: 24,
  },
  {
    image: "/ImageWithFallback (5).png",
    name: "David Martinez",
    occupation: "Property Specialist",
    NumberOfPropertiesSold: 18,
  },
  {
    image: "/ImageWithFallback (6).png",
    name: "James Wilson",
    occupation: "Investment Advisor",
    NumberOfPropertiesSold: 32,
  },
  {
    image: "/ImageWithFallback (7).png",
    name: "Robert Thompson",
    occupation: "Luxury Home Expert",
    NumberOfPropertiesSold: 28,
  },
];

const house = [
  {
    image: "/App (3).png",
    price: "$216000",
    name: "Piney Hills",
    bedroom: 4,
    bathroom: 2,
    size: 2150,
  },
  {
    image: "/ImageWithFallback.png",
    price: "$450,000",
    name: "River Oak",
    bedroom: 3,
    bathroom: 2,
    size: 1800,
  },
  {
    image: "/App (4).png",
    price: "$318,000",
    name: "Maple Glen",
    bedroom: 5,
    bathroom: 3,
    size: 2850,
  },
  {
    image: "/ImageWithFallback (1).png",
    price: "$325,000",
    name: "Forest Hill",
    bedroom: 4,
    bathroom: 2,
    size: 2200,
  },
  {
    image: "/ImageWithFallback (2).png",
    price: "$295,000",
    name: "Cedar Park",
    bedroom: 3,
    bathroom: 2,
    size: 1650,
  },
  {
    image: "/ImageWithFallback (3).png",
    price: "$425,000",
    name: "Willow Creek",
    bedroom: 4,
    bathroom: 3,
    size: 2650,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[107px]">
      <div className="h-[590px] w-[1440px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col h-[112] w-[1280] justify-center items-center gap-4">
          <p className="text-[24px]">Smart Tools</p>
          <p className="text-[24px]">Real Experts, Easy Moves</p>
          <p className="text-[16px] text-[#4A5565]">
            Your journey to finding the perfect home starts here
          </p>
        </div>
        <div className="flex h-[234px] w-[1281px] gap-6 ">
          <div className="h-234px border border-gray-300 w-[410.6666564941406px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
            <img src="/App.png"></img>
            <p className="text-[15px]">Top-end Curation</p>
            <p className="text-center text-[14px] text-[#4A5565]">
              Carefully selected properties that meet our high standards of
              quality
            </p>
          </div>
          <div className="h-234px border border-gray-300 w-[410.6666564941406px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
            <img src="/App (1).png"></img>
            <p className="text-[15px]">Personalized Insight</p>
            <p className="text-center text-[14px] text-[#4A5565]">
              Expert guidance tailored to your unique needs and preferences
            </p>
          </div>
          <div className="h-234px border border-gray-300 w-[410.6666564941406px] rounded-[14px] flex flex-col items-center gap-9 p-[25px]">
            <img src="/App (2).png"></img>
            <p className="text-[15px]">Transaction Moving</p>
            <p className="text-center text-[14px] text-[#4A5565]">
              Streamlined process from viewing to closing with dedicated support
            </p>
          </div>
        </div>
        <Buttons name="Get Started" />
      </div>
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
            <div className="h-[107px] w-[624px] flex gap-8">
              <img src="/Container.png" className="w-10 h-10"></img>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Browse Curated Homes</p>
                <p>
                  Explore our carefully selected collection of properties that
                  match your lifestyle and budget. Every listing is verified and
                  includes detailed information.
                </p>
              </div>
            </div>
            <div className="h-[107px] w-[624px] flex gap-8">
              <img src="/Container (2).png" className="w-10 h-10"></img>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Get Expert Advice</p>
                <p>
                  Connect with experienced agents who understand the market and
                  can guide you through every step of your home-buying journey.
                </p>
              </div>
            </div>
            <div className="h-[107px] w-[624px] flex gap-8">
              <img src="/Container (1).png" className="w-10 h-10"></img>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Build a Tour</p>
                <p>
                  Schedule viewings at your convenience and visit multiple
                  properties in one trip. Our team coordinates everything to
                  save you time.
                </p>
              </div>
            </div>
            <div className="h-[107px] w-[624px] flex gap-8">
              <img src="/Container (3).png" className="w-10 h-10"></img>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Offer & Close</p>
                <p>
                  Make confident offers with our support and navigate the
                  closing process smoothly. We handle the paperwork so you can
                  focus on moving in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div
                key={index}
                className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]"
              >
                <img
                  className="w-full h-48 rounded-[14px]"
                  src={item.image}
                ></img>
                <div className="w-full h-38 pl-3 flex flex-col gap-2">
                  <p className="text-[#FF6900]">{item.price}</p>
                  <p>{item.name}</p>
                  <div className="flex gap-1 items-center">
                    <img src="/Icon.png" className="w-4 h-4"></img>
                    <p className="text-[14px] text-[#4A5565]">
                      {item.bedroom} Bedrooms
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="/Icon (1).png" className="w-4 h-4"></img>
                    <p className="text-[14px] text-[#4A5565]">
                      {item.bathroom} Bathrooms
                    </p>
                    <img src="/Icon (2).png"></img>
                    <p className="text-[14px] text-[#4A5565]">
                      {item.size}sqft
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="w-7xl flex justify-center">
            <div className="w-[188.84px] h-9 bg-[#FF6900] rounded-full flex justify-center items-center text-white">
              Load More Listings
            </div>
          </div>
        </div>
      </div>
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
                <div
                  key={index}
                  className="w-[302px] h-[390px] border border-gray-300 rounded-[14px]"
                >
                  <img className="rounded-t-[14px]" src={item.image}></img>
                  <div className="flex flex-col gap-1 pt-4 pl-4 pr-4 items-center h-27">
                    <p className="text-[16px]">{item.name}</p>
                    <p className="text-[#4A5565] text-[14px]">
                      {item.occupation}
                    </p>
                    <p className="text-[#FF6900] text-[14px]">
                      {item.NumberOfPropertiesSold} Properties Sold
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <Buttons name="Meet the team" />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-[333.6640625px] h-[152px] flex flex-col items-center gap-4">
          <img src="/Container (4).png" className="w-16 h-16"></img>
          <p className="text-[16px] ">Find your dream home for life</p>
          <p className="text-[14px] text-[#4A5565] text-center">
            Browse thousands of properties and find the perfect place
          </p>
        </div>
        <div className="w-[333.6640625px] h-[152px] flex flex-col items-center gap-4">
          <img src="/Container (5).png" className="w-16 h-16"></img>
          <p className="text-[16px] ">Pre-Approved Loan $1 to $5</p>
          <p className="text-[14px] text-[#4A5565] text-center">
            Get pre-approved quickly and know your budget
          </p>
        </div>
        <div className="w-[333.6640625px] h-[152px] flex flex-col items-center gap-4">
          <img src="/Container (6).png" className="w-16 h-16"></img>
          <p className="text-[16px] ">Commission free for life</p>
          <p className="text-[14px] text-[#4A5565] text-center">
            Save thousands with our commission-free model
          </p>
        </div>
      </div>
      <div className="w-screen h-[260px] bg-[#101828] pt-10 pb-10 flex flex-col gap-6 items-center">
        <div className="h-12 text-white text-center text-[16px]">
          <p>The Only Market Update</p>
          <p>You'll Actually Want to Read</p>
        </div>
        <p className="text-[16px] text-[#99A1AF] text-center">
          Get weekly insights on the real estate market, new listings, and
          expert tips delivered to your inbox
        </p>
        <div className="flex gap-3">
          <div className="text-[#717182] w-[305.484375px] h-9 bg-[#FFFFFF] rounded-lg flex items-center pl-2">
            Enter your email
          </div>
          <Buttons name="Subscribe" />
        </div>
      </div>
    </div>
  );
}
