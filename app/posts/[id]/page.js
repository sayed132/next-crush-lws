import getAllPosts from "@/lib/getAllPosts";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostDetails({ params }) {
  const { id } = params;
  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComments(id);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <main className="">
      <h1>Post Details In: {id}</h1>
      <p>This is the Post details page for blog with id: {id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <hr />
      <div className="mt-10">
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.email}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}
