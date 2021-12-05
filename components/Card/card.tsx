import React from "react";
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.4";

type Props = {
  id?: string;
  url: string;
  title: string;
  publish_article: string;
  category: "zenn" | "note" | "qiita" | "speakerdeck";
};

export const Card: React.VFC<Props> = (
  { url, title, publish_article, category },
) => {
  return (
    <article className="$card">
      <link rel="stylesheet" href="./card.module.css" />
      <a
        href={url}
        className="$cardLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          {category === "zenn"
            ? <img src="/zenn.png" width="80px" alt="zenn" />
            : category === "note"
            ? <img src="/note.png" width="40px" alt="note" />
            : category === "qiita"
            ? <img src="/qiita.png" width="32px" alt="qiita" />
            : category === "speakerdeck"
            ? <img src="/speakerdeck.png" width="32px" alt="speakerdeck" />
            : <img src="/cat.jpg" width="40px" />}
        </p>
        <h3>{title}</h3>
        <p>{dayjs(publish_article).format("YYYY年MM月DD日")}</p>
      </a>
    </article>
  );
};
