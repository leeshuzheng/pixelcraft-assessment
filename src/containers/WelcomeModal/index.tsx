import React from "react";
import { WelcomeModalProps } from "./definitions";
import { alienEncountersFont } from "@/fonts";
import Image from "next/image";
import { GotchiEth } from "./constants";

const WelcomeModal: React.FC<WelcomeModalProps> = () => {
  return (
    <div className="absolute max-w-[810px] w-full z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 font-pixelar">
      {/* yellow top section */}
      <div className="flex flex-col items-center md:gap-7 mb-11 bg-gradient-yellow">
        <h1
          className={`flex flex-col md:text-[56px] md:leading-[60px] uppercase text-yellow text-center ${alienEncountersFont.variable} font-alien`}
        >
          <span className="md:text-[42px]">Welcome</span> To The Aarena!
        </h1>
        <span className="md:text-[32px]">The Aarena is currently full!</span>
        <div className="flex flex-row align-center md:gap-5">
          <Image src={GotchiEth} alt="Gotchi ETH" />
          <aside className="flex flex-col">
            <h2 className="md:text-[42px] md:leading-10 uppercase">
              There are <span className="text-yellow">17</span> Gotchis ahead of
              you
            </h2>
            <span className="md:text-[30px] uppercase">
              You will automatically join once a spot opens!
            </span>
          </aside>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] relative">
        <h1
          className={`flex flex-col md:text-[42px] md:leading-[46px] uppercase text-cyan2 text-center ${alienEncountersFont.variable} font-alien`}
        >
          Aarena Rules
        </h1>
        <span className="text-cyan2 md:text-[32px]">
          To EXIT the Aarena with your winnings you must:
        </span>
        <ul className="md:text-[28px]">
          <li className="flex items-center gap-3">
            <span className="bg-white h-[6px] w-[6px] relative top-[2px]"></span>
            Defeat at least 1 gotchi
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-white h-[6px] w-[6px] relative top-[2px]"></span>
            Survive for at least 3 minutes
          </li>
        </ul>
        <h5 className="uppercase text-yellow md:text-[28px] md:leading-[26px] max-w-[55%] text-center md:mt-5">
          Exiting without meeting these criteria will forfeit all your winnings!
        </h5>
        <div className="bg-gradient-cyan absolute top-0 left-0 w-full h-full -scale-y-100 z-[-1]"></div>
      </div>
    </div>
  );
};

export default WelcomeModal;
