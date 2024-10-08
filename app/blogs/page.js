import Link from "next/link";

export const metadata = {
  title: "blogs",
  description: "this is a blog page",
};

export default function Blogs() {
  const blogs = [
    { title: "blog 1", description: "blog 1 description", id: 1 },
    { title: "blog 2", description: "blog 2 description", id: 2 },
    { title: "blog 3", description: "blog 3 description", id: 3 },
  ];

  return (
    <main className="mt-10 ">
      <h2 className="text-start my-6">Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
