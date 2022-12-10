import { invoke } from "@tauri-apps/api/tauri";
import Link from "next/link";
import { useState } from "react";

function App() {
  const [name, setName] = useState("nada");

  const teste = async () => {
    const name = await invoke("teste", { name: "teste" });
    setName(name as string);
  };

  return (
    <div className="container flex-1 bg-red-700">
      <h1 onClick={teste}>oi meu chapa chapa</h1>
      <h2>{name}</h2>
      <Link href="/new/game">
        new game
      </Link>
    </div>
  );
}

export default App;
