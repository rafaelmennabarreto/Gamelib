import { useRef } from "react";
import SecundaryButton from "../shared/secundaryButton";

export default function ImageUpload() {
  const fileRef = useRef(null);

  const uploadClick = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <SecundaryButton label="Selecione uma imagem" onClick={uploadClick} />
      <input ref={fileRef} type="file" className="hidden" />
    </div>
  );
}
