import React from "react";
import "./card.css"
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.4";

type Props = {
  id?: string;
  url: string;
  title: string;
  publish_article: string;
};

export const Card: React.VFC<Props> = (props) => {
  return (
      <article className="card">
        <a href={props.url} className="cardLink" target="_blank"  rel="noopener noreferrer">
          <p>{props.title}</p>
          <p>{dayjs(props.publish_article).format("YYYY年MM月DD日")}</p>
        </a>
      </article>
  );
};
