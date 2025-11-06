import Image from "next/image";
import { Buttons } from "./_components/Button";
import { EmployeeCard } from "./_components/EmployeeCard";
import { HouseCard } from "./_components/HouseCard";
import { Getstarted } from "./_components/Getstarted";
import { Advice } from "./_components/Advice";
import { Properties } from "./_components/Properties";
import { EmployeeSection } from "./_components/EmployeeSection";
import { FooterSection } from "./_components/FooterSection";
import { Subscribe } from "./_components/Subscribe";
import { BlueSection } from "./_components/BlueSection";

export const data = [
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

export const house = [
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
      <Getstarted />
      <Advice />
      <Properties />
      <EmployeeSection />
      <BlueSection />
      <Subscribe />
      <FooterSection />
    </div>
  );
}
