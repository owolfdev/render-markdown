import ReactMarkdown from "react-markdown";

// Define CSS styles as a constant
const styles = `
  /* Add your CSS styles here */
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
  ul {
    list-style-type: square;
    margin-left: 20px;
  }
  li:hover {
    color: orange; /* Change color on hover */
    cursor: pointer; /* Optional: Change cursor to pointer on hover */
  }
`;

const content = `## My Markdown Content

This is some **bold** text.

- List item 1
- List item 2
- List item 3
`;

export default function MarkdownPage() {
  return (
    <div>
      {/* Use the styles constant */}
      <style>{styles}</style>
      <h1>My Markdown Blog</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
