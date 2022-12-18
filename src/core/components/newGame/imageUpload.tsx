import { ChangeEvent, useRef } from "react";
import SecundaryButton from "../shared/secundaryButton";

export type changeProp = {
  path: string;
  value: Blob;
}

type ImageUploadProp = {
  onChange?: (props: changeProp) => void;
}

export default function ImageUpload({ onChange }: ImageUploadProp) {
  const fileRef = useRef(null);

  const uploadClick = () => {
    fileRef.current.click();
  };

  const onChangeInternal = (event: any) => {
    const filePath = event.target["value"];

    if (filePath) {
      const fileBlob: Blob = event.target.files[0];

      if (!fileBlob.type.match("image/")) {
        //TODO add notification handler
        console.error("invalid format");
        return;
      }

      onChange?.({
        path: filePath,
        value: fileBlob
      });
    }
  };

  return (
    <div>
      <SecundaryButton label="Selecione uma imagem" onClick={uploadClick} />
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onChangeInternal} />
    </div>
  );
}
