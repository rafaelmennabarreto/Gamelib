import BaseButton, { BaseButtonProp } from "./baseButton";

export default function SecundaryButton({ className, ...rest }: BaseButtonProp) {
  return <BaseButton {...rest} className={`border border-cyan-700 hover:bg-cyan-700 ${className}`} />;
}
