import { ButtonVariants } from "@/containers/ParcelModal/definitions";

export const bgStyle: { [key in ButtonVariants]: string } = {
  purple: "bg-purple2",
  magenta: "bg-magenta",
  cyan: "bg-cyan3",
};

export const outerBorder: { [key in ButtonVariants]: string } = {
  purple: "bg-purple5",
  magenta: "bg-magenta5",
  cyan: "bg-cyan4",
};

export const topBorder: { [key in ButtonVariants]: string } = {
  purple: "bg-purple3",
  magenta: "bg-magenta4",
  cyan: "bg-cyan5",
};

export const innerBorder: { [key in ButtonVariants]: string } = {
  purple: "bg-purple4",
  magenta: "bg-magenta6",
  cyan: "bg-cyan6",
};
