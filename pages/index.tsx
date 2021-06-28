import { useDeno } from "framework/react";
import React from "react";
import { config } from "dotenv";

export default function Home() {
  const articles = useDeno(async () => {
    return await (await fetch(
      `https://ryusou-portfolio.microcms.io/api/v1/articles?limit=99`,
      {
        headers: {
          "X-API-KEY": `${config().X_API_KEY}`,
        },
      },
    )).json();
  });
  return (
    <div className="page">
      <head>
        <title>Ryusou Profile</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <h1 className="text-6xl">
        Welcome to <strong className="text-6xl">Ryusou Profile</strong>!
      </h1>
      {articles.contents.map((content: any) => {
        return (
          <React.Fragment key={content.id}>
            <section>
              <a href={content.url}>
                <p>{content.title}</p>
                <p>{content.publish_article}</p>
              </a>
            </section>
          </React.Fragment>
        );
      })}
    </div>
  );
}
