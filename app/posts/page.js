import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export const metadata = {
  title: "posts",
  description: "this is a post page",
};

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main className="mt-10 ">
      <h1>All Post is here</h1>
      <div className="mt-6">
        {posts.map((post) => (
          <div key={post.id} className="border my-2 px-4 py-2">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
