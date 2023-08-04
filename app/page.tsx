import Posts from "@/app/_components/Posts";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(postsQuery);

  return <Posts posts={posts} />
}