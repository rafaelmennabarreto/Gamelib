type AppInputProp = {
  onChange?: (value: string) => void,
  label?: string;
  key?: any;
}

export default function AppInput({ onChange, label }: AppInputProp) {
  return (
    <div className="flex flex-col">
      {label && <p className="mb-2">{label}</p>}
      <input
        type="text"
        onChange={value => onChange?.(value.target.value)}
        placeholder="Digite o nome do jogo"
        className="py-1 bg-transparent border border-transparent border-b-[#272727] outline-none" />
    </div>
  );
}
