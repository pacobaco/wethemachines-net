import { getAllPosts } from "../../lib/mergePosts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    posts.forEach(p => {
  if (typeof p.cluster !== "string") {
    throw new Error("Invalid cluster value");
  }
});

    <>
      <h1>Blog</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a
              href={
                post.source === "blogspot"
                  ? post.link
                  : `/blog/${post.slug}`
              }
            >
              {post.title}
            </a>
            <div style={{ opacity: 0.6 }}>
  {String(post.date || "").slice(0, 10)} ·{" "}
  {String(post.cluster)} ·{" "}
  {String(post.status)}
</div>

          </li>
        ))}
      </ul>
    </>
  );
}
