import Image from "next/image";

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
        <div className="h-9 w-[140.34px] bg-[#FF6900] flex justify-center items-center text-white rounded-lg text-[14px]">
          Get Started
        </div>
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
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="rounded-1 flex flex-col gap-6 border border-gray-300 rounded-[14px]">
            <img
              className="w-full h-48 rounded-[14px]"
              src="/App (3).png"
            ></img>
            <div className="w-full h-38 pl-3 flex flex-col gap-2">
              <p className="text-[#FF6900]">$216,000</p>
              <p>Piney Hills</p>
              <div className="flex gap-1 items-center">
                <img src="/Icon.png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">4 Bedrooms</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/Icon (1).png" className="w-4 h-4"></img>
                <p className="text-[14px] text-[#4A5565]">2 Bathrooms</p>
                <img src="/Icon (2).png"></img>
                <p className="text-[14px] text-[#4A5565]">2,150 sqft</p>
              </div>
            </div>
          </div>
          <div className="w-[188.84px] h-9 bg-[#FF6900] rounded-full">
            Load More Listings
          </div>
        </div>
      </div>
    </div>
  );
}
