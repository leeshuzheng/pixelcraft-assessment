import React from "react";
import { WelcomeModalProps } from "./definitions";
import { alienEncountersFont } from "@/fonts";

const WelcomeModal: React.FC<WelcomeModalProps> = () => {
  return (
    <div className="absolute max-w-[810px] w-full z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 font-pixelar">
      <h1 className={`text-yellow text-center ${alienEncountersFont.variable}`}>
        Welcome To The Aarena!
      </h1>
      <span>The Aarena is currently full!</span>
    </div>
  );
};

export default WelcomeModal;
