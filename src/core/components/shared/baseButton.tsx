import { HTMLInputTypeAttribute } from "react";

export type BaseButtonProp = {
  className?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function BaseButton({ className, label, type, onClick, ...rest }: BaseButtonProp) {
  return <input
    type={type ? type : "button"}
    value={label}
    onClick={() => onClick?.()}
    {...rest}
    className={`flex-none p-4 outline-none bg-transparent rounded-xl hover:cursor-pointer active:bg-transparent ${className}`} />;
}
