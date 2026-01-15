import { mergePosts } from "@/lib/mergePosts";

export default async function BlogPage() {
  const posts = await mergePosts();

  // ✅ Guard MUST live here, inside the function, before return
  posts.forEach((p) => {
    if (typeof p.cluster !== "string") {
      throw new Error("Invalid cluster value");
    }
  });

  return (
    <>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h3>{post.title}</h3>

            <div style={{ opacity: 0.6 }}>
              {String(post.date || "").slice(0, 10)} ·{" "}
              {String(post.cluster)} ·{" "}
              {String(post.status)}
            </div>

            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
