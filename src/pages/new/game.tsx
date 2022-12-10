import AppImage from "../../core/components/newGame/appImage";
import NewGameForm from "../../core/components/newGame/newGameForm";

export default function NewGame() {
  return (
    <div className="flex flex-1 flex-col">

      <div className="h-12">
        action bar
      </div>

      <div className="flex flex-1 p-3">

        <div className="flex flex-3 flex-col">
          <AppImage />
        </div>

        <div className="flex flex-1">
          <NewGameForm />
        </div>
      </div>
    </div>
  );
}
