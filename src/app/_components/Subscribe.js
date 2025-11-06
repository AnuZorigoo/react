import { Buttons } from "./Button";
export const Subscribe = () => {
  return (
    <div className="w-screen h-[260px] bg-[#101828] pt-10 pb-10 flex flex-col gap-6 items-center">
      <div className="h-12 text-white text-center text-[16px]">
        <p>The Only Market Update</p>
        <p>You'll Actually Want to Read</p>
      </div>
      <p className="text-[16px] text-[#99A1AF] text-center">
        Get weekly insights on the real estate market, new listings, and expert
        tips delivered to your inbox
      </p>
      <div className="flex gap-3">
        <div className="text-[#717182] w-[305.484375px] h-9 bg-[#FFFFFF] rounded-lg flex items-center pl-2">
          Enter your email
        </div>
        <Buttons name="Subscribe" />
      </div>
    </div>
  );
};
