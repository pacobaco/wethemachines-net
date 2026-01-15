import { getAllPosts } from "../../lib/mergePosts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
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
              {post.date} · {post.cluster} · {post.status}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
