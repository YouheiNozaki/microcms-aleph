import { useDeno } from 'framework/react'
import React from 'react'
import Logo from '~/components/logo.tsx'

export default function Home() {
  const version = useDeno(() => Deno.version.deno)

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">Get Started</a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  )
}

// curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.11.2 && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts build
