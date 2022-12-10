
import BaseButton, { BaseButtonProp } from "./baseButton";

export default function CancelButton({ className, ...rest }: BaseButtonProp) {
  return <BaseButton {...rest} className={`border border-red-700 hover:bg-red-700 ${className}`} />;
}
