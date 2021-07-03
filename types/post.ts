export type Post = {
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
