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
    category: [{
      id: "zenn" | "note" | "qiita" | "speakerdeck";
    }];
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
      </head>
      <section>
        {articles.contents.map((content) => {
          const categorys = content.category.map((category) => category.id);
          const categoryId = categorys[0];
          return (
            <React.Fragment key={content.id}>
              <Card
                url={content.url}
                title={content.title}
                publish_article={content.publish_article}
                category={categoryId}
              />
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}
