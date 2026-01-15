import { getLocalPosts } from "./posts";
import { fetchBlogspotPosts } from "./blogspot";
import { inferCluster } from "./clusterInfer";

export async function getAllPosts() {
  const local = getLocalPosts();
  const imported = await fetchBlogspotPosts();

  const enrichedImported = imported.map(post => {
    const inference = inferCluster(post.title + post.html);
    return {
  ...post,
  cluster: String(inference.cluster || "unassigned"),
  clusterConfidence: Number(inference.confidence || 0),
  convergenceScore: 0,
  attestations: [],
  date: post.date ? new Date(post.date).toISOString() : ""
};

  });

  return [...local, ...enrichedImported].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}
