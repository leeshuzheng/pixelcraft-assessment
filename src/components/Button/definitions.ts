import { ButtonVariants } from "@/containers/ParcelModal/definitions";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button text
   */
  children: string;
  /**
   * Button variants
   */
  variant: ButtonVariants;
}
