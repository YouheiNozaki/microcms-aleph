import { useDeno } from "framework/react";
import React from "react";
import { config } from "dotenv";
import "../style/home.css";

import { Card } from "../components/Card/card.tsx";

type Post = {
  contents: [{
    id: string;
    url: string;
    title: string;
    publish_article: string;
  }];
};

export default function Home() {
  const articles = useDeno<Post>(async () => {
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
        {/* <link rel="stylesheet" href="../style/index.css" /> */}
      </head>
      <section>
        {articles.contents.map((content) => {
          return (
            <React.Fragment key={content.id}>
              <Card
                url={content.url}
                title={content.title}
                publish_article={content.publish_article}
              />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}
