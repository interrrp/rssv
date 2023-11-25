import { Post } from "@/lib/post";

export default function Post({ ...post }: Post) {
  return (
    <article className="p-6 border rounded-md flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="text-zinc-400">{post.description}</p>
      <a href={post.link}>{post.link}</a>
    </article>
  );
}
