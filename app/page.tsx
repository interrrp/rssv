"use client";

import InputWithButton from "@/components/input-with-button";

export default function Home() {
  return (
    <main className="p-8 lg:mx-auto lg:w-1/2">
      <InputWithButton
        inputPlaceholder="Enter an RSS feed URL"
        buttonText="Load"
        onSubmit={(url) => {}}
      />
    </main>
  );
}
