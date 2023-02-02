import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { pixelarFont } from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pixelarFont.variable} font-pixelar`}>
      <Component {...pageProps} />
    </main>
  );
}
