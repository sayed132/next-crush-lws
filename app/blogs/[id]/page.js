import { notFound } from "next/navigation";

export const metadata = {
  title: "blog | details",
  description: "this is blog details page",
};

export default function BlogDetails({ params }) {
  const { id, description } = params;
  if (id === "4") {
    notFound();
  }
  return (
    <main className="">
      <h1>Blog Details: {id}</h1>
      <p>This is the blog details page for blog with id: {id}</p>
      <p>{description}</p>
    </main>
  );
}
