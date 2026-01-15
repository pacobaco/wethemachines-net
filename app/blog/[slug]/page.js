import { getLocalPost } from "../../../lib/posts";

export default async function BlogPost({ params }) {
  const post = await getLocalPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ opacity: 0.6 }}>
        {post.date} · Cluster: {post.cluster}
      </p>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <hr />

      <a href={`/platform?cluster=${post.cluster}`}>
        Enter convergence →
      </a>
    </article>
  );
}
