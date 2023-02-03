import React from "react";
import { ButtonProps } from "./definitions";
import clsx from "clsx";
import { variantStyle } from "./constants";

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={clsx("text-white md:text-[40px]", variantStyle[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
