import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content/blog");

export function getLocalPosts() {
  if (!fs.existsSync(postsDir)) return [];

  return fs.readdirSync(postsDir).map(file => {
    const slug = file.replace(".md", "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);

    return {
      id: slug,
      slug,
      title: data.title,
      date: data.date,
      cluster: data.cluster || "unassigned",
      source: "wethemachines",
      status: "native",
      content
    };
  });
}

export async function getLocalPost(slug) {
  const raw = fs.readFileSync(
    path.join(postsDir, `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    cluster: data.cluster,
    html: processed.toString(),
    source: "wethemachines"
  };
}
