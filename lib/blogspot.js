import Parser from "rss-parser";

const parser = new Parser();

const BLOGSPOT_FEED =
  "https://wethemachines.blogspot.com/feeds/posts/default";

export async function fetchBlogspotPosts() {
  const feed = await parser.parseURL(BLOGSPOT_FEED);

  return feed.items.map(item => ({
    id: item.guid || item.link,
    slug: item.link.split("/").pop(),
    title: item.title,
    date: item.pubDate,
    html: item["content:encoded"] || item.content,
    tags: item.categories || [],
    source: "blogspot",
    link: item.link,
    status: "imported"
  }));
}
