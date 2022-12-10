import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import { Navbar } from "../core/components/navbar";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex  flex-row w-screen h-screen flex-1">
      <Navbar />
      <div className="flex flex-1 min-w-[650px]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
