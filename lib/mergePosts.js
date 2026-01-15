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
      cluster: inference.cluster,
      clusterConfidence: inference.confidence,
      convergenceScore: 0,
      attestations: []
    };
  });

  return [...local, ...enrichedImported].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}
