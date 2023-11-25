import { useEffect, useState } from "react";

import { Post } from "@/lib/post";

export type Feed = {
  title: string;
  description: string;
  link: string;
  items: Post[];
};

export function useFeed(url: string) {
  const [feed, setFeed] = useState<Feed | null>(null);

  useEffect(() => {
    setFeed({
      title: "rssv sample feed",
      description: "This is a sample feed.",
      link: "https://example.com",
      items: [
        {
          title: "rssv sample post",
          description: "This is a sample post.",
          link: "https://example.com",
        },
        {
          title: "rssv sample post #2",
          description: "This is a sample post - the sequel!",
          link: "https://example.com",
        },
      ],
    });
  }, []);

  return feed;
}
