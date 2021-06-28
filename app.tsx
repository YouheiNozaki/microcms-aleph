import React, { ComponentType } from "react";
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}

// Buildコマンド
// curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.11.2 && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts build
