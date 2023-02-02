import React from "react";
import { WelcomeModalProps } from "./definitions";

const WelcomeModal: React.FC<WelcomeModalProps> = () => {
  return (
    <div className="absolute max-w-[810px] w-full z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4  ">
      <h1 className="text-yellow font-alien text-center">
        Welcome To The Aarena!
      </h1>
      <span>The Aarena is currently full!</span>
    </div>
  );
};

export default WelcomeModal;
