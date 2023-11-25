"use client";

import InputWithButton from "@/components/input-with-button";
import Post from "@/components/post";

export default function Home() {
  return (
    <main className="p-8 lg:mx-auto lg:w-1/2">
      <InputWithButton
        inputPlaceholder="Enter an RSS feed URL"
        buttonText="Load"
        onSubmit={(url) => {}}
        className="mb-4"
      />

      <ul>
        <li>
          <Post
            title="Using Next.js with RSS"
            description="Talking about RSS, Next.js, and JavaScript"
            link="https://rssv.vercel.app"
          />
        </li>
      </ul>
    </main>
  );
}
