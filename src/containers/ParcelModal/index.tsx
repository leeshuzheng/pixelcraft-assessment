import React from "react";
import { ParcelModalProps } from "./definitions";
import Button from "@/components/Button";
import Image from "next/image";
import { AccessRights, Aaltar, ParcelIcons } from "./constants";

const ParcelModal: React.FC<ParcelModalProps> = () => {
  return (
    <div className="absolute max-w-[1200px] w-full z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 font-pixelar h-[668px] border-[3px] border-magenta rounded-[3px] shadow-md-magenta">
      <div className="flex flex-col items-center relative w-full h-full pt-8">
        <div className="bg-black opacity-[0.85] absolute top-0 left-0 h-full w-full z-[-2]"></div>
        <div className="absolute top-0 left-0 h-full w-full z-[-1] bg-lines"></div>

        <div className="border-[3px] border-magenta rounded-[3px] shadow-sm-magenta md:w-[570px] md:h-[100px] bg-black flex items-center justify-center absolute top-[-50px]">
          <h1 className="md:text-[54px] text-center">REALM #18763</h1>
        </div>

        <div className="flex flex-col md:px-16 gap-6 w-full">
          {/* access rights row */}
          <div className="flex w-full">
            <aside className="flex flex-row items-center gap-2">
              <Image src={AccessRights} alt="Access Rights" />
              <span className="text-magenta uppercase md:text-[30px] md:leading-[20px]">
                Access
                <br />
                Rights
              </span>
            </aside>
          </div>
          {/* row of 3 */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-[60px] justify-between basis-[28%]">
              <div className="flex flex-col gap-3 items-center border-[1.5px] border-magenta bg-gradient-magenta2 shadow-xs-magenta pt-7 px-7 pb-3">
                <Image
                  src={Aaltar}
                  alt="Aaltar Lvl 1"
                  width={180}
                  height={180}
                  className="aspect-square"
                />
                <h5 className="uppercase md:text-[38px] md:leading-7 text-center">
                  Alchemical
                  <br />
                  Aaltar
                </h5>
              </div>
              <Button variant="purple">Channel Alchemica</Button>
            </div>
            <div className="flex flex-col justify-between items-center basis-[28%]">
              <div className="flex flex-row md:gap-[18px]">
                <div>
                  <h4 className="uppercase text-magenta3 md:text-[40px] text-center">
                    Collected
                  </h4>
                  <ul className="flex flex-col gap-7 pb-[14px] relative bg-gradient-magenta">
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-magenta h-[2px]"></div>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.KekIcon} alt="kek" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        4,000
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.FudIcon} alt="fud" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        13,000
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.AlphaIcon} alt="alpha" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        27,000
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.FomoIcon} alt="fomo" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        2,500
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="uppercase md:text-[40px] text-center">
                    Remaining
                  </h4>{" "}
                  <ul className="flex flex-col gap-7 pb-[14px] relative bg-gradient-grey">
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.KekIcon} alt="kek" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        320K
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.FudIcon} alt="fud" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        877K
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.AlphaIcon} alt="alpha" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        1M
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Image src={ParcelIcons.FomoIcon} alt="fomo" />
                      <span className="md:text-[32px] md:leading-[30px]">
                        12K
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button variant="magenta">Empty Reservoirs</Button>
            </div>
            <div className="flex flex-col md:gap-[60px] justify-between items-center basis-[28%]">
              <div className="w-full">
                <h4 className="uppercase md:text-[40px] md:leading-[37px] text-center mb-3">
                  Stats
                </h4>
                <ul className="flex flex-row justify-around bg-gradient-magenta w-full pt-4 px-[10px] pb-[10px]">
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
                    <h5 className="opacity-60 text-2xl">Total claimed</h5>
                    <ul className="flex flex-row justify-around">
                      <li className="text-magenta7 md:text-[28px] md:leading-[26px]">
                        320K
                      </li>
                      <li className="text-green md:text-[28px] md:leading-[26px]">
                        877K
                      </li>
                      <li className="text-cyan7 md:text-[28px] md:leading-[26px]">
                        1M
                      </li>
                      <li className="text-red md:text-[28px] md:leading-[26px]">
                        12K
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="opacity-60 text-2xl">Harvest / Day</h5>
                    <ul className="flex flex-row justify-around">
                      <li className="text-magenta7 md:text-[28px] md:leading-[26px]">
                        15,000
                      </li>
                      <li className="text-green md:text-[28px] md:leading-[26px]">
                        2,000
                      </li>
                      <li className="text-cyan7 md:text-[28px] md:leading-[26px]">
                        1342
                      </li>
                      <li className="text-red md:text-[28px] md:leading-[26px]">
                        1,800
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="opacity-60 text-2xl">Reservoirs Capacity</h5>
                    <ul className="flex flex-row justify-around">
                      <li className="text-magenta7 md:text-[28px] md:leading-[26px]">
                        17,000
                      </li>
                      <li className="text-green md:text-[28px] md:leading-[26px]">
                        13,000
                      </li>
                      <li className="text-cyan7 md:text-[28px] md:leading-[26px]">
                        2,000
                      </li>
                      <li className="text-red md:text-[28px] md:leading-[26px]">
                        1,500
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Button variant="cyan">Survey Parcel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelModal;
