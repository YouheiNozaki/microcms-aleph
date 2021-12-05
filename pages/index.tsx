import { useDeno } from "framework/react";
import React from "react";
import "../style/home.css";

import { Card } from "../components/Card/card.tsx";
import { microcmsClient } from "../lib/microcmsClient.ts";

import type { Post } from "../types/post.ts";

export default function Home() {
  const articles = useDeno<Post>(async () => {
    return await microcmsClient.get({
      endpoint: "articles",
      queries: { limit: 99 },
    });
  }, { revalidate: true });

  if (articles === undefined) {
    <div>Loading....</div>;
  }

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
