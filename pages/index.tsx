import { useDeno } from 'framework/react'
import React from 'react'
import { config } from "dotenv";
// import "https://deno.land/x/dotenv/load.ts";

export default function Home() {
  const articles = useDeno( async() =>  {
    return await (await fetch(`https://ryusou-portfolio.microcms.io/api/v1/articles`, {
      headers: {
        'X-API-KEY': `${config().X_API_KEY}`,
      }
    })).json()
  })
  console.log(articles)
  return (
    <div className="page">
      <head>
        <title>Ryusou Profile</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <h1>Welcome to <strong>Ryusou Profile</strong>!</h1>
      {articles.contents.map((content:any) => {
        return (
          <React.Fragment key={content.id}>
            <p>{content.title}</p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

// curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.11.2 && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts build
