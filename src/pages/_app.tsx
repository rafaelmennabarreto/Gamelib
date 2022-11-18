import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import { Navbar } from "../core/components/navbar";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row flex-1 bg-yellow-900">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
