import React from "react";
import { ParcelModalProps } from "./definitions";
import Button from "@/components/Button";

const ParcelModal: React.FC<ParcelModalProps> = () => {
  return (
    <div className="absolute max-w-[1200px] w-full z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 font-pixelar h-[668px] border-[3px] border-magenta rounded-[3px] shadow-md-magenta">
      <div className="flex flex-col items-center relative w-full h-full">
        <div className="bg-black opacity-[0.85] absolute top-0 left-0 h-full w-full z-[-2]"></div>
        <div className="absolute top-0 left-0 h-full w-full z-[-1] bg-lines"></div>
        <div className="border-[3px] border-magenta rounded-[3px] shadow-sm-magenta md:w-[570px] md:h-[100px] bg-black flex items-center justify-center absolute top-[-50px]">
          <h1 className="md:text-[54px] text-center">REALM #18763</h1>
        </div>
        <Button variant="purple">Channel Alchemica</Button>
        <Button variant="magenta">Empty Reservoirs</Button>
        <Button variant="cyan">Survey Parcel</Button>
      </div>
    </div>
  );
};

export default ParcelModal;
