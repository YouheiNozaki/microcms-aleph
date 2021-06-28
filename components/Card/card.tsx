import React from "react";

type Props = {
  id?: string;
  url: string;
  title: string;
  publish_article: string;
};

export const Card: React.VFC<Props> = (props) => {
  return (
    <React.Fragment key={props.id}>
      <article>
        <a href={props.url}>
          <p>{props.title}</p>
          <p>{props.publish_article}</p>
        </a>
      </article>
    </React.Fragment>
  );
};
