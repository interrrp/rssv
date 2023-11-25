"use client";

import { useState } from "react";

import InputWithButton from "@/components/input-with-button";
import Post from "@/components/post";
import { useFeed } from "@/lib/feed";

export default function Home() {
  const [feedURL, setFeedURL] = useState("");
  const feed = useFeed(feedURL);

  return (
    <main className="p-8 lg:mx-auto lg:w-1/2">
      <InputWithButton
        inputPlaceholder="Enter an RSS feed URL"
        buttonText="Load"
        onSubmit={setFeedURL}
        className="mb-4"
      />

      <ul className="space-y-2">
        {feed?.items.map((post) => (
          <li key={post.link}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
