import BaseButton, { BaseButtonProp } from "./baseButton";

export default function ConfirmButton({ className, ...rest }: BaseButtonProp) {
  return <BaseButton {...rest} className={`border border-green-700 hover:bg-green-700 ${className}`} />;
}
