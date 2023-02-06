import React from "react";
import { ParcelModalProps } from "./definitions";
import Button from "@/components/Button";
import Image from "next/image";
import {
  AccessRights,
  Aaltar,
  ParcelIcons,
  ReadyToChannelIcon,
  ReadyToEmptyIcon,
} from "./constants";
import styles from "./index.module.css";
import clsx from "clsx";

const ParcelModal: React.FC<ParcelModalProps> = () => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className={clsx(
          "flex min-h-full mx-auto items-end justify-center sm:items-center px-6 lg:px-4 py-[100px] max-w-[1240px] w-full",
          styles.parent
        )}
      >
        <div className="relative w-full">
          <div
            className={clsx(
              "border-[3px] border-magenta rounded-[3px] shadow-sm-magenta bg-black flex items-center justify-center absolute left-1/2 translate-x-[-50%] z-[10]",
              "md:w-[420px] md:h-[75px] md:top-[-38px]",
              "lg:w-[570px] lg:h-[100px] lg:top-[-50px]",
              "w-[60%] h-[60px] top-[-30px]"
            )}
          >
            <h1 className="text-[28px] sm:text-[36px] md:text-[54px] leading-nonetext-center">
              REALM #18763
            </h1>
          </div>
          <div
            className={clsx(
              "font-pixelar w-full cut-out top-left border-[3px] border-magenta rounded-[3px]",
              styles.customShape
            )}
          >
            <div className="flex flex-col items-center relative w-full h-full pt-10 lg:pt-8 pb-[66px]">
              <div className="bg-black absolute top-0 left-0 h-full w-full z-[-2]"></div>
              <div className="absolute top-0 left-0 h-full w-full z-[-1] bg-lines-mobile lg:bg-lines bg-no-repeat bg-cover"></div>

              <div className="flex flex-col md:px-6 lg:px-10 gap-6 w-full">
                {/* access rights row */}
                <div className="flex w-full px-5 md:px-0">
                  <aside className="flex flex-row items-center gap-2">
                    <Image src={AccessRights} alt="Access Rights" />
                    <span className="text-magenta uppercase text-2xl leading-none md:text-[30px] md:leading-[20px]">
                      Access
                      <br />
                      Rights
                    </span>
                  </aside>
                </div>
                {/* row of 3 */}
                <div className="flex flex-col lg:flex-row justify-between px-5 gap-12 lg:gap-0">
                  <div className="flex flex-col justify-between items-center basis-[28%] gap-7 md:gap-[60px] pt-[30.5px]">
                    <div className="flex flex-col gap-3 items-center border-[1.5px] border-magenta bg-gradient-magenta2 shadow-xs-magenta pt-7 px-7 pb-3 relative max-w-[281px]">
                      <div className="absolute top-[-30.5px] left-[-30.5px] w-[50px] h-[50px] md:h-[61.5px] md:w-[61.5px] flex flex-col items-center border-[4px] border-magenta bg-[#0F051C]">
                        <h2 className="text-3xl leading-tight md:text-[52px] md:leading-[48px] mt-[-8px]">
                          1
                        </h2>
                        <span className="text-lg leading-none md:text-[22px] md:leading-[20px] mt-[-10px]">
                          Level
                        </span>
                      </div>
                      <Image
                        src={Aaltar}
                        alt="Aaltar Lvl 1"
                        width={180}
                        height={180}
                        className="aspect-square"
                      />
                      <h5 className="uppercase text-3xl leading-none md:text-[38px] md:leading-7 text-center">
                        Alchemical
                        <br />
                        Aaltar
                      </h5>
                    </div>
                    <Button variant="purple">Channel Alchemica</Button>
                  </div>
                  <div className="flex flex-col items-center basis-[28%]">
                    <div className="flex flex-col justify-between items-center gap-7 md:gap-[60px] h-full w-full">
                      <div className="flex flex-row gap-[18px] w-full">
                        <div className="flex flex-col gap-8 w-1/2">
                          <h4 className="uppercase text-magenta3 text-3xl md:text-[40px] md:leading-[37px] text-center">
                            Collected
                          </h4>
                          <ul className="flex flex-col gap-7 pb-[14px] relative bg-gradient-magenta pl-2 pr-4">
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-magenta h-[2px]"></div>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.KekIcon} alt="kek" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                4,000
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.FudIcon} alt="fud" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                13,000
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.AlphaIcon} alt="alpha" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                27,000
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.FomoIcon} alt="fomo" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                2,500
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-8 w-1/2">
                          <h4 className="uppercase text-3xl md:text-[40px] text-center md:leading-[37px]">
                            Remaining
                          </h4>{" "}
                          <ul className="flex flex-col gap-7 pb-[14px] relative bg-gradient-grey pl-2 pr-4">
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.KekIcon} alt="kek" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                320K
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.FudIcon} alt="fud" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                877K
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.AlphaIcon} alt="alpha" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                1M
                              </span>
                            </li>
                            <li className="flex gap-2 items-center">
                              <Image src={ParcelIcons.FomoIcon} alt="fomo" />
                              <span className="md:text-[32px] md:leading-[30px] text-2xl">
                                12K
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button variant="magenta">Empty Reservoirs</Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7 md:gap-[60px] justify-between items-center basis-[28%]">
                    <div className="w-full">
                      <h4 className="uppercase text-3xl md:text-[40px] md:leading-[37px] text-center mb-3">
                        Stats
                      </h4>
                      <ul className="flex flex-row justify-around bg-gradient-magenta w-full pt-4 px-[10px] pb-[10px] mb-4">
                        <li>
                          <Image src={ParcelIcons.KekIcon} alt="kek" />
                        </li>
                        <li>
                          <Image src={ParcelIcons.FudIcon} alt="fud" />
                        </li>
                        <li>
                          <Image src={ParcelIcons.AlphaIcon} alt="alpha" />
                        </li>
                        <li>
                          <Image src={ParcelIcons.FomoIcon} alt="fomo" />
                        </li>
                      </ul>
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                          <h5 className="opacity-60 text-2xl md:leading-[22.3px]">
                            Total claimed
                          </h5>
                          <ul className="flex flex-row justify-around">
                            <li className="text-magenta7 md:text-[28px] md:leading-[26px] text-2xl">
                              320K
                            </li>
                            <li className="text-green md:text-[28px] md:leading-[26px] text-2xl">
                              877K
                            </li>
                            <li className="text-cyan7 md:text-[28px] md:leading-[26px] text-2xl">
                              1M
                            </li>
                            <li className="text-red md:text-[28px] md:leading-[26px] text-2xl">
                              12K
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h5 className="opacity-60 text-2xl md:leading-[22.3px]">
                            Harvest / Day
                          </h5>
                          <ul className="flex flex-row justify-around">
                            <li className="text-magenta7 md:text-[28px] md:leading-[26px] text-2xl">
                              15,000
                            </li>
                            <li className="text-green md:text-[28px] md:leading-[26px] text-2xl">
                              2,000
                            </li>
                            <li className="text-cyan7 md:text-[28px] md:leading-[26px] text-2xl">
                              1342
                            </li>
                            <li className="text-red md:text-[28px] md:leading-[26px] text-2xl">
                              1,800
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h5 className="opacity-60 text-2xl md:leading-[22.3px]">
                            Reservoirs Capacity
                          </h5>
                          <ul className="flex flex-row justify-around">
                            <li className="text-magenta7 md:text-[28px] md:leading-[26px] text-2xl">
                              17,000
                            </li>
                            <li className="text-green md:text-[28px] md:leading-[26px] text-2xl">
                              13,000
                            </li>
                            <li className="text-cyan7 md:text-[28px] md:leading-[26px] text-2xl">
                              2,000
                            </li>
                            <li className="text-red md:text-[28px] md:leading-[26px] text-2xl">
                              1,500
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Button variant="cyan">Survey Parcel</Button>
                  </div>
                </div>
                <div className="hidden lg:flex justify-between">
                  <div className="flex flex-row justify-center items-center gap-2 basis-[28%]">
                    <Image src={ReadyToChannelIcon} alt="Ready to channel" />
                    <span className="text-purple md:text-[32px] md:leading-[30px] uppercase">
                      Ready to channel
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2 basis-[28%]">
                    <Image src={ReadyToEmptyIcon} alt="Ready to empty" />
                    <span className="text-magenta2 md:text-[32px] md:leading-[30px] uppercase">
                      Ready to empty
                    </span>
                  </div>
                  <div className="basis-[28%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelModal;
