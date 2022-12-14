import { useState } from "react";
import { GameModel } from "../../models/gamelib";
import AppInput from "../shared/appInput";
import AppTextArea from "../shared/appTextArea";
import CancelButton from "../shared/cancelButton";
import ConfirmButton from "../shared/confirmButton";
import ImageUpload, { changeProp } from "./imageUpload";

export type NewGameFormProp = {
  onImageSelect?: (image: string) => void
}

export default function NewGameForm({ onImageSelect }: NewGameFormProp) {
  const [data, setData] = useState<GameModel>({} as GameModel);

  const submit = (event: any) => {
    console.log("enviou");
    event.preventDefault();
  };

  const onNameChange = (newName: string) => {
    setData({
      ...data,
      name: newName
    });
  };

  const onImageSelectInternal = (item: changeProp) => {
    const image = URL.createObjectURL(item.value);
    onImageSelect(image);
  };

  return (
    <form className="flex flex-1 flex-col px-8" onSubmit={submit}>
      <h1 className="text-2xl h-[32px] mb-4">{data.name}</h1>

      <AppInput onChange={onNameChange} />
      <AppTextArea />

      <div className="flex flex-row mt-14">
        <div className="flex flex-1 justify-start">
          <ImageUpload onChange={onImageSelectInternal} />
        </div>
        <div className="flex flex-1 justify-end">
          <ConfirmButton label="salvar" className="mr-3" />
          <CancelButton label="cancelar" />
        </div>
      </div>
    </form>
  );
}
