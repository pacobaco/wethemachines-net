const CLUSTERS = {
  "epistemic-legitimacy": ["prestige", "knowledge", "authority"],
  "network-governance": ["network", "platform", "governance"],
  "media-structure": ["media", "broadcast", "attention"]
};

export function inferCluster(text) {
  let best = { cluster: "unassigned", confidence: 0 };

  for (const [cluster, keywords] of Object.entries(CLUSTERS)) {
    const hits = keywords.filter(k =>
      text.toLowerCase().includes(k)
    ).length;

    const confidence = hits / keywords.length;
    if (confidence > best.confidence) {
      best = { cluster, confidence };
    }
  }

  return best;
}
