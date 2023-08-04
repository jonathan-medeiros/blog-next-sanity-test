// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import Post from "@/app/_components/Post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await cachedClient(postPathsQuery);

//   return posts;
// }

export default async function Page() {
  const post = await client.fetch(postQuery);
  
  return <Post post={post} />;
}