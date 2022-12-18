import { useState } from "react";
import AppImage from "../../core/components/newGame/appImage";
import NewGameForm from "../../core/components/newGame/newGameForm";

export default function NewGame() {
  const [image, setImage] = useState("");

  const onImageSelect = (item: string) => {
    console.log(item);
    setImage(item);
  };

  return (
    <div className="flex flex-1 flex-col">

      <div className="h-12">
        action bar
      </div>

      <div className="flex flex-1 p-3">

        <div className="flex flex-3 flex-col">
          <AppImage src={image} />
        </div>

        <div className="flex flex-1">
          <NewGameForm onImageSelect={onImageSelect} />
        </div>
      </div>
    </div>
  );
}
