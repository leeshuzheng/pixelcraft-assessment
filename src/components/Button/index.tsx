import React from "react";
import { ButtonProps } from "./definitions";
import clsx from "clsx";
import { bgStyle, outerBorder, topBorder, innerBorder } from "./constants";

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "relative text-white md:text-[40px] md:h-[64px] md:max-w-[304px] w-full",
        bgStyle[variant]
      )}
      onClick={() => alert("testing click!")}
    >
      {/* top outside */}
      <span
        className={clsx(
          "absolute h-2 w-full top-[-8px] left-0",
          outerBorder[variant]
        )}
      ></span>
      {/* bottom outside */}
      <span
        className={clsx(
          "absolute h-2 w-full bottom-[-8px] left-0",
          outerBorder[variant]
        )}
      ></span>

      {/* left outside */}
      <span
        className={clsx(
          "absolute h-full w-2 top-0 left-[-8px]",
          outerBorder[variant]
        )}
      ></span>
      {/* right outside */}
      <span
        className={clsx(
          "absolute h-full w-2 top-0 right-[-8px]",
          outerBorder[variant]
        )}
      ></span>

      {/* L shaped border inside at the bottom */}
      <span
        className={clsx(
          "absolute right-0 top-0 h-full w-2",
          innerBorder[variant]
        )}
      ></span>

      <span
        className={clsx(
          "absolute bottom-0 left-0 h-2 w-full",
          innerBorder[variant]
        )}
      ></span>

      {/* top inside */}
      <span
        className={clsx("absolute top-0 left-0 w-full h-2", topBorder[variant])}
      ></span>

      {children}
    </button>
  );
};

export default Button;
