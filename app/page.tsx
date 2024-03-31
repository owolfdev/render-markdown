// pages/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage() {
  const contentPath = path.join(process.cwd(), "content/content.md");
  const fileContents = fs.readFileSync(contentPath, "utf8");
  const { content } = matter(fileContents);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
