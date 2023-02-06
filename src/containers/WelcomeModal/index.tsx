import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { GotchiEth } from "./constants";
import { WelcomeModalProps } from "./definitions";
import { alienEncountersFont } from "@/fonts";
import styles from "./index.module.css";

const WelcomeModal: React.FC<WelcomeModalProps> = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex flex-col min-h-full mx-auto items-end justify-center sm:items-center px-6 py-[100px] lg:px-4 w-full z-10 font-pixelar">
        <div className="w-full max-w-[810px]">
          {/* yellow top section */}
          <div className="flex flex-col items-center gap-5 md:gap-7 mb-11 bg-gradient-yellow w-full relative">
            <div className={styles.topTrapezoid}></div>
            <div className={clsx("left-0", styles.topBorder)}></div>
            <div className={clsx("right-0", styles.topBorder)}></div>
            <div className={clsx(styles.topRightBox, styles.box)}></div>
            <div className={clsx(styles.topLeftBox, styles.box)}></div>
            <h1
              className={`flex flex-col text-4xl md:text-[56px] md:leading-[60px] uppercase text-yellow text-center ${alienEncountersFont.variable} font-alien -mt-2`}
            >
              <span className="text-3xl md:text-[42px]">Welcome</span> To The
              Aarena!
            </h1>
            <span className="text-2xl md:text-[32px]">
              The Aarena is currently full!
            </span>
            <div className="flex flex-col items-center sm:flex-row align-center gap-4 px-8 md:gap-5">
              <Image src={GotchiEth} alt="Gotchi ETH" />
              <aside className="flex flex-col">
                <h2 className="text-3xl md:text-[42px] text-center sm:text-left md:leading-10 uppercase">
                  There are <span className="text-yellow">17</span> Gotchis
                  ahead of you
                </h2>
                <span className="text-2xl md:text-[30px] leading-none uppercase text-center sm:text-left">
                  You will automatically join once a spot opens!
                </span>
              </aside>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-[30px] relative w-full pb-[10px] px-4">
            <div className={styles.bottomTrapezoid}></div>
            <div className={clsx("left-0", styles.bottomBorder)}></div>
            <div className={clsx("right-0", styles.bottomBorder)}></div>
            <div className={clsx(styles.bottomRightBox, styles.box)}></div>
            <div className={clsx(styles.bottomLeftBox, styles.box)}></div>
            <h1
              className={`relative flex flex-col items-center text-3xl md:text-[42px] md:leading-none max-w-[637px] w-full uppercase text-cyan2 text-center ${alienEncountersFont.variable} font-alien`}
            >
              <span className="hidden sm:flex h-[4px] bg-cyan w-[20%] md:w-[134px] absolute left-[9%] md:left-0 top-1/2 translate-y-[-82%]"></span>
              <span className="hidden sm:flex h-[4px] bg-cyan w-[20%] md:w-[134px] absolute right-[9%] md:right-0 top-1/2 translate-y-[-82%]"></span>
              Aarena Rules
            </h1>
            <span className="text-cyan2 uppercase text-2xl md:text-[32px] leading-none text-center sm:text-left">
              To EXIT the Aarena with your winnings you must:
            </span>
            <ul className="text-xl md:text-[28px]">
              <li className="flex items-center gap-3">
                <span className="bg-white h-[6px] w-[6px] relative top-[2px]"></span>
                Defeat at least 1 gotchi
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white h-[6px] w-[6px] relative top-[2px]"></span>
                Survive for at least 3 minutes
              </li>
            </ul>
            <h5 className="uppercase text-yellow text-xl leading-tight md:text-[28px] md:leading-[26px] max-w-[340px] md:max-w-[430px] text-center md:mt-5">
              Exiting without meeting these criteria will forfeit all your
              winnings!
            </h5>
            <div className="bg-gradient-cyan absolute top-0 left-0 w-full h-full -scale-y-100 z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
