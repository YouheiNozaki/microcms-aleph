import React, { ComponentType } from "react";
import { Header } from "./components/Header/header.tsx";
import "./style/layout.css"

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <Header />
      <main className="main">
        <head>
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="./style/index.css" />
        </head>
        <Page {...pageProps} />
      </main>
    </>
  );
}

// Buildコマンド
// curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.11.2 && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts build
